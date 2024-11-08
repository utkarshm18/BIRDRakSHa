import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ContactUs from '../../Components/ContactUs/ContactUs'


const Contact = () => {
  return (
    <div w-full h-full text-white> 
        <Navbar />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Contact