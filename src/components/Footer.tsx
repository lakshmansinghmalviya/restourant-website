import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface OpeningHour {
  day: string;
  hours: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const openingHours: OpeningHour[] = [
    { day: 'MONDAY', hours: '9:00 - 22:00' },
    { day: 'TUESDAY', hours: '9:00 - 22:00' },
    { day: 'WEDNESDAY', hours: '9:00 - 22:00' },
    { day: 'THURSDAY', hours: '9:00 - 22:00' },
    { day: 'FRIDAY', hours: '9:00 - 22:00' },
    { day: 'SATURDAY', hours: '9:00 - 22:00' },
    { day: 'SUNDAY', hours: 'CLOSED' }
  ];

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div 
              className="flex items-center space-x-3 mb-6 cursor-pointer group transition-transform transform hover:scale-105 duration-300"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center border-4 border-white group-hover:shadow-lg transition-all duration-300">
                  <div className="text-white text-center">
                    <div className="text-lg font-bold leading-tight">Easy</div>
                    <div className="text-lg font-bold leading-tight">Street</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider">Opening Hours</h3>
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">{schedule.day}</span>
                  <span className={`font-medium ${schedule.hours === 'CLOSED' ? 'text-red-400' : 'text-white'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Call us</p>
                <p className="text-white font-medium">T 044 123 4559</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium">info@easystreet.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p className="text-white font-medium">
                  Raymond Boulevard 224,<br />
                  New York
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">Signup for our newsletter</p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL"
                  className="flex-1 bg-gray-800 text-white px-4 py-3 text-sm border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 transition-colors duration-300 font-medium"
                >
                  →
                </button>
              </div>
            </form>

            {/* Follow Us Section */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-300 uppercase tracking-wider">Follow Us!</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  aria-label="Facebook"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebookSquare className="text-lg" />
                </a>
                <a 
                  href="https://instagram.com" 
                  aria-label="Instagram"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <RiInstagramFill className="text-lg" />
                </a>
                <a 
                  href="https://twitter.com" 
                  aria-label="Twitter"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300 transform hover:scale-110"
                >
                  <FaXTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
