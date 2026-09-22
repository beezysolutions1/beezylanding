from PIL import Image
import os

img_path = r"c:\Beezy\src\assets\extracted_logo_0.jpg"
out_dir = r"c:\Beezy\src\assets"

im = Image.open(img_path)
width, height = im.size
print(f"Original size: {width}x{height}")

# Convert to RGBA
im_rgba = im.convert("RGBA")
pixels = im_rgba.load()

# Let's find the bounding box of the bright logo elements (pixels with brightness > threshold)
min_x, max_x = width, 0
min_y, max_y = height, 0

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # In the logo, BEEZY is white (r,g,b > 200) and the icon is emerald (g > 100, b > 70)
        # Background is dark (r<30, g<40, b<40)
        if (r > 60 or g > 80 or b > 60):
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Detected logo bounding box: x=({min_x}, {max_x}), y=({min_y}, {max_y})")

# Add a slight padding
pad = 20
crop_box = (max(0, min_x - pad), max(0, min_y - pad), min(width, max_x + pad), min(height, max_y + pad))
logo_cropped = im.crop(crop_box)
logo_cropped.save(os.path.join(out_dir, "beezy_logo_cropped.png"))

# Create transparent version
# Background is nearly black (#000000 to #081518)
# We can use color keying / luminance masking for smooth antialiased alpha
logo_rgba = logo_cropped.convert("RGBA")
px = logo_rgba.load()
w, h = logo_rgba.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # Estimate background brightness
        # White text: r~255, g~255, b~255
        # Teal icon: r~15, g~160, b~140
        # Background: r<25, g<35, b<35
        # Let's calculate alpha based on max(r, g, b) relative to background floor
        bg_max = 28
        val = max(r, g*0.9, b*0.9)
        if val < bg_max:
            px[x, y] = (0, 0, 0, 0)
        else:
            alpha = min(255, int(((val - bg_max) / (200 - bg_max)) * 255))
            if alpha > 220:
                alpha = 255
            px[x, y] = (r, g, b, alpha)

logo_rgba.save(os.path.join(out_dir, "beezy_logo_transparent.png"))
print("Saved beezy_logo_transparent.png successfully!")

# Also let's extract just the icon emblem
# The icon is on the left side: from min_x to approximately where BEEZY starts
# Find split between icon and BEEZY
icon_crop_box = (max(0, min_x - pad), max(0, min_y - pad), int(min_x + (max_x - min_x) * 0.32), min(height, max_y + pad))
icon_cropped = logo_rgba.crop((0, 0, int(w * 0.32), h))
icon_cropped.save(os.path.join(out_dir, "beezy_icon_transparent.png"))
print("Saved beezy_icon_transparent.png successfully!")
