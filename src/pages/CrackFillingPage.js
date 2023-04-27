import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import CrackFilling from '../components/CrackFilling'

const CrackFillingPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true}  />
        <CrackFilling />
        <Footer />
    </div>
  )
}

export default CrackFillingPage;