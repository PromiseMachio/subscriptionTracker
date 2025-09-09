import requests
import os
import hashlib
from urllib.parse import urlparse

def get_filename_from_url(url):
    parsed = urlparse(url)
    name = os.path.basename(parsed.path)
    return name or None

def generate_filename(fallback_ext='.jpg'):
    return f"image_{hashlib.md5(os.urandom(16)).hexdigest()}{fallback_ext}"

def file_hash(path, chunk_size=8192):
    h = hashlib.md5()
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b''):
            h.update(chunk)
    return h.hexdigest()

def main():
    print("Welcome to the Ubuntu Image Fetcher")
    print("A tool for mindfully collecting images from the web\n")
    
    url_input = input("Please enter the image URL (or multiple URLs separated by commas): ")
    urls = [u.strip() for u in url_input.split(',') if u.strip()]
    
    os.makedirs("Fetched_Images", exist_ok=True)
    existing_hashes = {file_hash(os.path.join("Fetched_Images", fn)): fn
                       for fn in os.listdir("Fetched_Images")
                       if os.path.isfile(os.path.join("Fetched_Images", fn))}
    
    for url in urls:
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            
            filename = get_filename_from_url(url)
            if not filename:
                # Use fallback while keeping extension if possible
                ext = os.path.splitext(urlparse(url).path)[1] or '.jpg'
                filename = generate_filename(ext)
            
            filepath = os.path.join("Fetched_Images", filename)
            
            # Save content temporarily to compute hash
            temp_path = filepath + ".tmp"
            with open(temp_path, 'wb') as f:
                f.write(response.content)
            
            new_hash = file_hash(temp_path)
            if new_hash in existing_hashes:
                print(f"→ Duplicate found. Skipping: {filename} (matches {existing_hashes[new_hash]})")
                os.remove(temp_path)
            else:
                os.rename(temp_path, filepath)
                existing_hashes[new_hash] = filename
                print(f"✓ Successfully fetched: {filename}")
                print(f"✓ Image saved to {filepath}")
            
        except requests.exceptions.RequestException as e:
            print(f"✗ Connection error while fetching {url}: {e}")
        except Exception as e:
            print(f"✗ An unexpected error occurred with {url}: {e}")
    
    print("\nConnection strengthened. Community enriched.")

if __name__ == "__main__":
    main()
