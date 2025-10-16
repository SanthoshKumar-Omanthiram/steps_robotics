"use client";
import React from "react";
import { Clock, Users, BookOpen, Star } from "lucide-react";

export default function MightInterested() {
  const courses = [
    {
      title: "VEX AIM Robotics",
      image: "/vex-aim.png",
      rating: 5.0,
      reviews: "2.5k reviews",
      age: "Age 3–5",
      grades: "Grades 1–5",
      duration: "24 Hr 40 Mins",
      lessons: "30 Lessons",
      students: "275 Students",
      hasOffer: true,
    },
    {
      title: "VEX GO Robotics",
      image: "/vex-iq.png",
      rating: 5.0,
      reviews: "1.5k reviews",
      age: "Age 4–5",
      grades: "Grades 6–9",
      duration: "2 Hr 40 Mins",
      lessons: "17 Lessons",
      students: "500 Students",
      hasOffer: false,
    },
    {
      title: "VEX IQ Robotics",
      image: "/vex-go.png",
      rating: 5.0,
      reviews: "2.3k reviews",
      age: "Age 6–8",
      grades: "Grade 10–12",
      duration: "2 Hr 40 Mins",
      lessons: "20 Lessons",
      students: "320 Students",
      hasOffer: false,
    },
  ];

  return (
    <section className="container mx-auto py-12 bg-[#fff]">
      <h2 className="course-details-black mb-3">
        You might be{" "}
        <span className="course-details-gold">interested in</span>
      </h2>
      <p className="text-gray-500 max-w-3xl mb-10 text-[15px] leading-relaxed">
        Our STEPS Robotics program offers a unique, hands-on offline learning experience
        that integrates Robotics, Coding, Electronics, and STEM concepts — designed to build
        real-world skills beyond traditional classes.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl transition duration-300 overflow-hidden"
          >
            <div className="relative rounded p-2 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] w-full h-52 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full rounded object-cover"
              />

              {/* Offer Badge */}
              {/* {course.hasOffer && (
                <div className="absolute -bottom-5 left-4 bg-yellow-400 text-black text-xs font-bold rounded-full px-4 py-2 shadow-md rotate-[-10deg] border-2 border-white">
                  SPECIAL OFFER <br /> <span className="text-[10px]">THIS WEEK ONLY 50% OFF</span>
                </div>
              )} */}

              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-[#8A2BE2] border-b-8 border-b-transparent ml-1"></div>
              </button>
            </div>

            <div className="py-3 px-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {course.title}
              </h3>

              <div className="flex items-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-800 text-sm">
                  {course.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  ({course.reviews})
                </span>
              </div>

              <div className="flex items-center flex-wrap gap-3 text-[13px] text-gray-700 mb-4">
                <span className="stem-brown py-1 font-medium">
                  {course.age}
                </span>
                |
                <span className="stem-brown py-1 font-medium">
                  {course.grades}
                </span>
                |
                <div className="flex items-center gap-1">
                  <span className="stem-brown">{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center text-[13px] text-gray-600">
                <div className="flex box-lesson items-center gap-2 mr-3">
                  <BookOpen className="w-4 h-4 text-[#D18C30]" />
                  <span>{course.lessons}</span>
                </div>
                <div className="flex box-lesson items-center gap-2">
                  <Users className="w-4 h-4 text-[#D18C30]" />
                  <span>{course.students}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
