import React, { useState, useEffect } from 'react';

const ChefsBestsellersCarousel = () => {
  const dishes = [
    {
      id: 1,
      name: "Grilled Steak with Fries",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "BBQ Platter Special",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Premium Beef Steak",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Grilled Chicken Feast",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      name: "Gourmet Burger Deluxe",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [dishes.length]);

  // Get visible dishes (previous, current, next)
  const getVisibleDishes = () => {
    const prevIndex = currentIndex === 0 ? dishes.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % dishes.length;
    
    return {
      prev: dishes[prevIndex],
      current: dishes[currentIndex],
      next: dishes[nextIndex]
    };
  };

  const visibleDishes = getVisibleDishes();

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? dishes.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % dishes.length);
  };

  return (
    <div className="bg-red-800 py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto"> 
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light text-center mb-12">
          Chef's Bestsellers - Dishes You Must Try
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Images Container */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {/* Previous Image */}
            <div className="hidden md:block w-48 lg:w-64 h-32 lg:h-40 relative overflow-hidden rounded-lg shadow-lg transform scale-75 opacity-60 transition-all duration-500">
              <img
                src={visibleDishes.prev.image}
                alt={visibleDishes.prev.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Current Image (Center) */}
            <div className="w-64 md:w-80 lg:w-96 h-40 md:h-48 lg:h-56 relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500">
              <img
                src={visibleDishes.current.image}
                alt={visibleDishes.current.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay with dish name */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold text-center">
                    {visibleDishes.current.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Next Image */}
            <div className="hidden md:block w-48 lg:w-64 h-32 lg:h-40 relative overflow-hidden rounded-lg shadow-lg transform scale-75 opacity-60 transition-all duration-500">
              <img
                src={visibleDishes.next.image}
                alt={visibleDishes.next.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {dishes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Auto-slide pause on hover */}
        <div className="text-center mt-4 text-white text-sm opacity-60">
          Hover to pause auto-slide
        </div>
      </div>
    </div>
  );
};

export default ChefsBestsellersCarousel;