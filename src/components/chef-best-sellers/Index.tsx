import React, { useState, useEffect } from 'react';
import { ChefHat, Star, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';

// Replace with actual image import or path
const food = '/menu/m1.png';

interface FoodItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  cookTime: string;
  serves: number;
  badge?: string;
}

const BestSellers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const foods: FoodItem[] = [
    {
      id: 1,
      image: food,
      name: "Truffle Risotto Supreme",
      description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
      price: "$28.99",
      rating: 4.9,
      reviews: 245,
      cookTime: "25 min",
      serves: 2,
      badge: "Chef's Choice"
    },
    {
      id: 2,
      image: food,
      name: "Wagyu Beef Wellington",
      description: "Premium wagyu beef wrapped in puff pastry with mushroom duxelles",
      price: "$45.99",
      rating: 4.8,
      reviews: 189,
      cookTime: "35 min",
      serves: 1,
      badge: "Premium"
    },
    {
      id: 3,
      image: food,
      name: "Lobster Thermidor",
      description: "Fresh lobster in creamy cognac sauce with gruyere cheese",
      price: "$38.99",
      rating: 4.9,
      reviews: 167,
      cookTime: "30 min",
      serves: 1,
      badge: "Signature"
    },
    {
      id: 4,
      image: food,
      name: "Duck Confit Delight",
      description: "Slow-cooked duck leg with cherry gastrique and roasted vegetables",
      price: "$32.99",
      rating: 4.7,
      reviews: 203,
      cookTime: "40 min",
      serves: 1,
      badge: "Popular"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % foods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [foods.length, isAutoPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % foods.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + foods.length) % foods.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition-all"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition-all"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Slides */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {foods.map((foodItem, index) => (
            <div key={foodItem.id} className="w-full flex-shrink-0">
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 p-6 sm:p-8 md:p-12 items-center min-h-[500px]">
                {/* Image */}
                <div className="relative group w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={foodItem.image}
                      alt={foodItem.name}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {foodItem.badge && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {foodItem.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 md:space-y-6 w-full">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">{foodItem.name}</h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{foodItem.description}</p>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(foodItem.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-800 font-semibold">{foodItem.rating}</span>
                    <span className="text-gray-500">({foodItem.reviews} reviews)</span>
                  </div>
                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm sm:text-base">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{foodItem.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Serves {foodItem.serves}</span>
                    </div>
                  </div>
                  {/* Price and CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">{foodItem.price}</div>
                    {/* <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Order Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2">
        {foods.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Index(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ChefHat className="w-7 h-7 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm sm:text-base tracking-wide uppercase">Signature Collection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
            Chef's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Bestsellers</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most celebrated dishes, crafted with passion and perfection. Each recipe tells a story of culinary excellence that keeps our guests coming back.
          </p>
        </div>

        <BestSellers />
      </div>
    </div>
  );
}
