from PIL import Image
import numpy as np

# Let's inspect the original icon image at full resolution
im = Image.open(r"c:\Beezy\src\assets\beezy_logo_exact.png")
arr = np.array(im)
icon_arr = arr[:354, :355]

# Let's find exact coordinates for each segment by finding all contours/boundaries
# Save an enhanced mask of the original icon for visual overlay comparison
mask = (icon_arr[:, :, 1] > 70) & (icon_arr[:, :, 1] > icon_arr[:, :, 0] + 15)
clean_icon = np.zeros((354, 355, 4), dtype=np.uint8)
for y in range(354):
    for x in range(355):
        if mask[y, x]:
            # Retain original RGB
            clean_icon[y, x] = [icon_arr[y,x,0], icon_arr[y,x,1], icon_arr[y,x,2], 255]

Image.fromarray(clean_icon).save(r"c:\Beezy\src\assets\clean_icon_exact.png")
print("Clean icon saved: (355x354)")
