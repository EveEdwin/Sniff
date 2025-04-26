import React, { useState } from 'react'
import { FaPaw } from 'react-icons/fa';
import HealthModal from './heathModal';

const CardDetailsCard = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <div className="max-w-sm mx-auto bg-white rounded-[15px] shadow-md p-4 mb-6 border border-pink-200">
            {/* Icon and Title */}
            <div className="flex items-center mb-2">
                <div className="bg-pink-100 p-2 rounded-full mr-3">
                    {/* You can replace this emoji with an icon */}
                    <span className="text-[#FE5F62] text-xl"> <FaPaw className="text-[#FE5F62] text-base md:text-xl" /></span>
                </div>
                <h2 className="text-gray-800 font-semibold text-lg">General Health</h2>
            </div>

            {/* Parameters */}
            <p className="text-[#FE5F62] text-sm mb-2">Parameters 5</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#FEC8C8] text-gray-800 text-xs px-2 py-1 rounded-full">
                    Routine Check-up
                </span>
                <span className="bg-[#FEC8C8] text-gray-800 text-xs px-2 py-1 rounded-full">
                    No Visible Illness
                </span>
            </div>

            {/* Price */}
            <div className="text-center mb-4">
                <p className="text-2xl font-bold text-gray-800">₹1999/-</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
                <button onClick={openModal} className=" bg-[#FF8486] hover:bg-pink-400 text-gray-900 text-sm font-semibold p-2 rounded-[8px]">
                    Read More
                </button>
                <button className=" bg-[#AFFF84] hover:bg-green-300 text-gray-900 text-sm font-semibold p-2 rounded-[8px]">
                    Download App to Book
                </button>
            </div>
        </div>

        <HealthModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default CardDetailsCard