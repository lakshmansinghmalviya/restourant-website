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
import { Link } from 'react-router-dom';
import Dialog from '../book-table/Dialog';

const ResponsiveHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDeactivate = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.toggle-button')) {
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
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Special', href: '/special' }
  ];

  const rightNavItems = [
    { label: 'Private Events', href: '/events' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'}`}>
      
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="hidden xl:inline">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
                <span className="xl:hidden">Kelsterbach, Germany</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+496107 4078377</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>info@Garcias-Kitchen.de</span>
              </div>
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md transition-colors duration-300 font-medium flex items-center space-x-2"
              onClick={() => setOpen(true)}
            >
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
            
            {/* Logo */}
            <div className="lg:absolute lg:top-[70px] lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-2 border-red-0 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to="/">
                  <img src="/logo2.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {/* Desktop Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {rightNavItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-4 ml-6 border-l border-gray-700 pl-6">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
                onClick={() => setOpen(true)}
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                className="rounded-md text-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center toggle-button"
                aria-label="Toggle mobile menu"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8 rounded-md text-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center toggle-button"
                aria-label="Toggle mobile menu" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden bg-gray-900 border-b border-gray-800`}>
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-4 pb-6 border-b border-gray-700">
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-sm">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-500" />
              <span className="text-sm">+496107 4078377</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-500" />
              <span className="text-sm">info@Garcias-Kitchen.de</span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-4">
            {[...navItems, ...rightNavItems].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg py-2 border-b border-gray-800 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
            onClick={() => setOpen(true)}
          >
            <Calendar className="w-5 h-5" />
            <span>MAKE RESERVATION</span>
          </button>

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

      <Dialog
        isOpen={open}
        title="Deactivate Account"
        description="Are you sure you want to deactivate your account? All your data will be removed..."
        onClose={handleDeactivate}
      />
    </header>
  );
};

export default ResponsiveHeader;
