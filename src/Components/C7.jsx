import React from "react";
import { FaPaw } from "react-icons/fa";
//  import dog1 from "../assets/dog1.svgg";
import dogsvg from '../assets/dog1.svg'
import dogsvg1 from '../assets/dog2.svg'

const Component9 = ({ images = [], headingParts = [], features = [], pawPositions = [] }) => {
  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center p-8 bg-white">
      {pawPositions.map((pos, index) => (
        <FaPaw
          key={index}
          className={`absolute ${pos} text-gray-300 text-6xl opacity-20`}
        />
      ))}

      <div className="flex gap-4 items-center justify-center">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-pink-200 rounded-xl blur-lg opacity-30"></div>
            <img
              src={img}
              className={`rounded-xl w-44 h-60 object-cover shadow-lg ${index % 2 === 0 ? 'rotate-[-10deg]' : 'rotate-[10deg]'} transition-transform duration-300 hover:scale-105`}
              alt={`dog-${index}`}
            />
          </div>
        ))}
      </div>

      <div className="max-w-xl text-left">
        <h2 className="mb-6">
          {headingParts.map((part, index) => (
            <span key={index} className={`text-6xl font-semibold tracking-wider ${part.color}`}>
              {part.text}
            </span>
          ))}
        </h2>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <p key={index} className="text-black text-base leading-7 flex items-start">
              <span className="text-pink-500 font-bold mr-2">✓</span>
              <span>
                <strong className="font-bold">{feature.title}</strong> – {feature.description}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component9;