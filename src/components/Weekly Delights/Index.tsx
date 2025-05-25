import { FaHamburger } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#F7BA25] px-2 pr-10">
      <nav className="text-white bg-black flex gap-5 items-center justify-around h-20 px-40 py-3">
        <div className="flex gap-2 items-center">
          {/* Icon */}
          <div className="bg-[#F7BA25] flex items-center justify-center size-[50px] rounded-full">
            <CiDiscount1 className="size-7 text-black" />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <span>Discount</span>
            <span>Voucher</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="bg-gray-900 h-full w-1" />
        
        <div className="flex gap-2 items-center">
          {/* Icon */}
          <div className="bg-[#F7BA25] flex items-center justify-center size-[50px] rounded-full">
            <FaHamburger className="size-7 text-black" />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <span>Fresh</span>
            <span>Healthy Food</span>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-gray-900 h-full w-1" />
      
        <div className="flex gap-2 items-center">
          {/* Icon */}
          <div className="bg-[#F7BA25] flex items-center justify-center size-[50px] rounded-full">
            <IoFastFood className="size-7 text-black" />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <span>Fast Service</span>
            <span>On Table</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

const Heading = () => {
  return (
    <div className="flex gap-5 justify-between py-3">
      <p className="font-bold text-2xl">WEEKLY DELIGHTS</p>

      <span className="w-[20rem]">New week, new cravings! Explore our freshly updated special offers designed to tantalize your taste buds</span>
    </div>
  )
}

const Delights = () => {
  const options = [
    {
      img: '',
      heading: 'LUNCHTIME COMBO',
      days: 'Saturday',
      description: 'Enjoy a satifying lunch combo with a main course, side, and drink.'
    },
    {
      img: '',
      heading: 'TACO TUESDAY',
      days: 'Tuesday',
      description: 'Enjoy a satifying lunch combo with a main course, side, and drink.'
    },
    {
      img: '',
      heading: 'WING WEDNESDAY',
      days: 'Wednesdays',
      description: 'Enjoy a satifying lunch combo with a main course, side, and drink.'
    },
    {
      img: '',
      heading: 'WEEKEND BRUNCH',
      days: 'Sat & ',
      description: 'Enjoy a satifying lunch combo with a main course, side, and drink.'
    },
  ];

  return options.map((option, index: number) => {
    return (
      <div key={index} className="text-white bg-[#9C0F1C] flex flex-col gap-5 w-[17rem] h-[20rem] px-8 py-3 rounded-t-md">
        {option.img && <img src={option?.img} alt="image" className="roundded-lg" />}

        <span className="font-bold text-2xl text-[#F7BA25]">{option?.heading}</span>
        <span className="text-[#F7BA25]">{option?.days}</span>
        <span>{option?.description}</span>
      </div>
    )
  });
}

export default function Index() {

  return (
    <div className="flex flex-col gap-5 px-8 py-5">
      <Header />
      
      <div className="bg-[#F7BA25] px-2 pr-10">

        <div className="bg-white flex flex-col gap-3 px-5">
          <Heading />
          <div className="flex flex-wrap gap-5">
            <Delights />
          </div>
        </div>
      </div>
    </div>
  )
}