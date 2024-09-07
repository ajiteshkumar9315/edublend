"use client";

import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cardData } from '@/components/homePage/cards'; // Use named import
// If DataItem type is exported from cards.tsx
import type { DataItem } from '@/components/homePage/cards'; 

const CourseDetailPage = () => {
    const { id } = useParams() as { id: string };
    const courseId = parseInt(id);

    const searchParams = useSearchParams();
    const category = searchParams ? searchParams.get('category') : null;

    // Now cardData is recognized as an array
    const course = cardData.find((item: DataItem) => item.id === courseId);

    // If course is not found, return a 404
    if (!course) {
        notFound();
    }

    return (
        <div className="container mx-auto py-16">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-black">{course.title}</h1>
                    <span className="text-lg">Category: {category}</span>
                    <span className="text-lg">Duration: {course.duration}</span>
                </div>
                <div className="mb-8">
                    <Image src={course.icon} alt={course.title} width={400} height={300} />
                </div>
                <p className="text-lg">{course.description}</p>
                <div className="mt-6">
                    <strong>Ratings:</strong> {course.ratings} / 5
                </div>
                <div className="mt-2">
                    <strong>Popularity:</strong> {course.popularity}
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
