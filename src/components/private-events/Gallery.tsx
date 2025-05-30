import { useState } from "react";

const imageUrls = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", 
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", 
];

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
      <p className="text-center ">
        Explore our unique spaces for your special occasions
      </p>
    </div>
  );
};

const Pictures = () => {
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
              <div key={imgIdx} onClick={() => handleClick(url)} className="hover:z-50">
                <img
                  className={`h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-125  duration-300 ${
                    isClicked ? "grayscale-0" : "filter grayscale hover:grayscale-0"
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
    <div className="px-2 py-5 bg-black">
      <Header />
      <Pictures />
    </div>
  );
}
