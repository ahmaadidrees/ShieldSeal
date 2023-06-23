import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import GoogleMap from '../components/GoogleMap'

const ContactPage = () => {
  return (
    <div id='contact'>
        <div id="top"></div>
        <Navbarr isHomePage={true}  />
        <ContactUs />
        <div style={{position:"relative", bottom: 100, marginTop:100}}>
        <GoogleMap latitude={37.7749} longitude={-122.4194} zoom={12} />
        </div>
        <div style={{position:'relative', paddingTop:300}}>
        <Footer />
        </div>
    </div>
  )
}

export default ContactPage;