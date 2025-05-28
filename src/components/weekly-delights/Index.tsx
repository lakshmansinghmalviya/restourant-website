import { FaHamburger } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";

// Header Section
const Header = () => {
  return (
    <div className="bg-[#F7BA25] px-2 md:px-6 lg:px-10">
      <nav className="text-white bg-black flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 items-center justify-center sm:justify-around min-h-[5rem] sm:h-20 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-4">
        {/* Discount Voucher */}
        <div className="flex gap-2 items-center">
          <div className="bg-[#F7BA25] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:size-[50px] rounded-full">
            <CiDiscount1 className="w-5 h-5 sm:w-6 sm:h-6 lg:size-7 text-black" />
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-sm sm:text-base lg:text-lg font-medium">Discount</span>
            <span className="text-sm sm:text-base lg:text-lg font-medium">Voucher</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block bg-gray-700 h-8 lg:h-12 w-px" />

        {/* Healthy Food */}
        <div className="flex gap-2 items-center">
          <div className="bg-[#F7BA25] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:size-[50px] rounded-full">
            <FaHamburger className="w-5 h-5 sm:w-6 sm:h-6 lg:size-7 text-black" />
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-sm sm:text-base lg:text-lg font-medium">Fresh</span>
            <span className="text-sm sm:text-base lg:text-lg font-medium">Healthy Food</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block bg-gray-700 h-8 lg:h-12 w-px" />

        {/* Fast Service */}
        <div className="flex gap-2 items-center">
          <div className="bg-[#F7BA25] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:size-[50px] rounded-full">
            <IoFastFood className="w-5 h-5 sm:w-6 sm:h-6 lg:size-7 text-black" />
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-sm sm:text-base lg:text-lg font-medium">Fast Service</span>
            <span className="text-sm sm:text-base lg:text-lg font-medium">On Table</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Heading Section
const Heading = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 justify-between items-start lg:items-center py-4 lg:py-6">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-800">
        WEEKLY DELIGHTS
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed lg:w-[20rem] xl:w-[24rem]">
        New week, new cravings! Explore our freshly updated special offers designed to tantalize your taste buds
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
      {options.map((option, index) => (
        <div
          key={index}
          className="text-white bg-[#9C0F1C] flex flex-col gap-3 sm:gap-4 w-full max-w-sm mx-auto sm:max-w-none h-auto min-h-[20rem] sm:min-h-[22rem] lg:min-h-[24rem] px-4 sm:px-6 py-4 sm:py-5 rounded-t-md shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Section */}
          {option.img && (
            <div className="w-full h-32 sm:h-36 lg:h-40 overflow-hidden rounded-lg">
              <img 
                src={option.img} 
                alt={option.heading}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          )}
          
          {/* Content Section */}
          <div className="flex flex-col gap-2 sm:gap-3 flex-1">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#F7BA25] leading-tight">
              {option.heading}
            </h3>
            <span className="text-[#F7BA25] font-semibold text-sm sm:text-base">
              {option.days}
            </span>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed flex-1">
              {option.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 px-1 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Header Section */}
        <Header />
        
        {/* Main Content Section */}
        <div className="bg-[#F7BA25] px-2 sm:px-4 md:px-6 lg:px-10 py-2">
          <div className="bg-white flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 rounded-lg shadow-sm">
            {/* Heading */}
            <Heading />
            
            {/* Delights Cards */}
            <Delights />
          </div>
        </div>
      </div>
    </div>
  );
}