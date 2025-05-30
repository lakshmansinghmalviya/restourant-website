import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCcPaypal, FaCcVisa, FaCcMastercard, FaCreditCard,
  FaFacebookSquare, FaTwitter
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  SiGooglepay, SiPhonepe, SiRay, SiAmericanexpress, SiPaytm
} from "react-icons/si";

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
    { day: 'MONDAY', hours: 'CLOSED' },
    { day: 'TUESDAY', hours: '12:00 - 10:00 PM' },
    { day: 'WEDNESDAY', hours: '12:00 - 10:00 PM' },
    { day: 'THURSDAY', hours: '12:00 - 10:00 PM' },
    { day: 'FRIDAY', hours: '12:00 - 10:00 PM' },
    { day: 'SATURDAY', hours: '05:00 - 10:00 PM' },
    { day: 'SUNDAY', hours: '05:00 - 10:00 PM' }
  ];

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div
              className="flex items-center space-x-3 mb-6 cursor-pointer group transition-transform transform hover:scale-105 duration-300"
              onClick={() => navigate('/')}
            >
              <img src="/logo2.png" alt="Logo" />
            </div>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider">Opening Hours</h3>
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-sm">
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
                <p className="text-white font-medium">T +496107 4078377</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium">info@Garcias-Kitchen.de</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p className="text-white font-medium">
                  Herbert-Heckmann Anlage 1<br />
                  65451 Kelsterbach, Germany
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider">Payment Methods</h3>
            <div className="grid grid-cols-4 gap-2">
              {["/pay/p1.svg","/pay/p2.svg","/pay/p3.svg","/pay/p4.svg","/pay/p5.svg","/pay/p6.svg","/pay/p7.svg",].map((s, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img className="text-2xl" src={s} />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social Links Section */}
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
                  className="flex-1 bg-gray-800 text-white py-3 px-2 text-sm border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 transition-colors duration-300 font-medium"
                >
                  →
                </button>
              </div>
            </form>

            <h4 className="text-lg font-bold mb-4 text-gray-300 uppercase tracking-wider">Follow Us!</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <FaFacebookSquare className="text-lg" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110">
                <RiInstagramFill className="text-lg" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
