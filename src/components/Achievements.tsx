'use client';

import React, { useState, useEffect } from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const Achievements = () => {
  const [animatedCount, setAnimatedCount] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    {
      id: 1,
      year: "2024",
      award: "James Beard Foundation",
      title: "AWARDS",
      subtitle: "Outstanding Restaurant",
      description: "Recognized for exceptional culinary excellence and innovation in BBQ cuisine",
      targetNumber: 125,
      icon: Trophy
    },
    {
      id: 2,
      year: "2023",
      award: "Forbes Travel Guide",
      title: "5 STARS",
      subtitle: "Five Star Rating",
      description: "Awarded the highest rating for exceptional service and dining experience",
      targetNumber: 5,
      icon: Star
    },
    {
      id: 3,
      year: "2024",
      award: "People's Choice",
      title: "AWARDS",
      subtitle: "Best BBQ Restaurant",
      description: "Voted by customers as their favorite BBQ destination",
      targetNumber: 50000,
      icon: Medal
    },
    {
      id: 4,
      year: "2023",
      award: "Good Food 100",
      title: "RESTAURANTS",
      subtitle: "Top 100 Selection",
      description: "Selected among the nation's top 100 restaurants for quality and service",
      targetNumber: 100,
      icon: Award
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      achievements.forEach((achievement, index) => {
        const increment = achievement.targetNumber / 50;
        let current = 0;
        const countTimer = setInterval(() => {
          current += increment;
          if (current >= achievement.targetNumber) {
            current = achievement.targetNumber;
            clearInterval(countTimer);
          }
          setAnimatedCount(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 50);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const LaurelWreath = ({ className = "", animated = false }: { className?: string; animated?: boolean }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className={`w-full h-full ${animated ? 'animate-pulse' : ''}`} fill="currentColor">
        {/* Left Branch */}
        <path d="M20 100 Q30 80, 45 85 Q60 90, 55 100 Q50 110, 35 105 Q25 100, 20 100 Z" className="text-yellow-300 opacity-80" />
        <path d="M25 110 Q35 90, 50 95 Q65 100, 60 110 Q55 120, 40 115 Q30 110, 25 110 Z" className="text-yellow-300 opacity-80" />
        <path d="M30 120 Q40 100, 55 105 Q70 110, 65 120 Q60 130, 45 125 Q35 120, 30 120 Z" className="text-yellow-300 opacity-80" />
        <path d="M35 130 Q45 110, 60 115 Q75 120, 70 130 Q65 140, 50 135 Q40 130, 35 130 Z" className="text-yellow-300 opacity-80" />
        {/* Right Branch */}
        <path d="M180 100 Q170 80, 155 85 Q140 90, 145 100 Q150 110, 165 105 Q175 100, 180 100 Z" className="text-yellow-300 opacity-80" />
        <path d="M175 110 Q165 90, 150 95 Q135 100, 140 110 Q145 120, 160 115 Q170 110, 175 110 Z" className="text-yellow-300 opacity-80" />
        <path d="M170 120 Q160 100, 145 105 Q130 110, 135 120 Q140 130, 155 125 Q165 120, 170 120 Z" className="text-yellow-300 opacity-80" />
        <path d="M165 130 Q155 110, 140 115 Q125 120, 130 130 Q135 140, 150 135 Q160 130, 165 130 Z" className="text-yellow-300 opacity-80" />
        {/* Bottom Curve */}
        <path d="M70 135 Q100 145, 130 135" stroke="currentColor" strokeWidth="3" fill="none" className="text-yellow-300 opacity-60" />
        {/* Stars */}
        <g className="text-yellow-400">
          <path d="M100 60 L102 66 L108 66 L103 70 L105 76 L100 72 L95 76 L97 70 L92 66 L98 66 Z" />
          <path d="M85 75 L86 78 L89 78 L87 80 L88 83 L85 81 L82 83 L83 80 L81 78 L84 78 Z" />
          <path d="M115 75 L116 78 L119 78 L117 80 L118 83 L115 81 L112 83 L113 80 L111 78 L114 78 Z" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 py-16 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <Award className="w-8 h-8 text-yellow-400" />
            <div className="h-px w-20 bg-gradient-to-l from-yellow-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Our Achievements & Honors
          </h1>
          <p className="text-xl md:text-2xl text-red-200 font-light tracking-widest max-w-4xl mx-auto">
            125+ YEARS OF SERVING AWARD-WINNING BBQ & GRILLED SPECIALTIES
          </p>
          <div className="mt-10 w-40 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`
                  group relative transform transition-all duration-700 ease-out
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:bg-white/10 group-hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <LaurelWreath className="w-48 h-48 text-yellow-300" animated={true} />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block mb-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {achievement.year}
                      </div>
                    </div>
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500">
                        <IconComponent className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-yellow-300 mb-1 tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                        {achievement.award}
                      </h3>
                      <p className="text-white text-sm uppercase font-semibold tracking-widest">{achievement.subtitle}</p>
                    </div>
                    <div className="text-red-100 mb-4 text-sm font-light leading-relaxed">
                      {achievement.description}
                    </div>
                    <div className="text-yellow-300 text-4xl font-bold tracking-widest group-hover:text-yellow-100 transition-colors duration-300">
                      {animatedCount[index].toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
