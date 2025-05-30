import CategoryMenu from "./components/CategoryMenu"
import Hero from "./components/Hero"
import MeetChefs from "./components/MeetChefs"
import Testimonals from "./components/Testimonals"

import AllFoodNamesWithImages from './components/AllFoodNamesWithImages'
import DrinkAndEnjoy from './components/DrinkAndEnjoy'
import WeeklyDelights from './components/weekly-delights/Index'


export default function Home() {
  return (
    <>
      <Hero />
      {/* <RestaurantHeroCarousel/> */}
      <WeeklyDelights />
      {/* <BestSellers /> */}
      {/* <Menu/> */}
      {/* <ChatbotComponent /> */}
      {/* <Blogs/> */}
      <DrinkAndEnjoy />
      {/* <PrivateEvents/> */}
      {/* <BookTable/> */}
      <CategoryMenu />
      {/* <OurStory/> */}
      {/* <Achievements/> */}
      {/* <MeetOurTeam/> */}
      <AllFoodNamesWithImages />
      {/* <MeetChefs /> */}
      <Testimonals />
    </>
  )
}