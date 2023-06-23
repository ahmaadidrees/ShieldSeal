import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import WhySealTech from '../components/WhySealTech'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
        <WhySealTech />
        <Footer />

    </div>
  )
}

export default OurStoryPage