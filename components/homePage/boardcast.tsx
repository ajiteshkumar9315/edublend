// components/Carousel.tsx
"use client";
import React, { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/images/slide1.jpeg", alt: "Photo 1" }, // Ensure you have these images in your public/images directory
  { src: "/images/slide2.jpeg", alt: "Photo 2" },
  { src: "/images/slide3.jpeg", alt: "Photo 3" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto max-h-[calc(107vh-200px)]">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-3/5 object-cover" // Adjusted height class to 'h-96'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
