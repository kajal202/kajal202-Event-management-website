import React, { useState, useEffect } from 'react';

const EventSlider = () => {
  const slides = [
    {
      image: 'sangeet1.jpg', 
      quote: '"Creating unforgettable experiences for every occasion!"',
      title: "SANGEET CEREMONY",
    },
    {
      image: 'corporatye.webp', 
      quote: '"Let us bring your vision to life!"',
      title: "CORPORATE EVENTS",
    },
    {
      image: 'Birthday.jpg', 
      quote: '"Transforming events into memories."',
      title:'BIRTHDAY PARTIES',
    },
    {
      image: 'wedding.jpg', 
      quote: '"Capture every moment of your life."',
      title:'WEDDING PLANNING',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Title Centered in the Middle of the Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center">
              <h2>{slide.title}</h2>
              <p className='text-sm text-gray-300'>{slide.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
