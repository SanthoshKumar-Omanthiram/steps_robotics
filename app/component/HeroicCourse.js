'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroicCourse() {
  const course = {
    heroictitle: 'Future-Ready Kids Start Here!',
    heroicimage: '/course-heroic.png', 
  };

  return (
    <div className="course-heroic p-6">
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
          <div className="w-full h-full">
            {course.heroicimage ? (
              <Image
                src={course.heroicimage}
                alt={course.heroictitle}
                width={600}
                height={484}
                className="course-heroic-image rounded-lg"
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
          <div className="text-left">
            <h2 className="course-heroic-title text-3xl font-semibold">
              {course.heroictitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

