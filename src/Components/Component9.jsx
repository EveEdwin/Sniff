import React from "react";
import { FaPaw } from "react-icons/fa";

const Component9 = () => {
  return (
    <div className="relative  flex flex-col md:flex-row justify-evenly items-center p-8 bg-white">
      {/* Paw Icons in Blank Spaces */}
      <FaPaw className="absolute top-4 left-4 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute bottom-4 right-4 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute top-1/2 left-1/4 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute top-1/3 right-1/3 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute bottom-1/4 left-1/3 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute top-10 right-10 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute bottom-10 left-10 text-gray-300 text-6xl opacity-20" />
      <FaPaw className="absolute top-1/4 right-1/4 text-gray-300 text-6xl opacity-20" />

      {/* Images Aligned Side by Side with Glowing Effect */}
      <div className="flex gap-4 items-center justify-center ">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-pink-200 rounded-xl blur-lg opacity-30"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3f1b/2f89/183c51bb6f0fe5f206deb45d14a97db1?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qH8uexP23EaO08qxIA1I-tEY9Nf7CqFxkXL~O0-FTkKMnhLXj4nVnD1muHwSw~iU-eaGvhp8bdCjLd5lDwybk3VPhtO~dMK-HJJkFzGFWH8v~5tIfMHqRWUUESgsCQU18OC7ng78O57e5DKexnb6akhOilHQ8XDPNJ5Gu6vSBB8qvRHkyBSN1AbdLk~Qfpsg4EIJcb2foN7jVIEMj-3qC2Zw9EaUUnKIWvmv8R-TvKsddu9gAwdY1VQYREkFG7MFKPzkmXNYe9KEVI~5QJur9j9RrJO50LYf8fYjvYTB0yCKjvkEsZLTue3WjfOpGg3lJcKgVWOGAWVhGU2dkQJ~1g__"
            className="rounded-xl w-44 h-60 object-cover shadow-lg rotate-[-10deg] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-white to-black rounded-xl blur-lg opacity-30"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a04a/fcd0/af267ae5ee8022b1008c1d42b0ac6cd6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I4IVrrdCWi-lWFBExyqyG~Y8VNIEqb14-CKk6JgfLtS6lgDPURho6jHICfzR8HK74PcqzqAGM6HKEcUAhUptsWmXbQioTdZ6mmWlMMSdussE~1UAqNWSAB6gKfRjMOUPKV2wbbWDkC33Ntk9rFee7FK2778w5oWPXNnkDMo5CuAA59~BgF-~a~XpNC-KIThk-0K5oRZS5ZJiCT0Z9rDv81VWTMRwYF3TxuskixAp8-K7b-ZwC8THxPQWpqZ7eRRRSvXkoZw2m6yw2UhixeLXSQr3vUY2glrwyVNWrwX0qvEgzCYFm1pXNJQ63mh-~ztk6Nd2WK8Rfhdbn4qFA26QhA__"
            className="rounded-xl w-44 h-60 object-cover shadow-lg rotate-[10deg] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-xl text-left">
        <h2 className="mb-6">
          <span className="text-[#3F3D56] text-6xl font-semibold font-['Inter'] tracking-wider">Why </span>
          <span className="text-[#FE5F62] text-6xl font-semibold font-['Inter'] tracking-wider">Choose</span>
          <span className="text-[#3F3D56] text-6xl font-semibold font-['Inter'] tracking-wider"> Us?</span>
        </h2>

        <div className="space-y-4">
          <p className="text-black text-base font-['Inter'] leading-7 flex items-start">
            <span className="text-pink-500 font-bold mr-2">✓</span>
            <span>
              <strong className="font-bold">Expert Care</strong> – Our skilled veterinarians and support staff ensure your pet receives the best medical attention.
            </span>
          </p>
          <p className="text-black text-base font-['Inter'] leading-7 flex items-start">
            <span className="text-pink-500 font-bold mr-2">✓</span>
            <span>
              <strong className="font-bold">Modern Facilities</strong> – Equipped with state-of-the-art technology for accurate diagnoses and treatments.
            </span>
          </p>
          <p className="text-black text-base font-['Inter'] leading-7 flex items-start">
            <span className="text-pink-500 font-bold mr-2">✓</span>
            <span>
              <strong className="font-bold">Emergency Services</strong> – Available when you need us the most, providing immediate care in critical situations.
            </span>
          </p>
          <p className="text-black text-base font-['Inter'] leading-7 flex items-start">
            <span className="text-pink-500 font-bold mr-2">✓</span>
            <span>
              <strong className="font-bold">Compassionate Approach</strong> – We treat every pet like family, ensuring a caring and comfortable experience.
            </span>
          </p>
          <p className="text-black text-base font-['Inter'] leading-7 flex items-start">
            <span className="text-pink-500 font-bold mr-2">✓</span>
            <span>
              <strong className="font-bold">Convenient Booking</strong> – Easy online appointment scheduling for hassle-free visits.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component9;
