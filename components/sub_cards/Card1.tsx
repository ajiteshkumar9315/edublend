"use client";  // Add this line at the top

import React, { useState } from "react";

interface Course {
  title: string;
  description: string;
}

interface CourseCategory {
  [key: string]: Course[];
}

const Card1: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("Data Science");

  // Course data with multiple Java Development sub-courses
  const courses: CourseCategory = {
    "Data Science": [
      {
        title: "Data Science",
        description:
          "Learn data manipulation, analysis, and visualization techniques to uncover insights from complex data.",
      },
    ],
    "Machine Learning": [
      {
        title: "Machine Learning",
        description:
          "Master algorithms and models to create intelligent systems capable of learning and making decisions.",
      },
    ],
    "Java Development": [
      {
        title: "Java Basics",
        description:
          "Get started with Java programming language, covering syntax, data types, and basic OOP concepts.",
      },
      {
        title: "Java Intermediate",
        description:
          "Deep dive into more advanced Java topics such as collections, exception handling, and file I/O.",
      },
      {
        title: "Java Advanced",
        description:
          "Explore advanced Java features like concurrency, generics, and JVM internals to build high-performance applications.",
      },
      {
        title: "Spring Framework",
        description:
          "Learn the fundamentals of the Spring framework to build scalable, secure, and robust Java applications.",
      },
    ],
  };

  // Handle course selection
  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Sidebar with course headings */}
      <div className="w-48 border-r-2 border-gray-300 p-4">
        {Object.keys(courses).map((courseName) => (
          <button
            key={courseName}
            onClick={() => handleCourseClick(courseName)}
            className="mb-4 px-3 py-2 text-left text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-300 rounded"
          >
            {courseName}
          </button>
        ))}
      </div>

      {/* Content area showing the selected course */}
      <div className="flex-1 p-4 flex h-full w-1/5 items-center justify-center">
        {/* Make sure to add flex-nowrap and overflow-x-auto */}
        <div className="flex ">
          {courses[selectedCourse].map((course) => (
            <div
              key={course.title}
              className="w-80 p-6 border border-gray-200 shadow-lg rounded-lg text-center"
            >
              <h2 className="mb-4 text-2xl font-bold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card1;
