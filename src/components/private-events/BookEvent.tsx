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
      <nav className="bg-red-800 text-white px-5 py-3">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-3">
            <img src={"/logo.svg"} alt="Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold">Event Booking</span>
          </div>

          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          <div
            className={`w-full md:flex md:items-center md:w-auto mt-2 md:mt-0 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0 md:ml-6">
              {nav_options.map((option, index) => (
                <NavLink
                  key={index}
                  to={option?.link || ""}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-white"
                      : "hover:border-b hover:border-white"
                  }
                >
                  {option?.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const renderDescriptionAndForm = () => {
    return (
      <div className="bg-red-700 text-white py-10 px-5">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 max-w-7xl">
          {/* Left Description */}
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Celebrate, Gather, And Savor The Moment</h1>
            <p>
              Make your special moments memorable with our tailored event planning service.
            </p>
            <p>
              Whether it's a birthday, anniversary, or corporate party – we've got everything covered.
            </p>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white text-black rounded-xl p-6 flex flex-col gap-4 shadow-md"
          >
            <h2 className="text-xl font-semibold text-red-800">Book Your Event</h2>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 border rounded w-full"
              required
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 p-2 border rounded w-full"
                required
              />
              <input
                name="people"
                value={formData.people}
                onChange={handleChange}
                placeholder="Number of People"
                className="flex-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="flex-1 p-2 border rounded w-full"
                required
              />
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Event Title"
                className="flex-1 p-2 border rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-800 text-white py-2 rounded w-full md:w-auto"
            >
              Submit
            </button>
          </form>
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
