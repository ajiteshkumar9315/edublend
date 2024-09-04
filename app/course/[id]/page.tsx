"use client";
import React from 'react';

export default function Page() {
  const item = {
    institute: "Tech University",
    title: "Master of Data Science",
    legacy: "A program with a legacy of excellence",
    desc: "A comprehensive program designed to equip you with cutting-edge skills in data science.",
    image: "https://via.placeholder.com/150",
    duration: "2 Years",
    ratings: "4.5/5",
    benefits: "Learn from the best in the industry and gain hands-on experience.",
    alumni: "Alumni working at top tech companies.",
    feature: "Industry-recognized certification upon completion.",
    keywords: "Data Science, AI, Machine Learning",
    tools: "Python, R, TensorFlow",
    projects: "Capstone project in collaboration with industry partners.",
    educator: "Dr. John Doe, PhD in Data Science",
  };

  return (
    <div>
      <div> Background Image
        <div className='flex'>
          <div>{item.institute}</div>
          <div>{item.title}</div>
          <div>{item.legacy}</div>
          <div>{item.desc}</div>
        </div>
        <div>
          <img src={item.image} alt="Course Image" />
        </div>
      </div>

      <div>
        <div>{item.duration}</div>
        <div>{item.ratings}</div>
      </div>

      <div className='flex'>
        <div>Advantages</div>
        <div>Form</div>
      </div>

      <div>
        <div>{item.benefits}</div>
        <div>{item.alumni}</div>
      </div>

      <div>
        <div>{item.feature}</div>
      </div>

      <div>
        <div>{item.keywords}</div>
      </div>

      <div>
        <div>{item.tools}</div>
      </div>

      <div>
        <div>{item.projects}</div>
      </div>

      <div>Career Support</div>

      <div>
        <div>{item.educator}</div>
      </div>

      <div>Admission Process</div>
    </div>
  );
}
