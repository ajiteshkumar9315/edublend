"use client";
import Image from "next/image";
import React from "react";
import AnimateText from "../animation/animateText";
import Carousel from "../Carousel";
import ArcCarousel from "../arcCarousel";
import "@/components/homePage/heroSection";

const HeroSection = () => {
  return (
    <div className="w-full py-2 container mt-20">
      {/* Apply Tailwind's responsive flex utilities */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-8">
        {/* Adjust image size with Tailwind's responsive utilities */}
        <div className="w-40 md:w-72">
          <Image src="/images/rocket.svg" alt="rocket" width={300} height={100} layout="responsive" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-1">Bridging the Gap</h1>
          <h2 className="text-2xl md:text-4xl font-black mb-2">Between</h2>
          <AnimateText
            once={true}
            text="Education & Employment"
            el="h4"
            className="px-2 py-1 rounded text-2xl md:text-4xl font-black"
          />
        </div>
        {/* Adjust image size with Tailwind's responsive utilities */}
        <div className="w-40 md:w-72">
          <Image src="/images/trophy.png" alt="trophy" width={300} height={100} layout="responsive" />
        </div>
      </div>
      {/* <Carousel /> */}
      <div>
        {/* <ArcCarousel /> */}
      </div>
    </div>
  );
};

export default HeroSection;
