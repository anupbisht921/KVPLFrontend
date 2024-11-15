import { Route, Routes } from "react-router-dom"
import About from "./pages/AboutUs"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Teachers from "./pages/Teachers"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TopBar from "./components/TopBar"
import CourseDetail from "./pages/CourseDetail"


function App() {
  
  return (
    <>
    <TopBar />
    <Header />
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />  {/* The course detail page */}
    </Routes>
     <Footer />
    </>
  )
}

export default App
