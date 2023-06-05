import React from 'react'
import Navbarr from '../components/Navbar'
import Sealcoating from '../components/Sealcoating'
import Footer from '../components/Footer'
import MyComponent from '../components/MyComponent'

const SealcoatPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true}  />
        <Sealcoating />
        {/* <MyComponent /> */}
        <Footer />
    </div>
  )
}

export default SealcoatPage