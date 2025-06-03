import { useState } from "react";
import { NavLink } from "react-router-dom";
import { nav_options } from "../header/Header"; 

const EventPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (err) {
      console.error("Form submission failed", err);
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavbar = () => {
    return (
      <nav className="bg-red-800 text-white px-4 sm:px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={"/logo.svg"} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-base sm:text-lg font-semibold">Event Booking</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="block md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex">
            <div className="flex flex-row gap-6">
              {nav_options.map((option, index) => (
                <NavLink
                  key={index}
                  to={option?.link || ""}
                  className={({ isActive }) =>
                    `px-3 py-2 transition-all duration-200 ${
                      isActive
                        ? "border-b-2 border-white text-white"
                        : "hover:border-b-2 hover:border-white text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {option?.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-red-900 mt-2 rounded-lg">
            {nav_options.map((option, index) => (
              <NavLink
                key={index}
                to={option?.link || ""}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-red-700 text-white"
                      : "text-gray-200 hover:bg-red-700 hover:text-white"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {option?.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  const renderDescriptionAndForm = () => {
    return (
      <div className="bg-red-700 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Left Description */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Celebrate, Gather, And Savor The Moment
              </h1>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg">
                <p className="leading-relaxed">
                  Make your special moments memorable with our tailored event planning service.
                </p>
                <p className="leading-relaxed">
                  Whether it's a birthday, anniversary, or corporate party – we've got everything covered.
                </p>
              </div>
              
              {/* Additional features for larger screens */}
              <div className="hidden sm:flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">Professional event planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">Customizable packages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm lg:text-base">24/7 support</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-1 lg:max-w-md xl:max-w-lg">
              <form
                onSubmit={handleSubmit}
                className="bg-white text-black rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-800 mb-4 sm:mb-6">
                  Book Your Event
                </h2>
                
                <div className="space-y-4 sm:space-y-5">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                      required
                    />
                    <input
                      name="people"
                      type="number"
                      min="1"
                      value={formData.people}
                      onChange={handleChange}
                      placeholder="Number of People"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                        required
                      />
                    </div>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Event Title"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-900 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-red-300 text-sm sm:text-base"
                  >
                    Book Your Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* {renderNavbar()} */}
      {renderDescriptionAndForm()}
    </div>
  );
};

export default EventPage;