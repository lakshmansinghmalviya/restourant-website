import ChatbotComponent from "./components/chatbot/ChatbotComponent"
import Blogs from "./components/Blogs"
import Hero from "./components/Hero"
import Menu from "./components/Menu/Menu"
import Testimonals from "./components/Testimonals"
import MeetChefs from "./components/MeetChefs"
import MeetOurTeam from "./components/MeetOurTeam"
import Achievements from "./components/Achievements"
import OurStory from "./components/OurStory"
import CategoryMenu from "./components/CategoryMenu"
import BookTable from "./components/BookTable"

export default function Home() {
  return (
    <>
    <Hero/>
    <Menu/>
    <ChatbotComponent />
    <Testimonals/>
    <Blogs/>
    <BookTable/>
    <CategoryMenu/>
    <OurStory/>
    <Achievements/>
    <MeetOurTeam/>
    <MeetChefs/>
    </>
  )
}