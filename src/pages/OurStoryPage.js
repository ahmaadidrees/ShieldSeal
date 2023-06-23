import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
        <OurStory />
        <Footer />

    </div>
  )
}

export default OurStoryPage