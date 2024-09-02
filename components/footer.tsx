import React from "react";
import { Button } from "./ui/button";

const footerSections = [
  {
    heading: "Resources",
    links: [
      { name: "Academy" },
      { name: "Blog" },
      { name: "Guides" },
      { name: "Tutorials" },
      { name: "Support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About Us" },
      { name: "Careers" },
      { name: "Press" },
      { name: "Partners" },
      { name: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy" },
      { name: "Terms of Service" },
      { name: "Cookie Policy" },
      { name: "Accessibility" },
      { name: "Security" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat h-auto lg:h-[37rem] mt-32 relative"
      style={{ backgroundImage: "url('/images/Footer 17 Dark.svg')" }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/5 lg:w-3/5 bg-gradient-to-r from-pink-500 to-teal-400 p-4 md:p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xl md:text-2xl font-extrabold text-white text-center md:text-left">
          Start Your Journey to Career Excellence Here
        </span>
        <div className="flex flex-col md:flex-row gap-4">
          <Button>Get Started</Button>
          <Button variant={"secondary"}>Contact Us</Button>
        </div>
      </div>

      <div className="text-white pt-36 md:pt-24 px-6 md:px-12 lg:px-36">
        <div className="flex flex-col md:flex-row gap-8 md:gap-48">
          {footerSections.map((section, index) => (
            <div key={index}>
              <span className="text-lg md:text-xl font-extrabold mb-2 inline-block">
                {section.heading}
              </span>
              <ul className="text-sm font-light">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:font-bold cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-white opacity-50 my-8 md:my-16"></div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-3">
            <img
              className="w-6 md:w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/twitter.svg"
              alt="Twitter"
            />
            <img
              className="w-6 md:w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/linkedin.svg"
              alt="LinkedIn"
            />
            <img
              className="w-6 md:w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/facebook.svg"
              alt="Facebook"
            />
          </div>
          <div className="text-center text-xs md:text-sm">
            <p> © 2024 Made by Edublends Academy Private Limited</p>
          </div>
          <br />
          <img src="./images/icon2.webp" alt="" className="w-12 md:w-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
