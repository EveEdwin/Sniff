import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Component1 = ({
  titleLines = [],
  heading,
  benefits = [],
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="bg-white w-full px-4 sm:px-6 lg:px-20 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 text-[#3F3D56]">
          {titleLines.map((line, index) => (
            <p key={index} className="mb-2 md:mb-4 transition-colors duration-300">
              {line}
            </p>
          ))}
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <section className="w-full lg:w-3/5 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3F3D56] mb-6">
              {heading}
            </h2>

            <ul className="mt-4 space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-black">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0" />
                  <span>
                    <strong>{item.title}</strong> – {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
