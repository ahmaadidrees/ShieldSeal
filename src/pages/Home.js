import React from 'react'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Slideshow from '../components/Slideshow'

const Home = () => {
  return (
    <div>
       <Navbarr isHomePage={false} />
      <HeroSection />
      <Services />
      <Slideshow />
      <AboutUs />
     
      <Footer ></Footer>
    </div>
  )
}

export default Home