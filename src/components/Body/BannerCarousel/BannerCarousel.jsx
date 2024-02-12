import React, { useState, useEffect } from 'react';
import Image1 from './../../../assets/Banners/Banner-2.webp';
import Image2 from './../../../assets/Banners/Banner-5.jpg';
import Image3 from './../../../assets/Banners/banner-1.webp';
import Image4 from "../../../assets/Banners/Banner-3.jpg";
import Image5 from "../../../assets/Banners/Banner-4.jpg"


const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [Image1, Image2, Image3, Image4, Image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 2000); // Slide change interval of 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-80 md:h-96">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover rounded ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
          } transition-opacity duration-500`}
        />
      ))}
    </div>
  );
};

export default BannerCarousel;