import React from 'react'
import { Link } from 'react-router-dom'
import doctorSvg from '../assets/doctorWithDog.svg'
import { FaPaw } from 'react-icons/fa'

const Component14 = () => {
    return (
        <div
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/doc8.png)` 
            }}
            className="
                w-full
                relative
                aspect-[16/9] md:aspect-[36/15.67]
                bg-no-repeat
                bg-cover
                bg-center
                flex
                items-center md:items-start
                justify-start
                overflow-hidden
                transition-all
                duration-500
                animate-fadeIn
            "
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            
            <div
                className="
                    relative
                    z-10
                    px-6 py-10
                    md:pl-12 md:pt-16
                    lg:pl-20 lg:pt-20
                    max-w-xl
                    md:max-w-2xl
                    flex
                    flex-col
                    gap-6
                "
            >
                <h1 className="
                    text-white
                    font-bold
                    tracking-wide
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                    leading-tight
                ">
                    Your Pet Deserves the <br />
                    <span className="text-[#FE5F62]">Best Care</span>
                </h1>
                
                <p className="text-white/90 text-base md:text-lg max-w-md">
                    Professional veterinary services tailored to your pet's needs, 
                    with compassionate care from our experienced team.
                </p>
                
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
                    Book Appointment
                    <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
                </Link>
            </div>
        </div>
    )
}

export default Component14
