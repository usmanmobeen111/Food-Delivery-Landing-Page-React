import React from 'react'
import { FaBolt, FaFireAlt, FaGlassWhiskey, FaHamburger, FaLaughBeam, FaPizzaSlice } from 'react-icons/fa'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Menu/> 
    </div>
  )
}

export default Home
