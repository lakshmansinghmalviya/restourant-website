import { NavLink } from "react-router-dom"
import { nav_options } from "../header/Header"
import { Fragment } from "react/jsx-runtime"; 
import BookEvent from "./BookEvent";
import Gallery from "./Gallery";

const Header = () => {
  return nav_options.map((option, index: number) => {
    if (index === 3) {
      return (
        <Fragment key="image-and-rest">
          {/* Insert image before rendering index 3 */}
          <img src={"/logo.svg"} alt="Your Alt Text" />
          <NavLink to={option?.link || ''} className={({ isActive }) => isActive ? 'border-b border-white' : 'hover:border-b hover:border-white'}>
            {option?.name}
          </NavLink>
        </Fragment>
      );
    }
    return(
      <NavLink key={index} to={option?.link || ''} className={({ isActive }) => isActive ? 'border-b border-white' : 'hover:border-b hover:border-white'}>
        {option?.name}
      </NavLink>
    )
  })
}


export default function Index() {
  return (
    <div className="text-white bg-red-800 flex flex-col gap-10 py-3">
      {/* Navbar */} 
      <BookEvent />
      <Gallery />
    </div>
  )
}