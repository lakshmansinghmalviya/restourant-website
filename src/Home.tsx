import React, { useState, useEffect, useRef, ReactNode } from 'react';
import CategoryMenu from "./components/menu-details/CategoryMenu"
import Hero from "./components/Hero"
import MeetChefs from "./components/MeetChefs"
import Testimonals from "./components/Testimonals"
import AllFoodNamesWithImages from './components/AllFoodNamesWithImages'
import DrinkAndEnjoy from './components/DrinkAndEnjoy'
import WeeklyDelights from './components/weekly-delights/Index'
import Gallery from "./components/private-events/Gallery"

// Types
interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

interface AnimationComponentProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface StaggeredSectionProps {
  children: ReactNode;
  index: number;
  reverse?: boolean;
}

interface ComponentInfo {
  Component: React.ComponentType<any>;
  name: string;
}

// Custom hook for Intersection Observer
const useIntersectionObserver = (options: IntersectionObserverOptions = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Fade In Animation Component
const FadeInSection: React.FC<AnimationComponentProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Slide In From Left Component
const SlideInLeft: React.FC<AnimationComponentProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Slide In From Right Component
const SlideInRight: React.FC<AnimationComponentProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Scale In Animation Component
const ScaleIn: React.FC<AnimationComponentProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isIntersecting 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered Animation for alternating sections
const StaggeredSection: React.FC<StaggeredSectionProps> = ({ 
  children, 
  index, 
  reverse = false 
}) => {
  const isEven: boolean = index % 2 === 0;
  const shouldSlideLeft: boolean = reverse ? !isEven : isEven;
  
  if (shouldSlideLeft) {
    return <SlideInLeft delay={100}>{children}</SlideInLeft>;
  } else {
    return <SlideInRight delay={100}>{children}</SlideInRight>;
  }
};

const Home: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Back to top functionality
  useEffect(() => {
    const handleScroll = (): void => {
      setShowBackToTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const components: ComponentInfo[] = [
    { Component: WeeklyDelights, name: 'WeeklyDelights' },
    { Component: DrinkAndEnjoy, name: 'DrinkAndEnjoy' },
    { Component: CategoryMenu, name: 'CategoryMenu' },
    { Component: AllFoodNamesWithImages, name: 'AllFoodNamesWithImages' },
    { Component: Gallery, name: 'Gallery' },
    { Component: Testimonals, name: 'Testimonals' }
  ];

  return (
    <>
      {/* Hero Section - No animation needed as it's the first section */}
      <Hero />
      
      {/* Animated sections with alternating slide directions */}
      {components.map(({ Component, name }, index) => (
        <StaggeredSection key={name} index={index}>
          <Component />
        </StaggeredSection>
      ))}

      {/* Back to Top Button */}
      {/* {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:transform hover:scale-110"
          aria-label="Back to top"
          type="button"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )} */}
    </>
  );
};

export default Home;

// Alternative approach - Individual component wrapping
// If you want more control over each section, use this instead:

/*
const Home: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowBackToTop(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      
      <FadeInSection delay={100}>
        <WeeklyDelights />
      </FadeInSection>
      
      <SlideInLeft delay={200}>
        <DrinkAndEnjoy />
      </SlideInLeft>
      
      <SlideInRight delay={100}>
        <CategoryMenu />
      </SlideInRight>
      
      <ScaleIn delay={150}>
        <AllFoodNamesWithImages />
      </ScaleIn>
      
      <FadeInSection delay={200}>
        <Gallery />
      </FadeInSection>
      
      <SlideInLeft delay={100}>
        <Testimonals />
      </SlideInLeft>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:transform hover:scale-110"
          type="button"
        >
          ↑
        </button>
      )}
    </>
  );
};
*/

// Export individual animation components for use in other files
export { FadeInSection, SlideInLeft, SlideInRight, ScaleIn, useIntersectionObserver };

// Types export for external use
export type { AnimationComponentProps, IntersectionObserverOptions };



// import CategoryMenu from "./components/menu-details/CategoryMenu"
// import Hero from "./components/Hero"
// import MeetChefs from "./components/MeetChefs"
// import Testimonals from "./components/Testimonals"

// import AllFoodNamesWithImages from './components/AllFoodNamesWithImages'
// import DrinkAndEnjoy from './components/DrinkAndEnjoy'
// import WeeklyDelights from './components/weekly-delights/Index'
// import Gallery from "./components/private-events/Gallery"


// export default function Home() {
//   return (
//     <>
//       <Hero />
//       {/* <RestaurantHeroCarousel/> */}
//       <WeeklyDelights />
//       {/* <BestSellers /> */}
//       {/* <Menu/> */}
//       {/* <ChatbotComponent /> */}
//       {/* <Blogs/> */}
//       <DrinkAndEnjoy />
//       {/* <PrivateEvents/> */}
//       {/* <BookTable/> */}
//       <CategoryMenu />
//       {/* <OurStory/> */}
//       {/* <Achievements/> */}
//       {/* <MeetOurTeam/> */}
//       <AllFoodNamesWithImages />
//       {/* <MeetChefs /> */}
//       <Gallery />
//       <Testimonals />
//     </>
//   )
// }