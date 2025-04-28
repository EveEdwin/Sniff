import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const WhyImp = () => {
    return (
        <div className="bg-white mx-auto w-full px-6 py-8 md:px-20 py-8 min-h-screen ml-10">
          <div>
            
            <div className="flex-1 justify-between flex ">
              <section className='w-[60vw] flex flex-col justify-center'>
                <h2 className=" text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
                  Why <span className="text-[#FE5F62]">It Important?</span>
                </h2>
    
                <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                      Pets often hide symptoms — early detection is key.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    80% of chronic illnesses are preventable with timely consultations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Regular check-ups detect behavioral issues, allergies, infections early.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                      Peace of mind knowing your pet’s health is monitored professionally.
                    </span>
                  </li>
                </ul>
              </section>
              
            </div>
            <section className='w-[60vw] flex flex-col justify-center py-16 '>
                <h2 className=" text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
                Why At-Home with  <span className="text-[#FE5F62]">Sniffi?</span>
                </h2>
    
                <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    No travel stress or clinic anxiety for pets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Zero waiting rooms or exposure to other sick animals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Personalized, one-on-one attention by a trusted vet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 transition-colors duration-300">
                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                    Comfortable, familiar environment improves examination quality.
                    </span>
                  </li>
                </ul>
              </section>
          </div>
        </div>
      );
}

export default WhyImp
