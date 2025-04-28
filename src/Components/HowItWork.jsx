import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
const HowItWork = () => {
    return (
        <div className="bg-white mx-auto w-full px-6 py-8 md:px-20 py-8 min-h-screen ml-10">
          <div>
            
            <div className="flex-1 justify-between flex ">
              <section className='w-[60vw] flex flex-col justify-center'>
                <h2 className=" text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
                How It Works
                </h2>
    
                <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                     <strong>Step 1: </strong> Book an appointment through Sniffi's app or website.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    <strong>Step 2: </strong> Vet arrives at your doorstep, fully equipped.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    <strong>Step 3: </strong> Consultation, diagnosis, care advice, and prescriptions provided instantly.
                    </span>
                  </li>
                </ul>
              </section>
              
            </div>
            <section className='w-[60vw] flex flex-col justify-center  py-16'>
                <h2 className=" text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
                What’s Included
                </h2>
    
                <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Complete physical examination.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Personalized health and care advice.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Prescriptions and digital medical records if needed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Recommendations for preventive care and follow-ups.
                    </span>
                  </li>
                </ul>
              </section>
          </div>
        </div>
      );
}

export default HowItWork
