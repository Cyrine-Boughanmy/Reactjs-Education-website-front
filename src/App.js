import "./App.css"
import Header from "./components/common/Header/Header"
import { BrowserRouter as Router,  Route } from "react-router-dom"
import {Routes} from "react-router"
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
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App