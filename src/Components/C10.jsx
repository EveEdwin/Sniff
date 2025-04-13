import React from 'react'

const Component12 = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-10 relative overflow-hidden">
            {/* Title section */}
            <div className="text-center md:text-left md:ml-[103px] mb-10">
                <span className="text-[#3F3D56] text-2xl md:text-4xl font-semibold tracking-wide">Top Health </span>
                <span className="text-[#FE5F62] text-2xl md:text-4xl font-semibold tracking-wide">Packages</span>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block">

            </div>
            
            {/* Cards container */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 md:ml-[103px] overflow-x-auto">
                {/* Card 1 */}
                <div className="w-full max-w-[384px] pb-3 bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-5 overflow-hidden sm:w-[90%]">
                    <div className="self-stretch px-4 md:px-32 py-4 bg-[#FE5F62] flex justify-center items-center gap-2">
                        <div className="text-center text-[#FFFFFF] text-md md:text-xl font-semibold tracking-wide">I Care a Lot</div>
                    </div>
                    <div className="w-full px-4 flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch text-[#000000] text-base font-normal leading-normal tracking-tight">Comprehensive health check-up for proactive pet parents. Includes essential tests to ensure your furry friend stays happy & healthy!</div>
                        <div className="self-stretch text-[#FE5F62] text-base font-normal leading-normal tracking-tight hover:underline cursor-pointer">View More</div>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="w-full max-w-[384px] pb-3 bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-5 overflow-hidden sm:w-[90%]">
                    <div className="self-stretch px-4 md:px-32 py-4 bg-[#FE5F62] flex justify-center items-center gap-2">
                        <div className="text-center text-[#FFFFFF] text-md md:text-xl font-semibold tracking-wide">I am Panicking</div>
                    </div>
                    <div className="w-full px-4 flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch text-[#000000] text-base font-normal leading-normal tracking-tight">Emergency diagnostic package for sudden illness or alarming symptoms. Quick, vet-guided tests for immediate insights.</div>
                        <div className="self-stretch text-[#FE5F62] text-base font-normal leading-normal tracking-tight hover:underline cursor-pointer">View More</div>
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className="w-full max-w-[384px] pb-3 bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-5 overflow-hidden sm:w-[90%]">
                    <div className="self-stretch px-4 md:px-32 py-4 bg-[#FE5F62] flex justify-center items-center gap-2">
                        <div className="text-center text-[#FFFFFF] text-md md:text-xl font-semibold tracking-wide">Being Precautionary</div>
                    </div>
                    <div className="w-full px-4 flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch text-[#000000] text-base font-normal leading-normal tracking-tight">Preventive screening for early disease detection. A smart choice for pet owners who want to stay ahead of potential health issues!</div>
                        <div className="self-stretch text-[#FE5F62] text-base font-normal leading-normal tracking-tight hover:underline cursor-pointer">View More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component12
