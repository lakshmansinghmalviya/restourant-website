import React from 'react';

const DrinkEnjoySection = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Section-2: [ Drink and Enjoy Food]
        </h2> */}
        
        {/* Main Content Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Drinks Image */}
            <div className="lg:w-1/4 bg-gray-200 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  {/* Wine glasses illustration */}
                  <div className="flex justify-center space-x-2 mb-2">
                    <div className="w-8 h-12 bg-yellow-600 rounded-full opacity-80"></div>
                    <div className="w-8 h-12 bg-purple-800 rounded-full opacity-80"></div>
                    <div className="w-8 h-12 bg-orange-400 rounded-full opacity-80"></div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-6 h-8 bg-gray-600 rounded-full opacity-60"></div>
                    <div className="w-6 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Center - Text Content */}
            <div className="lg:w-1/2 p-8 border-l-4 border-orange-500">
              <h3 className="text-3xl md:text-4xl font-light text-orange-500 mb-6">
                Drink & enjoy
              </h3>
              
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur elit. Lorem ipsum dolor sit amet elit.
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg text-gray-800">
                  <span className="text-orange-500 font-medium">Call us</span> and book your table for tonight
                </p>
                <p className="text-xl font-bold text-gray-800 mt-2">
                  +84 0123456789
                </p>
              </div>
            </div>
            
            {/* Right Side - Wine Pouring Image */}
            <div className="lg:w-1/4 bg-gray-200 p-6 flex items-center justify-center">
              <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-red-800 via-red-600 to-red-400 rounded-lg relative overflow-hidden">
                {/* Wine bottle silhouette */}
                <div className="absolute top-4 right-4 w-8 h-20 bg-black rounded-t-full opacity-60"></div>
                {/* Wine glass */}
                <div className="absolute bottom-8 left-6 w-12 h-16 border-4 border-white rounded-b-full opacity-80"></div>
                {/* Wine pour effect */}
                <div className="absolute top-12 right-8 w-2 h-12 bg-red-900 opacity-70 transform rotate-12"></div>
                {/* Additional wine glasses */}
                <div className="absolute bottom-4 right-4 w-8 h-12 border-2 border-white rounded-b-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkEnjoySection;