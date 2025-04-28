import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Component1 = () => {
  return (
    <div className="bg-white w-full px-4 sm:px-6 lg:px-20 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 text-[#3F3D56]">
          <p className="mb-2 md:mb-4 transition-colors duration-300">
            Sniffi – Quality <span className="text-[#FE5F62]">Pet Care,</span>
          </p>
          <p>
            Right at <span className="text-[#FE5F62]">Your Doorstep!</span>
          </p>
        </h1>
        
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <section className='w-full lg:w-3/5 flex flex-col justify-center'>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3F3D56] mb-6">
              Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span>
            </h2>

            <ul className="mt-4 space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-black">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0" />
                <span>
                  <strong>Comfort & Less Stress</strong> – Pets feel more relaxed in their familiar environment, reducing anxiety and fear.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0" />
                <span>
                  <strong>Convenience & Time-Saving</strong> – No more hectic clinic visits or waiting in long queues—care comes to you!
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0" />
                <span>
                  <strong>One-on-One Attention</strong> – Our vets provide personalized consultations and thorough check-ups without distractions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0" />
                <span>
                  <strong>Safe & Hygienic</strong> – Minimize exposure to contagious illnesses and ensure a cleaner, safer experience.
                </span>
              </li>
            </ul>
          </section>
          
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
              src="/women.jpg"
              alt="Professional veterinarian with dog"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
