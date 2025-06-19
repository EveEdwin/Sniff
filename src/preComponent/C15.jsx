import React, { useEffect, useState } from 'react';
import cardbg from '../assets/card-bg.svg';
import { getHomes } from '../TestimonialApi'; // <-- Create this API helper

const Component11 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch testimonials
    const fetchTestimonials = async () => {
      try {
        const res = await  getHomes();
        const formatted = res.data.map(item => ({
          title: item.title,
          description: item.description,
        }));
        setTestimonials(formatted);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev + 1 >= testimonials.length - 2 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-10 md:py-20 bg-white px-4 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
        What <span className="text-red-500 font-bold">Our Client</span>{' '}
        <span className="text-gray-800">Say?</span>
      </h2>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(testimonials.length / 3) * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 box-border flex justify-center"
            >
              <div className="transform min-h-[250px] w-full border border-[#FE5F62] rounded-2xl shadow-md">
                <div className="bg-white p-5 md:p-7 rounded-2xl shadow-xl relative overflow-hidden w-full min-h-[250px]">
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat opacity-5"
                    style={{ backgroundImage: `url(${cardbg})` }}
                  />
                  <h3 className="text-center font-semibold text-lg md:text-xl text-gray-800 mt-3">
                    {t.title}
                  </h3>
                  <p className="text-center text-red-500 text-xl md:text-2xl my-1">
                    "
                  </p>
                  <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed px-4">
                    {t.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 md:mt-10 flex justify-center space-x-2">
        {testimonials.map((_, i) =>
          i <= testimonials.length - 3 ? (
            <div
              key={i}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                i === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default Component11;
