import React from 'react';
import { FaPaw } from 'react-icons/fa';

function Component2() {
  const services = [
    {
      title: 'Vet Consultation',
      desc: 'Get expert advice and personalized care from professional veterinarians, ensuring your pet’s well-being at every stage.',
      status: 'Explore →'
    },
    {
      title: 'Pharmacy',
      desc: 'Convenient and reliable pet medication services with vet-approved prescriptions delivered right to your doorstep.',
      status: 'Explore →'
    },
    {
      title: 'Vaccination',
      desc: 'Keep your pet safe with essential vaccinations, protecting them from diseases and ensuring a long, healthy life.',
      status: 'Explore →'
    },
    {
      title: 'Pet Registration',
      desc: 'Hassle-free registration to maintain your pet’s health records digitally for easy access anywhere, anytime.',
      status: 'Explore →'
    },
    {
      title: 'Diagnostics',
      desc: 'Advanced lab tests and screenings for accurate disease detection, early treatment, and better health management.',
      status: 'Explore →'
    },
    {
      title: 'Mating',
      desc: '(COMING SOON)',
      status: 'Explore →'
    },
  ];

  return (
    <div className="bg-[#FFECEC] py-10 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#3F3D56] mb-8 sm:mb-10 md:mb-12 relative group">
        We Provide <span className="text-[#FE5F62]">Best Services</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] w-0 h-[3px] bg-[#FE5F62] transition-all duration-300 group-hover:w-full"></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border border-[#FE5F62] transition-all transform hover:scale-105 hover:shadow-[8px_8px_15px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <FaPaw className="text-[#FE5F62] text-lg sm:text-xl" />
              <h2 className="text-lg sm:text-xl font-semibold text-[#FE5F62] hover:underline">{service.title}</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{service.desc}</p>
            <span className="text-[#FE5F62] font-medium text-sm sm:text-base cursor-pointer">{service.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component2;
