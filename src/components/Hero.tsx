import { Link } from "react-router-dom";
import backgroundimg from "../assets/bgimg.png";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-[100vh] flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-6 p-6 py-10 bg-white/60 rounded-md max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800">
          Come for the coffee, stay for the food, leave with a drink — only at Gracias Kitchen
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700">
          Where every sip, bite, and toast is packed with flavor — and chill is always on the menu
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button className="bg-[#AD343E] hover:bg-[#FF5C5C] transition-transform hover:scale-105 duration-300 ease-out py-2 px-6 rounded-full text-white text-lg w-full sm:w-auto">
            Book A Table
          </button>
          <Link to="/menu" className="w-full sm:w-auto">
            <button className="bg-[#32CD32] hover:bg-[#66E066] transition-transform hover:scale-105 duration-300 ease-out py-2 px-6 rounded-full border border-black text-lg w-full sm:w-auto">
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
