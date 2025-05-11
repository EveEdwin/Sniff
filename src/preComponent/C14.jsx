import React from "react";
import { IoPawOutline } from "react-icons/io5";

const Component6 = ({ headingParts = [], services = [] }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 px-4 md:px-8 bg-red-200/50 overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
          {headingParts.map((part, index) => (
            <span key={index} className={part.color}>
              {part.text}
            </span>
          ))}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative w-full max-w-xs mx-auto md:mx-0">
            <div className="absolute -top-7 left-7 w-14 h-14 bg-white rounded-full outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-red-200/50 rounded-full">
                <IoPawOutline className="w-10 h-10 text-[#FE5F62]" />
              </div>
            </div>

            <div className="w-full h-60 bg-white rounded-xl outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden p-6 pt-10">
              <h3 className="text-[#FE5F62] text-2xl md:text-3xl font-medium tracking-wide">
                {service.title}
              </h3>
              <p className="text-[#3F3D56] text-sm font-normal leading-tight tracking-tight mt-4">
                {service.description}
              </p>
              <div className="mt-4">
                <span className="text-[#FE5F62] text-base font-normal tracking-tight">
                  {service.exploreText || "Explore"}
                </span>
                <div className="w-3.5 h-px bg-[#FE5F62] mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component6;
