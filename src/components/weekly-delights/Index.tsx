"use client";

import { FaHamburger } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";

// Header Section
const Header = () => {
  return (
    <div className="bg-[#F7BA25] px-2">
      <nav className="text-white bg-black flex flex-col sm:flex-row gap-6 items-center justify-center sm:justify-between min-h-[5rem] sm:h-20 px-6 py-4 rounded-b-3xl shadow-lg">
        {/* Items */}
        {[
          { icon: <CiDiscount1 className="text-black size-6 sm:size-7" />, title: "Discount", subtitle: "Voucher" },
          { icon: <FaHamburger className="text-black size-6 sm:size-7" />, title: "Fresh", subtitle: "Healthy Food" },
          { icon: <IoFastFood className="text-black size-6 sm:size-7" />, title: "Fast Service", subtitle: "On Table" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 group transition-all duration-300 hover:scale-105 hover:bg-[#F7BA25]/20 p-2 rounded-xl">
            <div className="bg-[#F7BA25] p-3 rounded-full shadow-md">{item.icon}</div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-base font-medium ">{item.title}</span>
              <span className="text-base font-medium ">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

// Heading Section
const Heading = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center py-6">
      <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-800 tracking-tight">
        WEEKLY DELIGHTS
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
        New week, new cravings! Explore our freshly updated special offers designed to tantalize your taste buds.
      </p>
    </div>
  );
};

// Delights Cards
const Delights = () => {
  const options = [
    {
      img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop&crop=center',
      heading: 'LUNCHTIME COMBO',
      days: 'Saturday',
      description: 'Enjoy a satisfying lunch combo with a main course, side, and drink.',
    },
    {
      img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=250&fit=crop&crop=center',
      heading: 'TACO TUESDAY',
      days: 'Tuesday',
      description: 'Crispy tacos with fresh ingredients and authentic flavors.',
    },
    {
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop&crop=center',
      heading: 'WING WEDNESDAY',
      days: 'Wednesday',
      description: 'Delicious chicken wings with your choice of sauce.',
    },
    {
      img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop&crop=center',
      heading: 'WEEKEND BRUNCH',
      days: 'Sat & Sun',
      description: 'Perfect brunch experience with mimosas and fresh pastries.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {options.map((option, index) => (
        <div
          key={index}
          className="bg-[#9C0F1C] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition duration-300 hover:shadow-2xl backdrop-blur-md text-white"
        >
          <div className="h-40 overflow-hidden">
            <img
              src={option.img}
              alt={option.heading}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#F7BA25]">{option.heading}</h3>
            <span className="text-sm font-semibold text-[#F7BA25]">{option.days}</span>
            <p className="text-sm text-gray-100 leading-relaxed">{option.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Component
export default function Index() {
  return (
    <div className="bg-[#FAFAFA] font-sans">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3 py-6 space-y-10">
        <Header />
        <div className="bg-[#F7BA25] rounded-xl p-2 shadow-md">
          <div className="bg-white rounded-xl px-2 py-8 shadow-lg">
            <Heading />
            <Delights />
          </div>
        </div>
      </div>
    </div>
  );
}
