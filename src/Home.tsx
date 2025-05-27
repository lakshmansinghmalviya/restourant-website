import Hero from "./components/Hero"
import Menu from "./components/menu/Menu"
import Testimonals from "./components/Testimonals"
import MeetChefs from "./components/MeetChefs"
import MeetOurTeam from "./components/MeetOurTeam"
import Achievements from "./components/Achievements"
import OurStory from "./components/OurStory"
import CategoryMenu from "./components/CategoryMenu"
import BookTable from "./components/BookTable"

import WeeklyDelights from './components/weekly-delights/Index'
import BestSellers from './components/chef-best-sellers/Index'
import PrivateEvents from './components/private-events/Index'
import DrinkAndEnjoy from './components/DrinkAndEnjoy'
import AllFoodNamesWithImages from './components/AllFoodNamesWithImages'
import RestaurantHeroCarousel from './components/RestaurantHeroCarousel'


export default function Home() {
  return (
    <>
    <Hero/>
    {/* <RestaurantHeroCarousel/> */}
    <WeeklyDelights />
    {/* <BestSellers /> */}
    {/* <Menu/> */}
    {/* <ChatbotComponent /> */}
    {/* <Blogs/> */}
    <DrinkAndEnjoy/>
    {/* <PrivateEvents/> */}
    {/* <BookTable/> */}
    <Testimonals/>
    <CategoryMenu/>
    {/* <OurStory/> */}
    {/* <Achievements/> */}
    {/* <MeetOurTeam/> */}
    <AllFoodNamesWithImages/>
    <MeetChefs/>
    </>
  )
}