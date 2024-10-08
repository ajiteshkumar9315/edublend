
import { Phone, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Reveal from "../animation/reveal";
// _app.js or _app.tsx
import "@/components/homePage/aboutus.css";


const Aboutus = () => {
  return (
    <div className="w-full overflow-hidden overall-card bg-gradient-to-r  from-[#5E05FA] to-[#24045D]  ">
      <Reveal>
      <div className="container flex justify-between space-x-16">
        <div className="flex-shrink-0 responsive-image -ml-52">
          <Image
            src={"/images/aboutsus.png"}
            width={500}
            height={300}
            alt="instructor"
            className="object-cover h-96 "
            
          />
        </div>

        <div className="p-8 shadow-2xl space-y-4 responsive-margin-left responsive-width responsive-height rounded-2xl bg-white mt-8  flex-grow">
          <h2 className="text-sm font-semibold uppercase text-gray-600 mb-2 flex items-center gap-4">
            <Users size={20} color="black" />
            About us
          </h2>
          <h3 className="text-2xl font-black text-gray-900">
            Empowering Students for Successful Careers
          </h3>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Edublends is an Innovative Coach Platform designed to assist Students
            with Internships, Professional training Programs, Career guidance,
            and mentorship. Our Aim is to bridge the gap between Education and
            Employment, providing Students with the resources and support they
            need to Succeed in their Careers.
          </p>
          <div className="mt-2 flex items-center space-x-4">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
      </Reveal>
    </div>
  );
};

export default Aboutus;
