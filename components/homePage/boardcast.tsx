"use client";
import React, { useState, useEffect } from "react";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/images/slide0.2.jpg", alt: "Photo 1" },
  { src: "/images/slide1.2.jpg", alt: "Photo 2" },
  { src: "/images/slide2.2.jpg", alt: "Photo 3" },
  { src: "/images/slide3.2.jpg", alt: "Photo 4" },
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto max-h-[calc(107vh-200px)]">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 caro_img">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover" // Ensure image covers the full area
                style={{
                  height: "34rem", // Maintain height consistency
                  maxWidth: "100vw", // Ensures full width on smaller screens
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none caro_nav lg:left-4 lg:p-3"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none caro_nav lg:right-4 lg:p-3"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 caro_nav2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full md:w-3 md:h-3 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
