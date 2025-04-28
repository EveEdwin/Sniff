import React from 'react';

const ServiceHeading = ({ headingParts, contentParts, imageSrc, imageAlt }) => {
    return (
        <div className="flex flex-col items-center m-auto mt-10 px-4 mb-16">
            <div>
                <div className="md:text-left w-full md:w-[881px]">
                    {headingParts.map((part, index) => (
                        <span
                            key={index}
                            className={`text-4xl md:text-6xl tracking-wider ${
                                part.highlight ? 'text-[#FE5F62]' : 'text-[#3F3D56]'
                            }`}
                        >
                            {part.text}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-6 items-center">
                    <div className="text-justify justify-start w-full md:w-[862px]">
                        {contentParts.map((part, index) => (
                            <span
                                key={index}
                                className={`text-base md:text-xl leading-loose tracking-tight ${
                                    part.highlight ? 'text-[#FE5F62] font-medium' : 'text-black font-normal'
                                }`}
                            >
                                {part.text}
                            </span>
                        ))}
                    </div>
                    <img
                        className="w-60 h-40 md:w-80 md:h-56 rounded-[5px]"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceHeading;
