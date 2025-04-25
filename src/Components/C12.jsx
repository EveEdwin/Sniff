import React from "react";
import circlepaw from "../assets/circlepaw.svg";

function Component19() {
  const dogAges = ["Puppy", "Adult", "Senior"];
  const catAges = ["Puppy", "Adult", "Senior"];

  return (
    <div className="bg-red-100 py-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold relative group">
        Age wise <span className="text-red-500">tests</span>
        <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
      </h2>

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start gap-12 px-4 sm:px-6">
        {/* DOGS Section */}
        <div className="flex flex-col items-center gap-6 w-full max-w-xs sm:max-w-sm">
          <h3 className="text-2xl font-bold text-gray-800 relative group">
            DOGS
            <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dogAges.map((age, idx) => (
              <div
                key={idx}
                className={`bg-white border border-red-300 rounded-lg px-6 py-4 w-full sm:w-48 flex flex-col items-center shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  idx === 2 ? "sm:col-span-2 mx-auto" : ""
                }`}
              >
                <img src={circlepaw} alt="paw icon" className="w-8 h-8 mb-2" />
                <p className="text-gray-700 font-medium">{age}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-75 bg-gray-400"></div>

        {/* CATS Section */}
        <div className="flex flex-col items-center gap-6 w-full max-w-xs sm:max-w-sm">
          <h3 className="text-2xl font-bold text-gray-800 relative group">
            CATS
            <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {catAges.map((age, idx) => (
              <div
                key={idx}
                className={`bg-white border border-red-300 rounded-lg px-6 py-4 w-full sm:w-48 flex flex-col items-center shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  idx === 2 ? "sm:col-span-2 mx-auto" : ""
                }`}
              >
                <img src={circlepaw} alt="paw icon" className="w-8 h-8 mb-2" />
                <p className="text-gray-700 font-medium">{age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component19;
