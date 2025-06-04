import { useState } from "react";

// Generate array of image URLs from /gallery/g1.jpg to /gallery/g16.jpg
const getImageUrls = (): string[] => {
  const urls = [];
  for (let i = 1; i <= 16; i++) {
    urls.push("/gallary/g" + i + ".jpg");
  }
  return urls;
};

// Utility to chunk array into groups of 3
const chunkArray = (arr: string[], size: number): string[][] => {
  const chunks: string[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-white">
      <h1 className="text-3xl font-bold">Private Events Gallery</h1>
      <p className="text-center">
        Explore our unique spaces for your special occasions
      </p>
    </div>
  );
};

const Pictures = () => {
  const imageUrls = getImageUrls();
  console.log(imageUrls);
  const chunks = chunkArray(imageUrls, 3);
  const [clickedImages, setClickedImages] = useState<Set<string>>(new Set());

  const handleClick = (url: string) => {
    setClickedImages((prev) => new Set(prev).add(url));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {chunks.map((group, colIdx) => (
        <div className="grid gap-4" key={colIdx}>
          {group.map((url, imgIdx) => {
            const isClicked = clickedImages.has(url);
            return (
              <div
                key={imgIdx}
                onClick={() => handleClick(url)}
                className="hover:z-50"
              >
                <img
                  loading="lazy"
                  className={`h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-125 duration-300 ${isClicked
                      ? "grayscale-0"
                      : "filter grayscale hover:grayscale-0"
                    }`}
                  src={url}
                  alt={`Masonry image ${colIdx * 3 + imgIdx + 1}`}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="px-2 py-5 bg-black min-h-screen">
      <Header />
      <Pictures />
    </div>
  );
}
