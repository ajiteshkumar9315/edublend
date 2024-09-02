"use client";
import React, { useState, useEffect } from "react";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/images/slide1.jpeg", alt: "Photo 1" },
  { src: "/images/slide2.jpeg", alt: "Photo 2" },
  { src: "/images/slide3.png", alt: "Photo 3" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to move to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect hook for automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next image automatically
    }, 5000); // Change image every 3 seconds

    // Clear the interval when the component is unmounted
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
            height: "34rem",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 caro_img">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover" // Changed to h-auto for responsive height
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none caro_nav lg:left-4 lg:p-3" // Adjusted padding and position for different screen sizes
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none caro_nav lg:right-4 lg:p-3" // Adjusted padding and position for different screen sizes
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
