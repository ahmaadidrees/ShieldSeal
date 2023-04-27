import React from 'react'
import Navbarr from '../components/Navbar'
import Sealcoating from '../components/Sealcoating'
import Footer from '../components/Footer'

const SealcoatPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true}  />
        <Sealcoating />
        <Footer />
    </div>
  )
}

export default SealcoatPage