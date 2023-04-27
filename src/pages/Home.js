import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Slideshow from '../components/Slideshow'

const Home = () => {
  return (
    <div>
       <Navbarr />
      <HeroSection />
      <Services />
      <Slideshow />
      <AboutUs />
     
      <Footer ></Footer>
    </div>
  )
}

export default Home