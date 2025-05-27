import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

export const nav_options = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Special", link: "/special" },
  { name: "Private Events", link: "/events" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="text-black text-sm bg-white px-6 md:px-12 lg:px-20 py-4">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left Info */}
        <div className="flex flex-col gap-2 lg:gap-4 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-[#9C0F1C]" />
              <span className="text-xs">Herbert-Heckmann Anlage 165451 Kelsterbach Germany</span>
            </p>
            <p className="flex items-center gap-2">
              <CiPhone className="text-[#9C0F1C]" />
              <span className="text-xs">+496107 4078377</span>
            </p>
          </div>
          <hr className="border-[#9C0F1C]" />
          <div className="hidden md:flex gap-6">
            {nav_options.slice(0, 3).map((option, index) => (
              <Link key={index} to={option.link} className="hover:text-[#9C0F1C]">
                {option.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center lg:justify-center">
          <img src="/logo6.png" alt="logo" className="size-20 rounded absolute top-7" />
        </div>

        {/* Right Info */}
        <div className="flex flex-col gap-2 w-full items-end">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 justify-end">
            <p className="flex items-center gap-2">
              <MdOutlineEmail className="text-[#9C0F1C]" />
              <span className="text-xs">info@Garcias-Kitchen.de</span>
            </p>
            <Button>RESERVATION</Button>
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#9C0F1C]"
            >
              <GiHamburgerMenu className="size-6" />
            </button>
          </div>

          <hr className="border-[#9C0F1C] w-full" />

          <div className="hidden lg:flex gap-6 justify-end items-center">
            {nav_options.slice(3).map((option, index) => (
              <Link key={index} to={option.link} className="hover:text-[#9C0F1C]">
                {option.name}
              </Link>
            ))}
            <div className="flex gap-3">
              <CiFacebook className="size-5 text-[#9C0F1C]" />
              <FaInstagram className="size-5 text-[#9C0F1C]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          {nav_options.map((option, index) => (
            <Link key={index} to={option.link} className="hover:text-[#9C0F1C]">
              {option.name}
            </Link>
          ))}
          <div className="flex gap-3">
            <CiFacebook className="size-5 text-[#9C0F1C]" />
            <FaInstagram className="size-5 text-[#9C0F1C]" />
          </div>
        </div>
      )}
    </header>
  );
}
