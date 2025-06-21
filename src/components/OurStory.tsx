import React, { useState, useEffect } from 'react';
import { Award, Star, Trophy, Medal, ChevronLeft, ChevronRight, Users, Flame } from 'lucide-react';

// OurStory Component
const OurStory = () => {
  return (
    <section className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Text Section */}
          {/* <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              About Us
            </h1>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed">
              <p className="text-red-100">
                In the fall of '97, just about the time of the <span className="text-yellow-300 font-semibold">Klondike Gold Rush</span>, miners
                would search for golden riches. They'd gather in restaurants and saloons to share tales and spend time with friends.
              </p>
              <p className="text-red-100">
                <span className="text-yellow-300 font-semibold">Alaska Pete's</span> quickly became the Poconos's Premier Steakhouse and Seafood spot.
              </p>
              <p className="text-red-100">
                With authentic antiques, rustic wooden interiors, and a welcoming <span className="text-yellow-300 font-semibold">northwestern vibe</span>,
                we welcome everyone like family.
              </p>
              <p className="text-yellow-200 font-semibold italic text-lg sm:text-xl mt-6 sm:mt-8">
                Come in once & we'll see you again!
              </p>
            </div>
          </div> */}
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              🥘 About Us
            </h1>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed">
              <p className="text-red-100">
                Welcome to <span className="text-yellow-300 font-semibold">Gracias Kitchen Restaurant</span> – where Spanish flavors come alive!
              </p>
              <p className="text-red-100">
                We’re a newly opened restaurant with a deep passion for authentic Spanish cuisine and a love for sharing good food with great people. Inspired by the vibrant culture of Spain, our menu brings you classic dishes made with fresh ingredients, bold spices, and heart.
              </p>
              <p className="text-red-100">
                From the comforting taste of patatas bravas to the rich, traditional paella and a variety of flavorful tapas, we’re here to offer you a little taste of Spain, right here in <span className="text-yellow-300 font-semibold">Herbert-Heckmann Anlage 1, 65451 Kelsterbach, Germany</span>.
              </p>
              <p className="text-red-100">
                Whether you're joining us for a relaxed lunch, a cozy dinner, or a celebration with friends, we’re excited to serve you with warmth, flavor, and a touch of Spanish soul.
              </p>
              <p className="text-yellow-200 font-semibold italic text-lg sm:text-xl mt-6 sm:mt-8">
                Come and be part of our journey at Gracias Kitchen Restaurant—we’re just getting started!
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/story/s1.jpg"
                alt="Our Story - Restaurant Interior"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;