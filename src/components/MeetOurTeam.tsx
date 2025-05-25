import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  Flame
} from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  specialty: string;
  experience: string;
  achievement: string;
  description: string;
}

const MeetOurTeam: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "SARAH SMITH",
      title: "Restaurant Manager & Hospitality Expert",
      image: "/team/t1.png",
      specialty: "Customer Experience",
      experience: "8+ years",
      achievement: "Top Manager 2023",
      description: "Sarah ensures every guest feels welcome and enjoys an exceptional dining experience."
    },
    {
      id: 2,
      name: "PETER CLIFF",
      title: "Head Chef & BBQ Specialist",
      image: "/team/t1.png",
      specialty: "BBQ & Grilling",
      experience: "12+ years",
      achievement: "BBQ Champion",
      description: "Peter brings authentic BBQ flavors with his secret smoking techniques and spice blends."
    },
    {
      id: 3,
      name: "MICHAEL JOHNSON",
      title: "Executive Chef & Grill Master",
      image: "/team/t1.png",
      specialty: "Grill Mastery",
      experience: "15+ years",
      achievement: "Grill Master Award",
      description: "Michael perfects every cut of meat with precision grilling and innovative cooking methods."
    }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-700 to-red-900 py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-orange-400 to-transparent"></div>
            <Flame className="w-6 h-6 text-orange-400" />
            <div className="h-px w-16 bg-gradient-to-l from-orange-400 to-transparent"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-red-200 font-light tracking-wide max-w-4xl mx-auto">
            PASSIONATE EXPERTS BRINGING YOU THE BEST BBQ & GRILLED DELIGHTS
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative transition-all duration-700 ease-out ${
                  index === currentSlide ? 'scale-105 z-10' : 'scale-95 opacity-75'
                }`}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === member.id ? 'scale-110 brightness-110' : 'scale-100'
                      }`}
                    />

                    <div
                      className={`absolute top-4 right-4 z-20 transition-all duration-500 ${
                        hoveredCard === member.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4 text-white fill-current" />
                        <span className="text-sm font-bold text-white">{member.experience}</span>
                      </div>
                    </div>

                    <div
                      className={`absolute top-4 left-4 z-20 transition-all duration-500 delay-100 ${
                        hoveredCard === member.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Award className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-red-200 font-medium text-lg">{member.title}</p>
                    </div>
                  </div>

                  {/* Hidden hover content */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-red-900 via-red-800 to-red-700 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-out ${
                      hoveredCard === member.id ? 'opacity-95' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="transform transition-all duration-500 delay-200">
                      <h3 className="text-3xl font-bold text-white mb-3">{member.name}</h3>
                      <p className="text-orange-300 font-semibold text-lg mb-6">{member.title}</p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-center gap-3">
                          <Flame className="w-5 h-5 text-orange-400" />
                          <span className="text-white font-medium">{member.specialty}</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <span className="text-white font-medium">{member.achievement}</span>
                        </div>
                      </div>

                      <p className="text-red-100 leading-relaxed text-sm">{member.description}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-600/20 transition-opacity duration-500 pointer-events-none blur-xl -z-10 ${
                    hoveredCard === member.id ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
