// components/Gallery.js
import React from "react";
import { images } from "@/data/images";

const Gallery = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-3 mb-0">Our Instructor</h1>
        <p className="text-lg mt-2 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dicta facere voluptates est nulla ea eius quia, consequuntur, numquam, exercitationem non sapiente harum voluptas reprehenderit eveniet doloremque dolorum perferendis. Reprehenderit.
        </p>
      </div>
      <div
        className="gallery-container flex flex-wrap justify-center gap-4"
        id="gallery-container"
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.src}
            className="gallery-item w-40"
            data-sub-html={`<h4>${image.title}</h4><p>Location: ${image.location}</p>`}
          >
            <img
              src={image.thumb}
              alt={image.title}
              className="rounded shadow-md w-full h-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
