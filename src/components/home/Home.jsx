import React from 'react'
import Hero from './hero/Hero'
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Testimonal from "./testimonal/Testimonal"
import Hprice from "./Hprice"
import Hblog from "./Hblog"
import Organization from './organization/Organization'
import Team from '../team/Team'

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutCard /> */}
      {/* <HAbout /> */}
      {/* <Testimonal /> */}
      <Organization />
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  )
}

export default Home