"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation"; // Correct hooks for Next.js 13+

interface Course {
  title: string;
  description: string;
}

const coursesData: { [key: string]: Course } = {
  "Data Science 1": {
    title: "Data Science 1",
    description:
      "Learn data manipulation, analysis, and visualization techniques to uncover insights from complex data.",
  },
  "Data Science 2": {
    title: "Data Science 2",
    description:
      "Learn data manipulation, analysis, and visualization techniques to uncover insights from complex data.",
  },
  "Machine Learning 1": {
    title: "Machine Learning 1",
    description:
      "Master algorithms and models to create intelligent systems capable of learning and making decisions.",
  },
  "Machine Learning 2": {
    title: "Machine Learning 2",
    description:
      "Master algorithms and models to create intelligent systems capable of learning and making decisions.",
  },
  "Java Basics": {
    title: "Java Basics",
    description:
      "Get started with Java programming language, covering syntax, data types, and basic OOP concepts.",
  },
  "Java Intermediate": {
    title: "Java Intermediate",
    description:
      "Deep dive into more advanced Java topics such as collections, exception handling, and file I/O.",
  },
  "Java Advanced": {
    title: "Java Advanced",
    description:
      "Explore advanced Java features like concurrency, generics, and JVM internals to build high-performance applications.",
  },
  "Spring Framework": {
    title: "Spring Framework",
    description:
      "Learn the fundamentals of the Spring framework to build scalable, secure, and robust Java applications.",
  },
};

const CourseDetail: React.FC = () => {
  const router = useRouter();
  const params = useParams(); // Use `useParams` to get dynamic route parameters

  const { title } = params; // Destructure the `title` parameter from the route

  if (!title || typeof title !== "string") {
    return <div>Course not found.</div>; // Handle case when `title` is missing
  }

  const course = coursesData[title as string];

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold">{course.title}</h1>
      <p className="mt-4">{course.description}</p>
      {/* Add more detailed content as needed */}
    </div>
  );
};

export default CourseDetail;
