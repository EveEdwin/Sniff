import React from 'react'
import dogsvg from '../assets/dog.svg'
import { FaPaw } from 'react-icons/fa'
import pawsvg from '../assets/paw.svg'


const Component15 = () => {
    return (
        <div className='flex items-center justify-evenly relative h-[80vh]'>
                <img src={pawsvg} alt="pawsvg" className='absolute left-[30px] bottom-[40px] ' />
                <img src={pawsvg} alt="pawsvg" className='absolute left-[90px] bottom-[80px] ' />
            <div className='relative '>
                <img src={pawsvg} alt="pawsvg" className='absolute right-[11vw] top-[7vh] ' />
                <img src={pawsvg} alt="pawsvg" className='absolute right-[100px] top-[15px] ' />
                <img src={pawsvg} alt="pawsvg" className='absolute right-[100px] top-[15px] ' />
                {/* <img src={pawsvg} alt="pawsvg" className='absolute right-[100px] top-[45px] ' /> */}

                <div className="text-justify justify-start mb-2 ">
                    <span className="text-[#3F3D56] text-6xl font-semibold font-['Inter'] tracking-wider">Compassionate </span>
                    <span className="text-[#FE5F62] text-6xl font-semibold font-['Inter'] tracking-wider">Care <br /></span>
                    <span className="text-[#3F3D56] text-6xl font-semibold font-['Inter'] tracking-wider">for </span>
                    <span className="text-[#FE5F62] text-6xl font-semibold font-['Inter'] tracking-wider">Every Paw!</span>
                </div>
                <div className="w-[53dvw] mb-2 text-justify justify-start text-black text-xl font-normal font-['Inter'] leading-loose tracking-tight">
                    At Sniffi, we believe that every pet deserves the best care, love, and attention. Our team of experienced veterinarians and compassionate staff are dedicated to providing high-quality medical care, wellness services, and emergency treatments for your beloved pets.
                </div>
                <div className="px-3.5 py-2.5 rounded-[5px] outline-1 outline-offset-[-1px] outline-[#FE5F62] inline-flex justify-center items-center gap-2">
                    <div className="text-justify justify-start text-[#FE5F62] text-sm font-normal font-['Inter'] tracking-tight">Learn More</div>
                </div>
            </div>
            <div className='relative'>
                {/* Blurred background circle */}
                <div className='absolute inset-0 bg-[#FE5F62] rounded-[500px] blur-3xl'></div>

                {/* Image on top */}
                <img src={dogsvg} alt="dogsvg" className="relative z-10" />
            </div>
        </div>
    )
}

export default Component15
