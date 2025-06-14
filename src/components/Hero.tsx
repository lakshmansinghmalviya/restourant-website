import { useState, useEffect } from 'react';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const getImageUrls = (): string[] => {
  const urls = [];
  // main carousel bg
  for (let i = 1; i <= 16; i++) {
    urls.push("/food/f" + i + ".jpg");
  }
  return urls;
};

const Hero = () => {
  // Auto-sliding background for main section
  const mainBackgroundImages =  getImageUrls();

  // Array of drink images for the content container background
  const containerBackgroundImages = [
    "/drink/d1.png",
    "/menu/m1.png",
    "/drink/d2.png",
    "/drink/d3.png",
  ];

  const [mainBgIndex, setMainBgIndex] = useState(0);
  const [containerBgIndex, setContainerBgIndex] = useState(0);

  // Auto-slide for main background
  useEffect(() => {
    const interval = setInterval(() => {
      setMainBgIndex((prevIndex) =>
        prevIndex === mainBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for content container background
  useEffect(() => {
    const interval = setInterval(() => {
      setContainerBgIndex((prevIndex) =>
        prevIndex === containerBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleBookTable = () => {
    console.log('Book a table clicked');
  };

  const handleExploreMenu = () => {
    console.log('Explore menu clicked');
  };

  return (
    <div className="relative flex justify-center items-center px-4 py-8 max-h-[50%] overflow-hidden">

      {/* Auto-sliding main background images */}
      {mainBackgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ${index === mainBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-teal-800/40 z-0" />

      {/* Main content container with sliding background */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 mt-20 sm:p-8 md:p-10 lg:p-12 max-w-5xl w-full mx-auto shadow-2xl border border-gray-700/50 overflow-hidden rounded-lg">

        {/* Sliding background inside content box */}
        {containerBackgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === containerBgIndex ? 'opacity-30' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">

          <h1 className="text-center font-normal text-2xl md:text-4xl text-white">
            Life is simple{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-green-400 to-gray-500 leading-tight">
              <Typewriter
                words={['Eat', 'Work', 'Fun', "Sleep", "Repeat!"]}
                loop={500}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
              />
            </span>
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 leading-tight">
            Come for the coffee, stay for the food, leave with a drink —
            <span className="block sm:inline sm:ml-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Garcia's Kitchen
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-300 max-w-3xl leading-relaxed px-2">
            Where every sip, bite, and toast is packed with flavor — and chill is always on the menu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center mt-4 sm:mt-6">
            <button
              onClick={handleBookTable}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 ease-out py-3 sm:py-4 px-8 sm:px-10 rounded-full text-white text-base sm:text-lg font-semibold w-full sm:w-auto min-w-[180px] shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-purple-400/30"
            >
              📅 Book A Table
            </button>

            <button
              onClick={handleExploreMenu}
              className="group bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 ease-out py-3 sm:py-4 px-8 sm:px-10 rounded-full text-white text-base sm:text-lg font-semibold w-full sm:w-auto min-w-[180px] shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-emerald-400/30"
            >
              🍽️ Explore Menu
            </button>
          </div>
        </div>
      </div>

      {/* Floating blobs for effect */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-400/20 rounded-full blur-lg animate-bounce hidden md:block" />
      <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl animate-pulse hidden xl:block" />
    </div>
  );
};

export default Hero;
