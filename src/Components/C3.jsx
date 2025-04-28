import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { IoPawOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Component2 = () => {
  const services = [
    {
      title: 'Vet Consultation',
      desc: 'Get expert advice and personalized care from professional veterinarians, ensuring your pet’s well-being at every stage.',
      status: 'Explore →',
      route: '/services/vet-consultation'
    },
    {
      title: 'Wellness',
      desc: 'Convenient and reliable pet medication services with vet-approved prescriptions delivered right to your doorstep.',
      status: 'Explore →',
      route: '/services/wellness'
    },
    {
      title: 'Vaccination',
      desc: 'Keep your pet safe with essential vaccinations, protecting them from diseases and ensuring a long, healthy life.',
      status: 'Explore →',
      route: '/services/vaccination'
    },
    {
      title: 'Pet Registration',
      desc: 'Hassle-free registration to maintain your pet’s health records digitally for easy access anywhere, anytime.',
      status: 'Explore →',
      route: '/services/pet-registration'
    },
    {
      title: 'Diagnostics',
      desc: 'Advanced lab tests and screenings for accurate disease detection, early treatment, and better health management.',
      status: 'Explore →',
      route: '/services/diagnostics'
    },
    {
      title: 'Mating',
      desc: '(COMING SOON)',
      status: 'Explore →',
      route: '/services/mating'
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 px-4 md:px-8 bg-red-200/50 overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold  tracking-wider">
          <span className="text-[#3F3D56]">We Provide </span>
          <span className="text-[#FE5F62]">Best Services</span>
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center  gap-8 md:gap-6 lg:gap-12">
        {services.map((service, index) => (
          <div key={index} className="relative w-full max-w-[400px] mx-auto md:mx-0">
            <div className="absolute -top-7 left-7 w-14 h-14 bg-[#FFFFFF] rounded-full outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-red-200/50 rounded-full">
                <IoPawOutline className="w-10 h-10 text-[#FE5F62]" />
              </div>
            </div>
            <div className="w-full h-60 bg-[#FFFFFF] rounded-xl outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden p-6 pt-10">
              <Link to={service.route} className="text-[#FE5F62] text-2xl md:text-3xl font-medium  tracking-wide">{service.title}</Link>
              <p className="text-[#3F3D56] text-sm font-normal  leading-tight tracking-tight mt-4">{service.desc}</p>
              <div className="mt-4">
                <span className="text-[#FE5F62] text-base font-normal  tracking-tight">Explore</span>
                <div className="w-3.5 h-px bg-[#FE5F62] mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component2;
