import { Award, Medal, Star, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

// Achievements Component
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

  const LaurelWreath = ({ className = "", animated = false }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className={`w-full h-full ${animated ? 'animate-pulse' : ''}`} fill="currentColor">
        <path d="M20 100 Q30 80, 45 85 Q60 90, 55 100 Q50 110, 35 105 Q25 100, 20 100 Z" className="text-yellow-300 opacity-80" />
        <path d="M25 110 Q35 90, 50 95 Q65 100, 60 110 Q55 120, 40 115 Q30 110, 25 110 Z" className="text-yellow-300 opacity-80" />
        <path d="M30 120 Q40 100, 55 105 Q70 110, 65 120 Q60 130, 45 125 Q35 120, 30 120 Z" className="text-yellow-300 opacity-80" />
        <path d="M180 100 Q170 80, 155 85 Q140 90, 145 100 Q150 110, 165 105 Q175 100, 180 100 Z" className="text-yellow-300 opacity-80" />
        <path d="M175 110 Q165 90, 150 95 Q135 100, 140 110 Q145 120, 160 115 Q170 110, 175 110 Z" className="text-yellow-300 opacity-80" />
        <path d="M170 120 Q160 100, 145 105 Q130 110, 135 120 Q140 130, 155 125 Q165 120, 170 120 Z" className="text-yellow-300 opacity-80" />
        <path d="M70 135 Q100 145, 130 135" stroke="currentColor" strokeWidth="3" fill="none" className="text-yellow-300 opacity-60" />
        <g className="text-yellow-400">
          <path d="M100 60 L102 66 L108 66 L103 70 L105 76 L100 72 L95 76 L97 70 L92 66 L98 66 Z" />
          <path d="M85 75 L86 78 L89 78 L87 80 L88 83 L85 81 L82 83 L83 80 L81 78 L84 78 Z" />
          <path d="M115 75 L116 78 L119 78 L117 80 L118 83 L115 81 L112 83 L113 80 L111 78 L114 78 Z" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-32 sm:w-48 h-32 sm:h-48 bg-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl">
              <Trophy className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
            </div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <Award className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-yellow-400 to-transparent"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Our Achievements & Honors
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-200 font-light tracking-wide max-w-4xl mx-auto px-4">
            125+ YEARS OF SERVING AWARD-WINNING BBQ & GRILLED SPECIALTIES
          </p>
          <div className="mt-6 sm:mt-10 w-32 sm:w-40 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
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
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:bg-white/10 group-hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <LaurelWreath className="w-32 sm:w-48 h-32 sm:h-48 text-yellow-300" animated={true} />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block mb-3 sm:mb-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                        {achievement.year}
                      </div>
                    </div>
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className="p-3 sm:p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500">
                        <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-bold text-yellow-300 mb-1 tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                        {achievement.award}
                      </h3>
                      <p className="text-white text-xs sm:text-sm uppercase font-semibold tracking-widest">{achievement.subtitle}</p>
                    </div>
                    <div className="text-red-100 mb-3 sm:mb-4 text-xs sm:text-sm font-light leading-relaxed">
                      {achievement.description}
                    </div>
                    <div className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest group-hover:text-yellow-100 transition-colors duration-300">
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


export default Achievements