import os
import urllib.request
import ssl

# Define assets mapping (Filename -> URL)
assets = {
    "LOGO-Final.png": "https://oscaremotors.com/wp-content/uploads/2024/01/LOGO-Final.png",
    "logo-2-2.png": "https://oscaremotors.com/wp-content/uploads/2024/01/logo-2-2.png",
    "Banner-01.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Banner-01.png",
    "Banner-02.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Banner-02.png",
    "Banner-03.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Banner-03.png",
    "Banner-04.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Banner-04.png",
    "SLide-Banners-Ready-assist.png": "https://oscaremotors.com/wp-content/uploads/2024/02/SLide-Banners-Ready-assist.png",
    "SLide-Banners-Ready-assist-02.png": "https://oscaremotors.com/wp-content/uploads/2024/02/SLide-Banners-Ready-assist-02.png",
    "Storie.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Storie.png",
    "storie-gallery-10-1.png": "https://oscaremotors.com/wp-content/uploads/2024/01/storie-gallery-10-1.png",
    "Jeet-X-red.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Jeet-X-red.png",
    "Oscar-Partner-Pro-1.png": "https://oscaremotors.com/wp-content/uploads/2024/07/Oscar-Partner-Pro-1.png",
    "Oscar-Partner-Pro-Plus.png": "https://oscaremotors.com/wp-content/uploads/2024/07/Oscar-Partner-Pro-Plus.png",
    "Partner-pro-plus-logo-150x150.png": "https://oscaremotors.com/wp-content/uploads/2024/08/Partner-pro-plus-logo-150x150.png",
    "About-us-Image-Madurai-Peoples-Fav-EVs-Biggest-showroom.png": "https://oscaremotors.com/wp-content/uploads/2024/08/About-us-Image-Madurai-Peoples-Fav-EVs-Biggest-showroom.png",
    "Battre-white-1-150x150.png": "https://oscaremotors.com/wp-content/uploads/2024/01/Battre-white-1-150x150.png",
    "ivoomi-white-1-150x150.png": "https://oscaremotors.com/wp-content/uploads/2024/01/ivoomi-white-1-150x150.png",
    "onzo-white-1-150x150.png": "https://oscaremotors.com/wp-content/uploads/2024/01/onzo-white-1-150x150.png",
    "SFV9RFM.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/SFV9RFM.jpg",
    "guest.png": "https://oscaremotors.com/wp-content/plugins/widget-google-reviews/assets/img/guest.png",
    # 7 Google review location photos
    "ChIJ8XS3yLnFADsR1u-G6zrO3ew_19760d835cba15666a6938cbbb4270ab.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_19760d835cba15666a6938cbbb4270ab.jpg",
    "_551584052ba039f7abbfa28b9bc2d3b1.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_551584052ba039f7abbfa28b9bc2d3b1.jpg",
    "_735f7169b4f37434ed396e8b7145f01d.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_735f7169b4f37434ed396e8b7145f01d.jpg",
    "_8efed8b28704ad413fd0e0c1515ee33b.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_8efed8b28704ad413fd0e0c1515ee33b.jpg",
    "_b0790e3fc123c002fa8f229c030b7d2f.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_b0790e3fc123c002fa8f229c030b7d2f.jpg",
    "_c239b54786328f65482687f68007ec91.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_c239b54786328f65482687f68007ec91.jpg",
    "_e8a2e2c5429e99e659e48454d8d6bbe5.jpg": "https://oscaremotors.com/wp-content/uploads/2024/01/ChIJ8XS3yLnFADsR1u-G6zrO3ew_e8a2e2c5429e99e659e48454d8d6bbe5.jpg"
}

# Create assets folder if not exists
assets_dir = os.path.join(os.getcwd(), "assets")
os.makedirs(assets_dir, exist_ok=True)

# Bypass SSL errors if any
ssl_context = ssl._create_unverified_context()

print("Starting asset downloads...")
for filename, url in assets.items():
    filepath = os.path.join(assets_dir, filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req, context=ssl_context) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename} from {url}: {e}")

print("Asset downloads completed!")
