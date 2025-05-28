import React, { useState } from 'react';
import { ChefHat, Star, Award, Utensils } from 'lucide-react';

type Chef = {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  specialty: string;
  experience: string;
  awards: string;
  signature: string;
};

const MeetChefs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const chefs: Chef[] = [
    {
      id: 1,
      name: 'ALESSANDRA MORETTI',
      cuisine: 'Italian',
      image: '/chef.png',
      specialty: 'Pasta & Risotto Master',
      experience: '15+ years',
      awards: 'Michelin Star',
      signature: 'Truffle Carbonara',
    },
    {
      id: 2,
      name: 'KENJI YAMAMOTO',
      cuisine: 'Japanese',
      image: '/chef.png',
      specialty: 'Sushi & Ramen Expert',
      experience: '20+ years',
      awards: 'James Beard Award',
      signature: 'Dragon Roll',
    },
    {
      id: 3,
      name: 'YOUSSEF BENJELLOUN',
      cuisine: 'Moroccan',
      image: '/chef.png',
      specialty: 'Tagine & Couscous Artisan',
      experience: '18+ years',
      awards: 'Golden Spoon',
      signature: 'Lamb Tagine',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-200/25 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-orange-400 to-transparent"></div>
            <Utensils className="w-6 h-6 text-orange-500" />
            <div className="h-px w-16 bg-gradient-to-l from-orange-400 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 bg-clip-text text-transparent mb-4 tracking-tight">
            MEET THE COOKING
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-tight">
            WIZARDS OF RANNA
          </h2>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(chef.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 
                rounded-3xl p-1 shadow-2xl transition-all duration-500 ease-out
                ${hoveredCard === chef.id ? 'scale-105 shadow-3xl' : 'hover:scale-102'}
                before:absolute before:inset-0 before:rounded-3xl before:p-1
                before:bg-gradient-to-br before:from-yellow-300 before:via-orange-300 before:to-red-300
                before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100`}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden h-full">
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                        hoveredCard === chef.id ? 'scale-110 brightness-110' : 'scale-100'
                      }`}
                    />

                    <div
                      className={`absolute top-4 right-4 z-20 transition-all duration-500 ${
                        hoveredCard === chef.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-800">{chef.experience}</span>
                      </div>
                    </div>

                    <div
                      className={`absolute top-4 left-4 z-20 transition-all duration-500 delay-100 ${
                        hoveredCard === chef.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-wide">{chef.name}</h3>

                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
                      <span className="text-orange-700 font-semibold text-sm uppercase tracking-wider">{chef.cuisine}</span>
                    </div>

                    <div
                      className={`transition-all duration-500 ease-out ${
                        hoveredCard === chef.id
                          ? 'opacity-100 translate-y-0 max-h-40'
                          : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'
                      }`}
                    >
                      <div className="space-y-3 pt-4 border-t border-orange-100">
                        <div>
                          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Specialty</span>
                          <p className="text-sm text-gray-700 font-medium">{chef.specialty}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Signature Dish</span>
                          <p className="text-sm text-gray-700 font-medium">{chef.signature}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Recognition</span>
                          <p className="text-sm text-gray-700 font-medium">{chef.awards}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 
                    transition-all duration-500 ease-out rounded-full ${
                      hoveredCard === chef.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-4 -right-4 z-30 transition-all duration-500 ease-out ${
                  hoveredCard === chef.id ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0 rotate-0'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 
                transition-opacity duration-500 pointer-events-none blur-xl ${
                  hoveredCard === chef.id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-orange-400 animate-pulse`}
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetChefs;
