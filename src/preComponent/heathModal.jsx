import React from 'react';

const HealthModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-11/12 max-w-lg rounded-[15px] border border-pink-300 p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="border-b border-pink-300 pb-2 mb-4 flex gap-8 text-sm font-semibold text-gray-500">
                    <button className="text-pink-500 border-b-2 border-pink-400 pb-1">Included Tests</button>
                    <button>Instructions</button>
                    <button>Why Trust Us?</button>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">Included Tests</h2>
                <p className="text-gray-500 text-sm mb-6">Package includes the following parameters:</p>

                {/* Example Test List */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                        <span className="font-medium text-gray-700">Complete Blood Count (CBC)</span>
                        <span className="text-gray-600">&#9662;</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                        <span className="font-medium text-gray-700">Complete Blood Count (CBC)</span>
                        <span className="text-gray-600">&#9662;</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                        <span className="font-medium text-gray-700">Complete Blood Count (CBC)</span>
                        <span className="text-gray-600">&#9662;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthModal;
