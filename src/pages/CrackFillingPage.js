import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import CrackFilling from '../components/CrackFilling'
import MyComponent from '../components/MyComponent'

const CrackFillingPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true}  />
        <CrackFilling />
        {/* <MyComponent /> */}
        <Footer />
    </div>
  )
}

export default CrackFillingPage;