import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Component1 = () => {
  return (
    <div className="bg-white mx-auto w-full px-6  md:px-20  min-h-screen">
      <div>
        <h1 className="text-3xl md:text-7xl  font-semibold mb-4 text-[#3F3D56]">
          <p className="mb-4 hover:text-[#FE5F62] transition-colors duration-300">
            Sniffi – Quality <span className="text-[#FE5F62] hover:underline">Pet Care,</span>
          </p>
          <p>
            Right at <span className="text-[#FE5F62] hover:underline">Your Doorstep!</span>
          </p>
        </h1>
        <div className="flex-1 justify-between flex ">
          <section className='w-[60vw] flex flex-col justify-center'>
            <h2 className=" text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
              Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span>
            </h2>

            <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
              <li className="flex items-start gap-3 transition-colors duration-300">
                <FaCheckCircle className="text-[#FE5F62] mt-1" />
                <span className="hover:text-[#FE5F62] transition-colors duration-300">
                  <strong>Comfort & Less Stress</strong> – Pets feel more relaxed in their familiar environment, reducing anxiety and fear.
                </span>
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300">
                <FaCheckCircle className="text-[#FE5F62] mt-1" />
                <span className="hover:text-[#FE5F62] transition-colors duration-300">
                  <strong>Convenience & Time-Saving</strong> – No more hectic clinic visits or waiting in long queues—care comes to you!
                </span>
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300">
                <FaCheckCircle className="text-[#FE5F62] mt-1" />
                <span className="hover:text-[#FE5F62] transition-colors duration-300">
                  <strong>One-on-One Attention</strong> – Our vets provide personalized consultations and thorough check-ups without distractions.
                </span>
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300">
                <FaCheckCircle className="text-[#FE5F62] mt-1" />
                <span className="hover:text-[#FE5F62] transition-colors duration-300">
                  <strong>Safe & Hygienic</strong> – Minimize exposure to contagious illnesses and ensure a cleaner, safer experience.
                </span>
              </li>
            </ul>
          </section>
          <div className=" flex justify-center items-centerml-6 mt-10 self-end">
            <img
              className="h-full object-cover rounded-xl transition-colors duration-300"
              src="/women.jpg"
              alt="Vet with dog"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Component1;
