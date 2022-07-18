import React from "react"
import AboutCard from "../About/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./Hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./Testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home