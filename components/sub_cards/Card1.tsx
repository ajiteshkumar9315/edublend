"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct hook for navigation
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Divider from "@mui/material/Divider";
import Reveal from "../animation/reveal";
import { Course } from "@/types"; // Import Course interface

// Export courses for other components to use
export const courses: Record<string, Course[]> = {
  "Data Science": [
    {
      id: "data-science-1",
      title: "Data Science Bootcamp",
      description: "A comprehensive Data Science course.",
      institute: "XYZ Institute",
      legacy: "A decade of excellence",
      desc: "Learn Data Science from industry experts.",
      image: "/images/data-science.jpg",
      duration: "6 months",
      ratings: "4.8",
      benefits: "High job placement, industry-recognized certification",
      alumni: "John Doe, Jane Smith",
      feature: "Live projects, hands-on labs",
      keywords: "Python, R, Machine Learning, AI",
      tools: "TensorFlow, Jupyter, Pandas",
      projects: "Real-world data analysis projects",
      educator: "Dr. John Doe",
    },
    {
      id: "data-science-2",
      title: "Data Science 2",
      description:
        "Advance your knowledge with our expert-led courses in data science.",
      institute: "Tech University",
      legacy: "A program with a legacy of excellence",
      desc: "A comprehensive program designed to equip you with cutting-edge skills in data science.",
      image: "https://via.placeholder.com/150",
      duration: "1.5 Years",
      ratings: "4.8/5",
      benefits: "Get hands-on experience with real-world projects.",
      alumni: "Successful alumni in top positions worldwide.",
      feature: "Accredited by leading institutions.",
      keywords: "Big Data, Data Mining",
      tools: "Python, Spark, Hadoop",
      projects: "Industry-based projects with mentorship.",
      educator: "Dr. Jane Smith, MSc in Big Data",
    },
    // Add more courses as needed...
  ],
  "Machine Learning": [
    {
      id: "machine-learning-1",
      title: "Machine Learning 1",
      description:
        "Master algorithms and models to create intelligent systems capable of learning and making decisions.",
      institute: "AI Academy",
      legacy: "Cutting-edge curriculum",
      desc: "Master the fundamentals and advanced concepts of machine learning.",
      image: "https://via.placeholder.com/150",
      duration: "3 Years",
      ratings: "4.7/5",
      benefits: "Learn from industry pioneers.",
      alumni: "Work at leading AI companies.",
      feature: "Certificate upon completion.",
      keywords: "Machine Learning, Deep Learning",
      tools: "TensorFlow, PyTorch",
      projects: "Create AI-driven solutions.",
      educator: "Dr. Alex White, PhD in AI",
    },
    // Add more courses as needed...
  ],
  // Add other categories as needed...
};

const Card1: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("Data Science");
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter(); // Use the router hook for navigation

  // Make sure the component is mounted before interacting with the router
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to handle when a course card is clicked
  const handleCardClick = (course: Course) => {
    if (isMounted) {
      router.push(`/course/${course.id}`); // Push the course ID to the dynamic route
    }
  };

  // Toggle selected category and handle sidebar open/close
  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setExpandedCategory(expandedCategory === courseName ? null : courseName);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white text-center">
      {/* Header section */}
      <div className="ml-8 bg-white mb-6">
        <span className="text-4xl font-black mt-2">
          Get Certified, Get Ahead with Our Programs
        </span>
        <br />
        <span>
          Learn from global experts and get certified by the world's leading universities
        </span>
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row h-screen items-center bg-white justify-center space-x-4">
        {/* Sidebar toggle for mobile */}
        <div className="lg:hidden">
          <Button onClick={toggleSidebar} className="mb-4">
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </Button>
        </div>

        {/* Sidebar for categories */}
        <div
          className={cn(
            "flex flex-col ml-8 border-2 shadow-md gap-4 bg-white w-72 rounded-xl my-8 lg:static lg:visible lg:translate-x-0 lg:flex lg:w-1/4",
            {
              "fixed left-0 top-0 h-full translate-x-0 z-50 bg-white": isSidebarOpen,
              hidden: !isSidebarOpen,
            }
          )}
        >
          <span className="self-center">Categories</span>
          <Divider orientation="vertical" />
          {/* Render the course categories as buttons */}
          {Object.keys(courses).map((courseCategory) => (
            <div key={courseCategory} className="w-full">
              <Button
                onClick={() => handleCourseClick(courseCategory)}
                className={cn("mb-2 w-4/5 self-center", {
                  "bg-[#f1f7fd] text-blue-600": selectedCourse === courseCategory,
                  "bg-gray-200 text-black hover:text-gray-300":
                    selectedCourse !== courseCategory,
                })}
              >
                {courseCategory}
              </Button>
            </div>
          ))}
        </div>

        {/* Course cards section */}
        <div className="flex-1 overflow-y-auto max-h-screen w-full lg:w-3/4">
          <Reveal>
            <div className="flex flex-wrap justify-center border-2 shadow-md gap-6">
              {/* Render the course cards based on selected category */}
              {courses[selectedCourse]?.map((course, index) => (
                <Card
                  key={course.id} // Use course.id as key for better performance
                  onClick={() => handleCardClick(course)} // Handle card click
                  className="relative flex flex-col max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg hover:cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-start mb-4">
                      <span
                        className={cn(
                          "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500"
                        )}
                      >
                        {/* Icon placeholder */}
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
    </div>
  );
};

export default Card1;
