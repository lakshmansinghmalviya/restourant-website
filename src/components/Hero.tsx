import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Using a single static background image for main background
  const backgroundImage = "/menu/m2.png";

  // Array of drink images for the content container background
  const containerBackgroundImages = [
      "/drink/d1.png",
      "/menu/m1.png",
      "/drink/d2.png",
      "/drink/d3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect for container background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === containerBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [containerBackgroundImages.length]);

  const handleBookTable = () => {
    // Add your booking logic here
    console.log('Book a table clicked');
  };

  const handleExploreMenu = () => {
    // Add your menu navigation logic here
    console.log('Explore menu clicked');
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center flex justify-center items-center px-4 py-8 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-teal-800/40"></div>
      
      {/* Main content container with auto-sliding background */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 mt-20 sm:p-8 md:p-10 lg:p-12 max-w-5xl w-full mx-auto shadow-2xl border border-gray-700/50 overflow-hidden rounded-lg">
        {/* Auto-sliding background images for content container */}
        {containerBackgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/40 to-black/70 "></div>
        {/* backdrop-blur-lg uparvala */}
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Come for the coffee, stay for the food, leave with a drink — only at 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 block sm:inline sm:ml-2">Garcia's Kitchen</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-300 max-w-3xl leading-relaxed px-2">
            Where every sip, bite, and toast is packed with flavor — and chill is always on the menu
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center mt-4 sm:mt-6">
            <button 
              onClick={handleBookTable}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 ease-out py-3 sm:py-4 px-8 sm:px-10 rounded-full text-white text-base sm:text-lg font-semibold w-full sm:w-auto min-w-[180px] shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-purple-400/30"
            >
              <span className="flex items-center justify-center gap-2">
                📅 Book A Table
              </span>
            </button>
            
            <button 
              onClick={handleExploreMenu}
              className="group bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 ease-out py-3 sm:py-4 px-8 sm:px-10 rounded-full text-white text-base sm:text-lg font-semibold w-full sm:w-auto min-w-[180px] shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-emerald-400/30"
            >
              <span className="flex items-center justify-center gap-2">
                🍽️ Explore Menu
              </span>
            </button>
          </div>

          {/* Slide indicators */}
          {/* <div className="flex gap-2 mt-6">
            {containerBackgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-400/20 rounded-full blur-lg animate-bounce hidden md:block"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl animate-pulse hidden xl:block"></div>
    </div>
  );
};

// Demo App component to show the Hero in action
// const App = () => {
//   return ( 
//       <Hero /> 
//   );
// };

export default Hero;