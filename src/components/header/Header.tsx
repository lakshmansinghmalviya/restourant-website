import { useState, useEffect } from "react";
import { 
  Facebook, 
  Instagram, 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X,
  Calendar
} from "lucide-react";

// Mock Button component
const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-[#9C0F1C] hover:bg-[#7A0C15] text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Mock Link component (replace with your actual Link from react-router-dom)
const Link = ({ to, children, className = "", ...props }) => (
  <a 
    href={to} 
    className={`transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </a>
);

export const nav_options = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Special", link: "/special" },
  { name: "Private Events", link: "/events" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function ResponsiveHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <header className={`sticky top-0 z-50 text-black bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block px-6 md:px-12 lg:px-20 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Left Section */}
          <div className="flex flex-col gap-2 lg:gap-4 w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="text-[#9C0F1C] w-4 h-4 flex-shrink-0" />
                <span className="hidden xl:inline">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
                <span className="xl:hidden">Kelsterbach, Germany</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Phone className="text-[#9C0F1C] w-4 h-4 flex-shrink-0" />
                <span>+496107 4078377</span>
              </div>
            </div>
            <hr className="border-[#9C0F1C]" />
            <div className="hidden lg:flex gap-6">
              {nav_options.slice(0, 3).map((option, index) => (
                <Link 
                  key={index} 
                  to={option.link} 
                  className="hover:text-[#9C0F1C] font-medium"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center lg:mx-8">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full border-2 border-[#9C0F1C] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#9C0F1C] font-bold text-xl lg:text-2xl">G</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-2 w-full lg:w-auto items-end">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 justify-end">
              <div className="flex items-center gap-2 text-xs">
                <Mail className="text-[#9C0F1C] w-4 h-4 flex-shrink-0" />
                <span>info@Garcias-Kitchen.de</span>
              </div>
              <Button className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                RESERVATION
              </Button>
            </div>
            
            <hr className="border-[#9C0F1C] w-full" />
            
            <div className="hidden lg:flex gap-6 justify-end items-center">
              {nav_options.slice(3).map((option, index) => (
                <Link 
                  key={index} 
                  to={option.link} 
                  className="hover:text-[#9C0F1C] font-medium"
                >
                  {option.name}
                </Link>
              ))}
              <div className="flex gap-3 ml-4 border-l border-[#9C0F1C] pl-4">
                <Link to="#" className="text-[#9C0F1C] hover:text-[#7A0C15] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-[#9C0F1C] hover:text-[#7A0C15] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Mobile Contact Info - Collapsible */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="text-[#9C0F1C] w-3 h-3 flex-shrink-0" />
              <span className="truncate max-w-[120px]">Kelsterbach, DE</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="text-[#9C0F1C] w-3 h-3 flex-shrink-0" />
              <span>+496107 4078377</span>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-white rounded-full border-2 border-[#9C0F1C] flex items-center justify-center shadow-lg">
              <div className="text-[#9C0F1C] font-bold text-lg">G</div>
            </div>
          </div>

          {/* Right Side - Reservation + Menu */}
          <div className="flex items-center gap-2 mobile-menu-container">
            <Button className="px-2 py-2">
              <Calendar className="w-4 h-4" />
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#9C0F1C] hover:bg-gray-100 rounded transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100 border-t border-gray-200' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-white`}>
        <div className="px-4 py-6 space-y-4">
          
          {/* Mobile Contact Details */}
          <div className="space-y-3 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="text-[#9C0F1C] w-4 h-4 flex-shrink-0" />
              <span>Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="text-[#9C0F1C] w-4 h-4 flex-shrink-0" />
              <span>info@Garcias-Kitchen.de</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="space-y-3">
            {nav_options.map((option, index) => (
              <Link 
                key={index} 
                to={option.link} 
                className="block hover:text-[#9C0F1C] font-medium py-2 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {option.name}
              </Link>
            ))}
          </div>

          {/* Mobile Reservation Button */}
          <Button className="w-full flex items-center justify-center gap-2 mt-4">
            <Calendar className="w-4 h-4" />
            MAKE RESERVATION
          </Button>

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
            <Link to="#" className="text-[#9C0F1C] hover:text-[#7A0C15] transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-[#9C0F1C] hover:text-[#7A0C15] transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Demo content to show responsive behavior
const DemoContent = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 mt-8">
        Garcia's Kitchen
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Scroll to see the sticky header behavior
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Menu Item {i}</h3>
            <p className="text-gray-600">
              Delicious authentic dishes prepared with the finest ingredients. 
              Experience the true taste of Garcia's Kitchen.
            </p>
            <div className="mt-4 text-[#9C0F1C] font-semibold">$12.99</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// // Main App component
// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <ResponsiveHeader />
//       <DemoContent />
//     </div>
//   );
// }