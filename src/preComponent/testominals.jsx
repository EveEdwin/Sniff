import React, { useState } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
      photo: "/assets/testi1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: "58",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
     photo: "/assets/testi2.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      age: "42",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
       photo: "/assets/testi3.jpg"
    },
    {
      id: 4,
      name: "Emily Wilson",
      age: "35",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
        photo: "/assets/testi4.jpg"
    },
    {
      id: 5,
      name: "Robert Garcia",
      age: "49",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
       photo: "/assets/testi5.jpg"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      age: "61",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
       photo: "/assets/testi6.jpg"
    }
   
    // Add more testimonials as needed  
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentSlide * slidesToShow,
    currentSlide * slidesToShow + slidesToShow
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif tracking-tight text-gray-900">
          What Our Clients Say?
        </h2>
        
        <div className="relative">
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mr-6 overflow-hidden flex-shrink-0">
                   
                  <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 font-sans">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.age} years old</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed font-light font-sans">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

         
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-200"
            aria-label="Previous testimonials"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-200"
            aria-label="Next testimonials"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>


          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonials ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
