// React Icons
import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../Buttons/Button";

export const nav_options = [
  {
    name: 'HOME',
    link: '/'
  },
  {
    name: 'MENUS',
    link: '/menu'
  },
  {
    name: 'SPECIALS',
    link: '/special'
  },
  {
    name: 'PRIVATE EVENTS',
    link: '/events'
  },
  {
    name: 'About US',
    link: '/about'
  },
  {
    name: 'CONTACT',
    link: '/contact'
  }
];

export default function Header() {
  const [activeItem, setActiveItem] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  
  const handleMenuItemClick = (itemName: string,) => {
    setActiveItem(itemName);    
  };
  
  return (
    <div className="text-white text-sm bg-black flex items-center justify-around gap-5 h-24 px-40 py-3">
      {/* First Section */}
      <div className="flex flex-col gap-3 w-full">
        {/* Location & Phone Number */}
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-3">
            <FaLocationDot className="size-4 text-[#9C0F1C]" />
            <span>25, LEMKE STREAM, SAM DIAGO</span>
          </p>

          <p className="flex items-center gap-3">
            <CiPhone className="size-4 text-[#9C0F1C]" />
            <span>+496107 4078377</span>
          </p>
        </div>

        <hr className="border-[#9C0F1C]" />

        {/* Partial Nav Options */}
        <div className="flex gap-8">{
          nav_options.filter((_, index) => index < 3).map((option, index: number) => 
            <Link key={index} to={option.link} className="hover:text-[#9C0F1C]">
              {option.name}
            </Link>
          )
        }</div>
      </div>
      
      {/* Second Section */}
      <div className="relative min-w-20 min-h-20">
        <img src={logo} alt="logo" className="absolute top-7 size-20" />
      </div>
      
      {/* Third Section */}
      <div className="flex flex-col gap-2 w-full">
        {/* Contact Information and Reservation Button */}
        <div className="flex items-center justify-end gap-5">
          <p className="flex items-center gap-3">
            <MdOutlineEmail className="size-4 text-[#9C0F1C]" />
            <span>info@Garcias-Kitchen.de</span>
          </p>
          <Button>RESERVATION</Button>
        </div>
    
        <hr className="border-[#9C0F1C]" />

        <div className="flex gap-8 justify-end">
          {/* Partial Nav Options */}
          {nav_options.filter((_, index) => index >= 3).map((option, index: number) => 
            <Link key={index} to={option.link} className="hover:text-[#9C0F1C]">
              {option.name}
            </Link>
          )}

          {/* Social Media */}
          <div className="flex gap-3">
            <CiFacebook className="size-6 text-[#9C0F1C]" />
            <FaInstagram className="size-6 text-[#9C0F1C]" />
          </div>
        </div>
      </div>
    </div>
  )
}