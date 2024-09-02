// pages/courses/[id].tsx
import React from 'react';
import { useRouter, useParams } from 'next/navigation'; // Import useParams from next/navigation
import { courses } from '@/data/courses'; // Ensure the path to data.js is correct

const CourseDetail: React.FC = () => {
  const router = useRouter();
  const params = useParams(); // Use useParams to get the route parameters

  const id = params.id; // Extract the id from params

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.details}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default CourseDetail;
