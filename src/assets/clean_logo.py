from PIL import Image
import os

img_path = r"c:\Beezy\src\assets\extracted_logo_0.jpg"
out_dir = r"c:\Beezy\src\assets"

im = Image.open(img_path)
# Crop the logo area: x=(245, 1480), y=(910, 1250)
crop_box = (245, 910, 1480, 1250)
logo_crop = im.crop(crop_box)
logo_crop.save(os.path.join(out_dir, "beezy_logo_exact_black_bg.png"))

# Create ultra-clean transparent logo:
# Background is dark grey/black: r, g, b all < 25
# Text is pure solid white: r, g, b > 180
# Icon is emerald/teal: g > 80, b > 60
rgba = logo_crop.convert("RGBA")
px = rgba.load()
w, h = rgba.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # Luminance estimation
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        if lum < 15:
            px[x, y] = (0, 0, 0, 0)
        elif lum < 40:
            # Smooth anti-aliased edge
            alpha = int(((lum - 15) / (40 - 15)) * 255)
            # Remove black background contamination from semi-transparent edges
            px[x, y] = (r, g, b, alpha)
        else:
            px[x, y] = (r, g, b, 255)

rgba.save(os.path.join(out_dir, "beezy_logo_transparent.png"))

# Also save icon only
# Icon is on the left: from x=0 to x=310
# Find exact boundary of icon
icon_w = 0
for x in range(int(w * 0.35)):
    for y in range(h):
        r, g, b, a = px[x, y]
        if a > 0 and g > 80 and r < 60:
            if x > icon_w: icon_w = x

icon_crop = rgba.crop((0, 0, icon_w + 10, h))
icon_crop.save(os.path.join(out_dir, "beezy_icon_transparent.png"))

print("Generated clean beezy_logo_transparent.png and beezy_icon_transparent.png")
