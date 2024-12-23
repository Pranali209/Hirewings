import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full h-64">
      <div
        className="sliderAnimation transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-none w-full h-64">
            <img src={src.src} alt={`Slide ${index}`} className="w-[300px] h-[200px] object-fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
