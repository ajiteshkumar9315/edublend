// components/CourseList.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter correctly
import { courses } from '@/data/courses'; // Ensure the path to data.js is correct

const CourseList: React.FC = () => {
    const router = useRouter(); // This useRouter is from next/navigation
  
    const handleCourseClick = (id: number) => {
      router.push(`/courses/${id}`); // Use router.push for navigation
    };
  
    return (
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <button onClick={() => handleCourseClick(course.id)}>
                {course.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CourseList;