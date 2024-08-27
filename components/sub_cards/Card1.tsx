"use client"; // Add this line at the top

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import Divider from '@mui/material/Divider';

interface Course {
  title: string;
  description: string;
}

interface CourseCategory {
  [key: string]: Course[];
}

const Card1: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("Data Science");

  const courses: CourseCategory = {
    "Data Science": [
      { title: "Data Science 1", description: "Learn data manipulation, analysis, and visualization techniques to uncover insights from complex data." },
      { title: "Data Science 2", description: "Learn data manipulation, analysis, and visualization techniques to uncover insights from complex data." },
      // More courses...
    ],
    "Machine Learning": [
      { title: "Machine Learning 1", description: "Master algorithms and models to create intelligent systems capable of learning and making decisions." },
      { title: "Machine Learning 2", description: "Master algorithms and models to create intelligent systems capable of learning and making decisions." },
      // More courses...
    ],
    "Java Development": [
      { title: "Java Basics", description: "Get started with Java programming language, covering syntax, data types, and basic OOP concepts." },
      { title: "Java Intermediate", description: "Deep dive into more advanced Java topics such as collections, exception handling, and file I/O." },
      { title: "Java Advanced", description: "Explore advanced Java features like concurrency, generics, and JVM internals to build high-performance applications." },
      { title: "Spring Framework", description: "Learn the fundamentals of the Spring framework to build scalable, secure, and robust Java applications." },
    ],
  };

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="bg-white text-center">
      <br />
      <br />
      <div className="ml-8 bg-white mb-6">
        <span className="text-4xl font-black mt-2">Get Certified, Get Ahead with Our Programs</span>
        <br />
        <span>Learn from global experts and get certified by the world's leading universities</span>
      </div>

      <div className="flex h-screen items-center bg-white justify-center space-x-4">
        {/* Sidebar with course headings */}
        <div className="flex flex-col ml-8 border-2 shadow-md gap-4 bg-white w-72 rounded-xl my-8">
          <span className="self-center">Categories</span>
          <Divider orientation="vertical" />
          {Object.keys(courses).map((courseCategory) => (
            <Button
              key={courseCategory}
              onClick={() => handleCourseClick(courseCategory)}
              className={cn("mb-2 self-center w-4/5", {
                "bg-[#f1f7fd] text-blue-600": selectedCourse === courseCategory,
                "bg-gray-200 text-black hover:text-gray-300": selectedCourse !== courseCategory,
              })}
            >
              {courseCategory}
            </Button>
          ))}
        </div>

        {/* Courses displayed based on selected category */}
        <div className="flex-1 overflow-y-auto max-h-screen">
          <Reveal>
            <div className="flex flex-wrap justify-center border-2 shadow-md gap-6">
              {courses[selectedCourse]?.map((course, index) => (
                <Card
                  key={index}
                  className="relative flex flex-col max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg hover:cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-start mb-4">
                      <span
                        className={cn(
                          "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500",
                          { "bg-white": index === 0 }
                        )}
                      >
                        {/* {item?.icon} */}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-left">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 mb-14">
                    <p className="text-left">{course.description}</p>
                  </CardContent>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Button className="hover:text-gray-300 text-muted-foreground text-white">
                      Know More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Card1;
