import os, sys, re, zlib

pdf_path = r"C:\Users\nehaf\.gemini\antigravity-ide\brain\788c0b64-b8e1-4811-8ef3-d475eb7bb3ca\.user_uploaded\media_1789801566406.pdf"
out_dir = r"c:\Beezy\src\assets"
os.makedirs(out_dir, exist_ok=True)

with open(pdf_path, 'rb') as f:
    data = f.read()

# Try extracting JPEG streams
jpeg_matches = list(re.finditer(b'\xff\xd8\xff', data))
print(f"Found {len(jpeg_matches)} JPEG headers")

for i, match in enumerate(jpeg_matches):
    start = match.start()
    end = data.find(b'\xff\xd9', start)
    if end != -1:
        jpg_data = data[start:end+2]
        out_file = os.path.join(out_dir, f"extracted_logo_{i}.jpg")
        with open(out_file, 'wb') as out_f:
            out_f.write(jpg_data)
        print(f"Saved {out_file} ({len(jpg_data)} bytes)")

# Try extracting PNG / FlateDecode streams
stream_matches = list(re.finditer(rb'/Filter\s*/FlateDecode.*?stream\r?\n', data, re.DOTALL))
print(f"Found {len(stream_matches)} FlateDecode streams")

for i, match in enumerate(stream_matches):
    start = match.end()
    end = data.find(b'endstream', start)
    if end != -1:
        raw_stream = data[start:end].strip()
        try:
            decompressed = zlib.decompress(raw_stream)
            out_file = os.path.join(out_dir, f"stream_{i}.bin")
            with open(out_file, 'wb') as out_f:
                out_f.write(decompressed)
            print(f"Decompressed stream {i} ({len(decompressed)} bytes)")
        except Exception as e:
            pass
