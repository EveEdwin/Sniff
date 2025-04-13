import React from 'react';
import { FaPaw } from 'react-icons/fa';

const Component17 = () => {
    return (
        <div className="w-full min-h-[300px] md:h-auto relative bg-[#FEC8C8]/50 mt-10 overflow-hidden px-4 md:px-8 lg:px-[102px] py-8">
            <div className="text-center md:text-justify mb-8">
                <span className="text-[#3F3D56] text-2xl md:text-4xl font-semibold  tracking-wide">Diagnostic Categories by </span>
                <span className="text-[#FE5F62] text-2xl md:text-4xl font-semibold  tracking-wide">Symptoms</span>
            </div>

            <div className="w-full flex flex-wrap justify-center md:justify-start items-start gap-4 md:gap-6 lg:gap-10 mb-8">
                {/* Category items - using map to avoid repetition */}
                {[
                    "General Health",
                    "Fever",
                    "Heart",
                    "Diabetes",
                    "General Health",
                    "Fever", 
                    "Heart",
                    "Diabetes",
                    "General Health",
                    "General dog"
                ].map((category, index) => (
                    <div key={index} className="w-36 sm:w-44 md:w-52 px-3 md:px-3.5 py-3 md:py-4 bg-[#FFFFFF] rounded-xl outline-[0.59px] outline-offset-[-0.59px] outline-[#FE5F62] inline-flex flex-col justify-start items-start gap-2 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="self-stretch inline-flex justify-start items-center gap-3">
                            <div className="w-7 h-7 md:w-9 md:h-9 relative bg-[#FFFFFF] rounded-[35.32px] outline-[0.47px] outline-offset-[-0.47px] outline-[#FE5F62] overflow-hidden flex justify-center items-center">
                                <FaPaw className="text-[#FE5F62] text-base md:text-xl" />
                            </div>
                            <div className="text-justify justify-start text-[#3F3D56] text-sm md:text-lg font-medium  tracking-tight">{category}</div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex justify-center  text-center md:text-justify text-[#FE5F62] text-xl   underline tracking-tight">
                <a href="#" className="cursor-pointer">See More</a>
            </div>
        </div>
    );
};

export default Component17;