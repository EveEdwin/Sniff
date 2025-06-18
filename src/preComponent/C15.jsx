import React from 'react';
import cardbg from '../assets/card-bg.svg';

const testimonials = [
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
    },
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
        rotate: '',
    },
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
        backgroundImage: "cardbg",
    },
];

const Component11 = () => {
    return (
        <section className="py-10 md:py-20 bg-white px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
                What <span className="text-red-500 font-bold">Our Client</span> <span className="text-gray-800">Say?</span>
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8">
  {testimonials.map((t, index) => (
    <div
      key={index}
      className={`transform ${t.rotate} min-h-[250px] flex justify-center items-center border border-[#FE5F62] rounded-2xl md:rounded-3xl shadow-md p-0`}
    >
      <div className={`bg-white p-5 md:p-7 transform ${t.antirotate} rounded-2xl md:rounded-3xl z-10 shadow-xl relative overflow-hidden transition duration-300 w-full`}>
        <div className="absolute inset-0 flex justify-center items-center w-full h-full bg-[url('/assets/shape.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
        <div className="flex justify-center -mt-5">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-md z-20"
          />
        </div>
        <h3 className="text-center font-semibold text-lg md:text-xl text-gray-800 mt-3">{t.name}</h3>
        <p className="text-center text-red-500 text-xl md:text-2xl my-1 md:my-2">"</p>
        <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">{t.text}</p>
      </div>
    </div>
  ))}
</div>


            {/* Dots indicator - made responsive */}
            <div className="mt-6 md:mt-10 flex justify-center space-x-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full" />
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full" />
            </div>
        </section>
    );
};

export default Component11;


