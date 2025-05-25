import React from 'react';

export default function OurStory(): JSX.Element {
  return (
    <section className="bg-red-800 text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">Our Story</h1>
          <p>
            In the fall of '97, just about the time of the <span className="text-red-200 font-semibold">Klondike Gold Rush</span>, miners 
            would search for golden riches. They'd gather in restaurants and saloons to share tales and spend time with friends.
          </p>
          <p>
            <span className="text-red-200 font-semibold">Alaska Pete's</span> quickly became the Poconos’s Premier Steakhouse and Seafood spot.
          </p>
          <p>
            With authentic antiques, rustic wooden interiors, and a welcoming <span className="text-red-200 font-semibold">northwestern vibe</span>, 
            we welcome everyone like family.
          </p>
          <p className="text-red-100 font-semibold italic">
            Come in once & we’ll see you again!
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/story/s1.png"
            alt="Our Story"
            className="w-full h-full rounded shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
