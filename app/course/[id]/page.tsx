"use client";

import { useParams } from "next/navigation";
import { courses } from "@/components/sub_cards/Card1";
import { Course } from "@/types";

const CoursePage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string; // Explicitly cast the id as a string

  // Search for the course in all categories
  let selectedCourse: Course | undefined;

  Object.keys(courses).forEach((category) => {
    const foundCourse = courses[category].find((course) => course.id === id);
    if (foundCourse) {
      selectedCourse = foundCourse;
    }
  });

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{selectedCourse.title}</h1>
      <p>{selectedCourse.description}</p>
      <div className="mt-4">
        <strong>Institute:</strong> {selectedCourse.institute}
      </div>
      <div className="mt-4">
        <strong>Duration:</strong> {selectedCourse.duration}
      </div>
      <div className="mt-4">
        <strong>Educator:</strong> {selectedCourse.educator}
      </div>
      <div className="mt-4">
        <strong>Ratings:</strong> {selectedCourse.ratings}
      </div>
      <div className="mt-4">
        <strong>Legacy:</strong> {selectedCourse.legacy}
      </div>
      <div className="mt-4">
        <strong>Benefits:</strong> {selectedCourse.benefits}
      </div>
      <div className="mt-4">
        <strong>Alumni:</strong> {selectedCourse.alumni}
      </div>
      <div className="mt-4">
        <strong>Feature:</strong> {selectedCourse.feature}
      </div>
      <div className="mt-4">
        <strong>Tools:</strong> {selectedCourse.tools}
      </div>
      <div className="mt-4">
        <strong>Projects:</strong> {selectedCourse.projects}
      </div>
    </div>
  );
};

export default CoursePage;
