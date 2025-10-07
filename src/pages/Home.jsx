import React from 'react'
import { FaBolt, FaFireAlt, FaGlassWhiskey, FaHamburger, FaLaughBeam, FaPizzaSlice } from 'react-icons/fa'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Menu/> 
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Home
