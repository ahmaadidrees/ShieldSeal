import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import BlogList from '../components/Blog'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
        <BlogList />
        <Footer />

    </div>
  )
}

export default OurStoryPage