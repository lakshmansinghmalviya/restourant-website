import { Link } from "react-router-dom";
import { MenuItem } from "./type";

const Menucard = (props: MenuItem) => {
  return (
    <div 
      role="article"
      className="flex flex-col gap-2 p-4 text-center transition duration-200 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-[102%] w-full sm:w-60"
    >
      {/* Image */}
      <img 
        src={props.image} 
        alt={`${props.title} image`} 
        className="w-full h-40 object-cover rounded-md mb-2" 
      />
      
      {/* Title */}
      <p className="text-lg font-semibold text-gray-800">{props.title}</p>
      
      {/* Description */}
      <p className="text-sm text-gray-600">{props.description}</p>
      
      {/* Link */}
      <Link 
        to="/menu" 
        aria-label={`Explore menu item: ${props.title}`} 
        className="mt-2 text-sm font-semibold text-[#AD343E] hover:underline"
      >
        Explore Menu
      </Link>
    </div>
  );
}

export default Menucard;
