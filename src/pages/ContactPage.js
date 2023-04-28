import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const ContactPage = () => {
  return (
    <div id='contact'>
        <div id="top"></div>
        <Navbarr isHomePage={true}  />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default ContactPage;