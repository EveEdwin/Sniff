import React, { useState } from 'react';
import { FaPaw, FaCalendarAlt, FaClock, FaUser, FaDog, FaPhoneAlt, FaEnvelope, FaNotesMedical } from 'react-icons/fa';
import Component7 from '../Components/C5';
import Component8 from '../Components/C6';
import { Link } from 'react-router-dom'
const ThankYouPage = () => {


  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Header Banner */}
      <div className="bg-red-100/50 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3F3D56]">Your Appointment is </span>
            <span className="text-[#FE5F62]">Scheduled</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Your appointment has been successfully scheduled. We'll contact you shortly to confirm the details.
          </p><br></br>
          <Link to="/bookappointment" className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#FE5F62]
                    hover:bg-[#e45457]
                    text-white
                    font-medium
                    px-6
                    py-3
                    rounded-md
                    transition-all
                    duration-300
                    mt-2
                    self-start
                    shadow-lg
                    group
                    w-auto
                ">
                    Book Another Appointment
                    <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
                </Link>
        </div>
        
      </div>

      {/* <Component7 /> */}
      {/* Newsletter Section */}
      <div className="bg-red-100/50 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="text-[#3F3D56]"> For Any Queries,  </span>
            <span className="text-[#FE5F62]">Feel Free to Contact Us</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          If you have any questions or need assistance, feel free to reach out to us. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            {/* <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent flex-grow"
            /> */}
           <a 
  href="https://wa.me/919175129919" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="
    inline-flex
    items-center
    gap-2
    bg-[#25D366]  /* WhatsApp Green Color */
    hover:bg-[#128C7E]  /* Darker Green when hovered */
    text-white
    font-medium
    px-6
    py-3
    rounded-md
    transition-all
    duration-300
    mt-2
    self-start
    shadow-lg
    group
    w-auto
  "
>
  Contact Us on WhatsApp
  <FaPhoneAlt className="inline-block ml-1 transition-transform group-hover:rotate-12" />
</a>

          </div>
        </div>
      </div>
      <Component8 />
    </div>
    
  );
};

export default ThankYouPage;
