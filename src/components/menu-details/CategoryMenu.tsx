import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {menuCategories as menuCat} from "./data"
type MenuCategory = {
  id: number;
  title: string;
  bgImage: string;
};

export default function DiscoverMenuSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate  = useNavigate();

  const menuCategories: MenuCategory[] = menuCat;

  const handleClick = (id:number) =>{
    navigate("/menu/"+id)
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-400 font-medium text-sm tracking-[0.2em] uppercase mb-3">
            BEST DISHES
          </p>
          <h1 className="text-white text-5xl lg:text-6xl font-light mb-8">
            Discover Our Menu
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={()=>{handleClick(category.id)}}
            >
              <div
                className="relative aspect-[4/2] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 bg-cover bg-center "
                style={{
                  backgroundImage: `url(${category.bgImage})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent z-10"></div>

                {/* Title */}
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">
                    {category.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                {hoveredCard === category.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 transition-opacity">
                    <p className="text-white font-medium text-lg">
                      Explore {category.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
