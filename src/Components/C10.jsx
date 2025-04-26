import React, { useState } from 'react'
import CardDetailsCard from '../preComponent/cardDetails';

const cardDetails = [
    {
        title: "I Care a Lot",
        desc: "Comprehensive health check-up for proactive pet parents. Includes essential tests to ensure your furry friend stays happy & healthy!",
        details: (
            <div className="p-4 bg-pink-100 rounded-lg border-t border-pink-200 text-sm text-gray-700">
                <CardDetailsCard />
                <CardDetailsCard />
                <CardDetailsCard />
            </div>
        ),
    },
    {
        title: "I am Panicking",
        desc: "Emergency diagnostic package for sudden illness or alarming symptoms. Quick, vet-guided tests for immediate insights.",
        details: (
            <div className="p-4 bg-pink-100 rounded-lg border-t border-pink-200 text-sm text-gray-700">
                <CardDetailsCard />
                <CardDetailsCard />
                <CardDetailsCard />
            </div>
        ),
    },
    {
        title: "Being Precautionary",
        desc: "Preventive screening for early disease detection. A smart choice for pet owners who want to stay ahead of potential health issues!",
        details: (
            <div className="p-4 bg-pink-100 rounded-lg border-t border-pink-200 text-sm text-gray-700">
                <CardDetailsCard />
                <CardDetailsCard />
                <CardDetailsCard />
            </div>
        ),
    },
];

const Component12 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-10 relative overflow-hidden">
            {/* Title section */}
            <div className="text-center md:text-left md:ml-[103px] mb-10">
                <span className="text-[#3F3D56] text-2xl md:text-4xl font-semibold tracking-wide">Top Health </span>
                <span className="text-[#FE5F62] text-2xl md:text-4xl font-semibold tracking-wide">Packages</span>
            </div>

            {/* Cards container */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start md:flex-wrap items-start gap-6 md:ml-[103px]">
                {cardDetails.map((card, idx) => (
                    <div key={card.title} className="flex flex-col w-full max-w-[384px] sm:w-[90%]">
                        {/* Card */}
                        <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-0 overflow-hidden mb-2">
                            <div className="self-stretch px-4 md:px-32 py-4 bg-[#FE5F62] flex justify-center items-center gap-2">
                                <div className="text-center text-[#FFFFFF] text-md md:text-xl font-semibold tracking-wide">{card.title}</div>
                            </div>
                            <div className="w-full px-4 flex flex-col justify-start items-start gap-1.5 py-3">
                                <div className="self-stretch text-[#000000] text-base font-normal leading-normal tracking-tight">{card.desc}</div>
                                <button
                                    onClick={() => handleToggle(idx)}
                                    className="self-stretch text-[#FE5F62] text-base font-normal leading-normal tracking-tight hover:underline cursor-pointer text-left focus:outline-none"
                                >
                                    {openIndex === idx ? "Hide Details" : "View More"}
                                </button>
                            </div>
                        </div>

                        {/* Details dropdown below the card */}
                        {openIndex === idx && (
                            <div className="w-full mb-4 transition-all duration-300 ease-in-out">
                                {card.details}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component12


