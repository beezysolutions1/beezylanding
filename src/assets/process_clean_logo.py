from PIL import Image, ImageFilter
import numpy as np
import os

# Load exact high-res image
im = Image.open(r"c:\Beezy\src\assets\extracted_logo_0.jpg")
# The logo is in the range y: 750 to 1450, x: 150 to 1600
# Let's crop with precision
# In previous precise_logo.py: x=(300, 1550), y=(800, 1154) approximately
# Let's find the exact bounds in extracted_logo_0.jpg
im_rgba = im.convert("RGBA")
arr = np.array(im_rgba)

# Find foreground
# Teal: g > 80, g > r + 30
# White: r > 100, g > 100, b > 100
fg_mask = ((arr[:,:,1] > 70) & (arr[:,:,1] > arr[:,:,0] + 20)) | ((arr[:,:,0] > 70) & (arr[:,:,1] > 70) & (arr[:,:,2] > 70))
# Restrict to middle region y: 700 to 1300, x: 200 to 1600
reg_mask = np.zeros_like(fg_mask)
reg_mask[700:1300, 200:1600] = fg_mask[700:1300, 200:1600]

ys, xs = np.where(reg_mask)
min_y, max_y = ys.min(), ys.max()
min_x, max_x = xs.min(), xs.max()

pad = 16
crop_y1 = max(0, min_y - pad)
crop_y2 = min(arr.shape[0], max_y + pad)
crop_x1 = max(0, min_x - pad)
crop_x2 = min(arr.shape[1], max_x + pad)

cropped = arr[crop_y1:crop_y2, crop_x1:crop_x2]
h, w, _ = cropped.shape
print(f"Cropped logo dimensions: {w}x{h}")

# Create ultra-clean transparent logo with smooth alpha
clean_logo = np.zeros((h, w, 4), dtype=np.uint8)

# Estimate background color floor
for y in range(h):
    for x in range(w):
        r, g, b, _ = cropped[y, x]
        
        # Calculate brightness and color balance
        is_teal = (g > r + 15) and (g > 40)
        is_white = (r > 40) and (g > 40) and (b > 40) and (abs(int(r)-int(g)) < 30) and (abs(int(g)-int(b)) < 30)
        
        max_val = max(r, g, b)
        
        if is_teal:
            # Clean vibrant teal/mint
            # Background floor is around 15-25
            alpha = np.clip((int(g) - 20) / 120.0, 0.0, 1.0)
            if alpha > 0:
                # Color correct to pure brand emerald/teal
                ratio = min(1.0, alpha * 1.3)
                out_r = int(np.clip(r * 1.05, 0, 255))
                out_g = int(np.clip(g * 1.15, 0, 255))
                out_b = int(np.clip(b * 1.1, 0, 255))
                clean_logo[y, x] = [out_r, out_g, out_b, int(ratio * 255)]
        elif is_white:
            # Clean crisp white
            alpha = np.clip((int(max_val) - 20) / 130.0, 0.0, 1.0)
            if alpha > 0:
                ratio = min(1.0, alpha * 1.25)
                # boost whites
                clean_logo[y, x] = [255, 255, 255, int(ratio * 255)]
        else:
            if max_val > 40:
                alpha = np.clip((int(max_val) - 30) / 100.0, 0.0, 1.0)
                clean_logo[y, x] = [r, g, b, int(alpha * 255)]

# Save crisp 32-bit transparent PNG
out_img = Image.fromarray(clean_logo, mode="RGBA")
out_img.save(r"c:\Beezy\src\assets\beezy_logo_transparent.png")
print("Saved clean beezy_logo_transparent.png")

# Now extract clean icon only
# Icon is on the left side: find where white text starts
# White text starts around x = 360-380
icon_w = int(w * 0.285)
icon_img = out_img.crop((0, 0, icon_w, h))

# Trim empty vertical / horizontal bounds of icon
icon_arr = np.array(icon_img)
i_ys, i_xs = np.where(icon_arr[:, :, 3] > 20)
icon_trimmed = icon_img.crop((max(0, i_xs.min()-6), max(0, i_ys.min()-6), min(icon_w, i_xs.max()+6), min(h, i_ys.max()+6)))
icon_trimmed.save(r"c:\Beezy\src\assets\beezy_icon_transparent.png")
print(f"Saved clean beezy_icon_transparent.png ({icon_trimmed.size[0]}x{icon_trimmed.size[1]})")

# Also save high-res 2x version for ultra crisp Retina displays
high_res_logo = out_img.resize((w * 2, h * 2), Image.Resampling.LANCZOS)
high_res_logo.save(r"c:\Beezy\src\assets\beezy_logo_2x.png")
print("Saved beezy_logo_2x.png")
