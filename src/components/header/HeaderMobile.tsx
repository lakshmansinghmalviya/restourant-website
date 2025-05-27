import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Facebook, 
  Instagram,
  Calendar
} from 'lucide-react';

const ResponsiveHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Special', href: '#special' }
  ];

  const rightNavItems = [
    { label: 'Private Events', href: '#events' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
    }`}>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="hidden xl:inline">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
                <span className="xl:hidden">Kelsterbach, Germany</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+496107 4078377</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@Garcias-Kitchen.de</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md transition-colors duration-300 font-medium flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>RESERVATION</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            
            {/* Empty div for mobile to maintain flex layout */}
            <div className="lg:hidden w-8"></div>

            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Logo - Always centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-2 border-red-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-red-600 font-bold text-lg lg:text-xl">G</div>
              </div>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {rightNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4 ml-6 border-l border-gray-700 pl-6">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Right Side - Reservation Button + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                <Calendar className="w-4 h-4" />
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:bg-gray-800 transition-colors duration-300 mobile-menu-container"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-gray-900 border-b border-gray-800`}>
        <div className="px-4 py-6 space-y-6">
          
          {/* Mobile Contact Info */}
          <div className="space-y-4 pb-6 border-b border-gray-700">
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-sm">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-sm">+496107 4078377</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-sm">info@Garcias-Kitchen.de</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-4">
            {[...navItems, ...rightNavItems].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg py-2 border-b border-gray-800 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Reservation Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition-colors duration-300 font-medium flex items-center justify-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>MAKE RESERVATION</span>
          </button>

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Demo content to show scroll behavior
const DemoContent = () => (
  <div className="pt-32 lg:pt-40">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl lg:text-6xl font-bold text-white text-center mb-8">
        Welcome to Garcia's Kitchen
      </h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        Experience authentic flavors in the heart of Germany
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Sample Content {i}</h3>
            <p className="text-gray-300">
              This is sample content to demonstrate the responsive header behavior. 
              Scroll up and down to see the header effects.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <ResponsiveHeader />
      <DemoContent />
    </div>
  );
}