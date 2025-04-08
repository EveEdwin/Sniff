import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Component1() {
  return (
    <div className="bg-white px-6 py-12 md:px-20 md:py-16 min-h-screen">
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#3F3D56] tracking-wider">
            <p className="mb-4 hover:text-[#FE5F62] transition-colors duration-300">
              Sniffi – Quality <span className="text-[#FE5F62] hover:underline">Pet Care,</span>
            </p>
            Right at <span className="text-[#FE5F62] hover:underline">Your Doorstep!</span>
          </h1>

          <h2 className="mt-10 md:mt-16 text-xl md:text-3xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
            Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span>
          </h2>

          <ul className="mt-6 space-y-4 text-base md:text-lg text-black">
            <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
              <FaCheckCircle className="text-[#FE5F62] mt-1" />
              <span className="hover:text-[#FE5F62] transition-colors duration-300">
                <strong>Comfort & Less Stress</strong> – Pets feel more relaxed in their familiar environment, reducing anxiety and fear.
              </span>
            </li>
            <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
              <FaCheckCircle className="text-[#FE5F62] mt-1" />
              <span className="hover:text-[#FE5F62] transition-colors duration-300">
                <strong>Convenience & Time-Saving</strong> – No more hectic clinic visits or waiting in long queues—care comes to you!
              </span>
            </li>
            <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
              <FaCheckCircle className="text-[#FE5F62] mt-1" />
              <span className="hover:text-[#FE5F62] transition-colors duration-300">
                <strong>One-on-One Attention</strong> – Our vets provide personalized consultations and thorough check-ups without distractions.
              </span>
            </li>
            <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
              <FaCheckCircle className="text-[#FE5F62] mt-1" />
              <span className="hover:text-[#FE5F62] transition-colors duration-300">
                <strong>Safe & Hygienic</strong> – Minimize exposure to contagious illnesses and ensure a cleaner, safer experience.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center self-end">
          <img
            className="h-[300px] md:h-[400px] object-cover rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            src="/women.jpg"
            alt="Vet with dog"
          />
        </div>
      </div>
    </div>
  );
}

export default Component1;
