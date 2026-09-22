from PIL import Image
import os

img_path = r"c:\Beezy\src\assets\extracted_logo_0.jpg"
out_dir = r"c:\Beezy\src\assets"

im = Image.open(img_path)
width, height = im.size

# The logo is located in the middle section of the 1728x2160 image
# Let's search specifically in y from 750 to 1450, x from 150 to 1600
im_rgba = im.convert("RGBA")
pixels = im_rgba.load()

min_x, max_x = width, 0
min_y, max_y = height, 0

# The background in this region is very dark: r < 10, g < 15, b < 15
for y in range(750, 1450):
    for x in range(150, 1600):
        r, g, b, a = pixels[x, y]
        # Text is bright white (r>150, g>150, b>150), Icon is bright teal (g>100, b>80)
        if (r > 60 and g > 60 and b > 60) or (g > 100 and b > 70):
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Precise logo box: x=({min_x}, {max_x}), y=({min_y}, {max_y})")

pad_x = 10
pad_y = 10
crop_box = (min_x - pad_x, min_y - pad_y, max_x + pad_x, max_y + pad_y)
logo_crop = im.crop(crop_box)
logo_crop.save(os.path.join(out_dir, "beezy_logo_exact.png"))

# Create clean transparent PNG
logo_trans = logo_crop.convert("RGBA")
px = logo_trans.load()
w, h = logo_trans.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # In this cropped area, black background is r < 12, g < 18, b < 18
        max_c = max(r, g, b)
        if max_c < 18:
            px[x, y] = (0, 0, 0, 0)
        elif max_c < 45:
            alpha = int(((max_c - 18) / (45 - 18)) * 255)
            px[x, y] = (r, g, b, alpha)
        else:
            px[x, y] = (r, g, b, 255)

logo_trans.save(os.path.join(out_dir, "beezy_logo_transparent.png"))

# Extract icon only (from left edge up to where 'B' of BEEZY starts)
# Find where 'B' starts: in x, between 380 and 460
# Let's inspect where the icon ends and BEEZY begins
# The icon is teal (r < 50, g > 100), BEEZY is white (r > 150)
icon_right = 0
for x in range(0, int(w * 0.4)):
    has_teal = False
    for y in range(h):
        r, g, b, a = px[x, y]
        if a > 0 and r < 80 and g > 80:
            has_teal = True
    if has_teal:
        icon_right = x

icon_crop_box = (0, 0, icon_right + 12, h)
icon_trans = logo_trans.crop(icon_crop_box)
icon_trans.save(os.path.join(out_dir, "beezy_icon_transparent.png"))

print(f"Cropped logo size: {w}x{h}, Icon width: {icon_right+12}")
