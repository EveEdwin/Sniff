// StatsSection.jsx
import React from 'react';

const stats = [
  {
    icon: '❤️', // You can replace these with actual SVG icons
    value: '5+',
    label: 'Years Of Experience',
  },
  {
    icon: '🦴',
    value: '60+',
    label: 'Care Takers',
  },
  {
    icon: '👍',
    value: '500+',
    label: 'Positive Reviews',
  },
  {
    icon: '🐾',
    value: '210+',
    label: 'Happy Pets',
  },
];

const Component13 = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FFDADA] py-8 sm:py-12 md:py-16 relative px-4">
      {/* Decorative background shape if needed */}
      {/* You can also use an SVG as background if you have one */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex flex-col items-center gap-1 sm:gap-2 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-2xl sm:text-3xl bg-pink-100 p-2 sm:p-3 rounded-full">{item.icon}</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-pink-500 mt-2">{item.value}</h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Component13;
