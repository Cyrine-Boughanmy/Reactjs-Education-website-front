import "./App.css"
import Header from "./components/common/Header/Header"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import CourseHome from "./components/AllCourses/CourseHome"
import Team from "./components/Team/Team"
import Pricing from "./components/Pricing/Pricing"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/common/Footer/Footer"
import Home from "./components/Home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
       
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/team' element={<Team/>} />
          <Route  path='/pricing' element={<Pricing/>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
  </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;