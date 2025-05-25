import React, { useState } from 'react';

type MenuCategory = {
  id: number;
  title: string;
  bgImage: string;
};

export default function DiscoverMenuSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const menuCategories: MenuCategory[] = [
    {
      id: 1,
      title: "Breakfast & Starter",
      bgImage: "/menu/m1.png"
    },
    {
      id: 2,
      title: "Salad & Lettuces",
      bgImage: "/menu/m1.png"
    },
    {
      id: 3,
      title: "Meat & Meals",
      bgImage: "/menu/m1.png"
    },
    {
      id: 4,
      title: "Seafood & Soups",
      bgImage: "/menu/m2.png"
    },
    {
      id: 5,
      title: "Desserts & Snaks",
      bgImage: "/menu/m2.png"
    },
    {
      id: 6,
      title: "Drinks & Juices",
      bgImage: "/menu/m2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black py-16 px-4">
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
            >
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 bg-cover bg-center"
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
