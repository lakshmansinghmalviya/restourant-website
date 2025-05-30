import React from 'react';

const DrinkEnjoySection = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side Image */}
            <div className="lg:w-1/4 bg-gray-200 p-6 flex items-center justify-center">
              <figure className="w-full h-48 lg:h-64">
                <img 
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop&crop=center" 
                  alt="Various drinks and cocktails" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </figure>
            </div>

            {/* Center Content */}
            <article className="lg:w-1/2 p-6 md:p-8 border-l-4 border-orange-500">
              <h3 className="text-3xl md:text-4xl font-light text-orange-500 mb-6">
                Drink & enjoy
              </h3>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Savor every sip and enjoy an unforgettable dining experience.
                </p>
                <p>
                  Whether it’s a night out or a special occasion, enjoy our wide selection of handcrafted drinks and delicious food in a vibrant atmosphere.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg text-gray-800">
                  <span className="text-orange-500 font-medium">Call us</span> and book your table for tonight
                </p>
                <a href="tel:+840123456789" className="text-xl font-bold text-gray-800 mt-2 block">
                  +84 0123456789
                </a>
              </div>
            </article>

            {/* Right Side Image */}
            <div className="lg:w-1/4 bg-gray-200 p-6 flex items-center justify-center">
              <figure className="w-full h-48 lg:h-64">
                <img 
                  loading="lazy"
                  src="/drink/d1.png" 
                  alt="Wine being poured into glass" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkEnjoySection;
