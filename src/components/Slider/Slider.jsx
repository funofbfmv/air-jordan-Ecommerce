import React, { useState } from 'react';
import img1 from "../../assets/imges/3297f43d49ab7cafcc3f6eb11b4104d7e9d4b4b3-1100x735.jpg"

const Slider = () => {
  const images = [
    (img1),

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-screen">
      <div className="flex items-center justify-center">
        <button
          className="mr-2 px-2 py-1 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
          onClick={handlePrev}
        >
          Prev
        </button>
        <div className="w-1/2 max-w-screen-lg">
          <img
            src={images[currentIndex]}
            alt="Slider Image"
            className="w-full h-auto object-contain"
          />
        </div>
        <button
          className="ml-2 px-2 py-1 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;