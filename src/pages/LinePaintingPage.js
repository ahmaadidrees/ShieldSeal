import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import LinePainting from '../components/LinePainting'

const CrackFillingPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true}  />
        <LinePainting />
        <Footer />
    </div>
  )
}

export default CrackFillingPage;