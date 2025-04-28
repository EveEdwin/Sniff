import React from 'react'
import dog from '../assets/dogInDiagnoistic.svg'

const ExpertVet = () => {
    return (
        <div className='flex flex-col items-left ml-24 m-auto mt-10 px-4'>
            <div>
                <div className=" md:text-left w-full md:w-[881px]">
                    <span className="text-[#3F3D56] text-4xl md:text-6x tracking-wider">Expert Vet </span>
                    <span className="text-[#FE5F62] text-4xl md:text-6x tracking-wider">Consultations,</span>
                    <span className="text-[#3F3D56] text-4xl md:text-6x tracking-wider"> Right at Your Doorstep </span>
                    {/* <span className="text-[#FE5F62] text-4xl md:text-6x tracking-wider">Diagnostics?</span> */}
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-6 items-center">
                    <div className="text-justify justify-start w-full md:w-[862px]">
                        <span className="text-black text-base md:text-xl font-normal leading-loose tracking-tight">From minor concerns to major questions, our licensed vets bring compassionate, clinical care straight to your home — minimizing stress for you and your furry friend.</span>
                        {/* <span className="text-[#FE5F62] text-base md:text-xl font-medium leading-loose tracking-tight">pet diagnostics have never been easier!</span>
                        <span className="text-black text-base md:text-xl font-normal leading-loose tracking-tight"> We bring veterinary expertise right to your doorstep, ensuring a stress-free experience for both pets and owners. Our </span>
                        <span className="text-[#FE5F62] text-base md:text-xl font-medium leading-loose tracking-tight">at-home diagnostic services</span>
                        <span className="text-black text-base md:text-xl font-normal leading-loose tracking-tight"> provide </span>
                        <span className="text-[#FE5F62] text-base md:text-xl font-medium leading-loose tracking-tight">professional vet guidance</span>
                        <span className="text-black text-base md:text-xl font-normal leading-loose tracking-tight"> during tests, so you can make informed decisions about your pet’s health. Plus, with our digital report maintenance, you’ll have secure access to your pet’s health records anytime, anywhere—no more lost paperwork or confusion. </span>
                        <span className="text-[#FE5F62] text-base md:text-xl font-medium leading-loose tracking-tight">Convenience, expert care, and seamless record-keeping</span>
                        <span className="text-black text-base md:text-xl font-normal leading-loose tracking-tight">—that’s the Sniffi way!</span> */}
                    </div>
                    {/* <img className="w-60 h-40 md:w-80 md:h-56 rounded-[5px] " src={dog} alt="Dog in Diagnostics" /> */}
                </div>
            </div>
        </div>
    )
}

export default ExpertVet
