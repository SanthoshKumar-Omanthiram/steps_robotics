"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function StemList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("/api/courses");
      const data = Array.isArray(res.data) ? res.data : [];
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  const borderColors = [
    "border-purple-300",
    "border-purple-400",
    "border-teal-400",
    "border-teal-400"
  ];

  const truncateDescription = (text = "", limit = 170) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="stem-education-main mb-8 mt-5 text-left">
          <p className="stem-education-title text-3xl font-bold">
            We Are <span className="stem-education-title stem-gold">Much Experience</span> in
            Learning <span className="stem-education-title stem-gold">STEM Education</span>
          </p>
          <p className="course-model-title mt-3">
            The course gives students an excellent platform to create and
            program their stories, interactive games, music, and animation.
            Students can showcase their projects in their offline community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border-4 border-dashed ${borderColors[idx % borderColors.length]} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="relative flex w-full md:w-1/2 h-60 md:h-auto">
                <div className="bg-black w-16 md:w-[80px] flex flex-col items-center justify-between py-6 relative z-10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.4445 0.847168H5.78013C3.12504 0.847168 0.972656 2.99819 0.972656 5.65162V24.3042C0.972656 26.9576 3.12504 29.1086 5.78013 29.1086H24.4445C27.0996 29.1086 29.2519 26.9576 29.2519 24.3042V5.65162C29.2519 2.99819 27.0996 0.847168 24.4445 0.847168Z"
                        fill="#EFBC08"
                      />
                      <path
                        d="M17.3746 14.1519H29.4042C31.1227 14.1519 32.5149 15.5432 32.5149 17.2606V29.2826C32.5149 31 31.1227 32.3914 29.4042 32.3914H17.3964C15.6779 32.3914 14.2856 31 14.2856 29.2826V17.2606C14.2856 15.5432 15.6779 14.1519 17.3964 14.1519H17.3746Z"
                        fill="black"
                      />
                      <path
                        d="M19.4193 16.5867H29.8174C31.2966 16.5867 32.5148 17.7823 32.5148 19.2824V29.6739C32.5148 31.1522 31.3184 32.3479 29.8391 32.3479H19.4193C17.9401 32.3479 16.7437 31.1522 16.7437 29.6739V19.2606C16.7437 17.7824 17.9401 16.5867 19.4193 16.5867Z"
                        fill="#FBD905"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                        <Image
                    src={
                      course.image ||
                      "/images/course-placeholder.jpg"
                    }
                    width={350}
                    height={350}
                    alt={course.title}
                    className="w-[25px] h-auto"
                  />
                  </div>
                </div>

                <div className="relative w-full h-full">
                  <Image
                    src={
                      course.heroicimage ||
                      "/images/course-placeholder.jpg"
                    }
                    width={350}
                    height={350}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"
                  />
                </div>
              </div>

              <div className="py-4 px-4 md:py-6 md:px-6 flex flex-col justify-between w-full md:w-1/2">
                <div>
<h3 className="stem-list-title mb-1">
  {(() => {
    const title = course.title || "VEX 123 Robotics Course Advanced";
    const words = title.split(" ");
    const firstTwo = words.slice(0, 2).join(" ");
    const remaining = words.slice(2).join(" ");
    return (
      <>
        {firstTwo}{" "}
        {remaining && <span className="text-yellow-400">{remaining}</span>}
      </>
    );
  })()}
</h3>
                  <p className="stem-list-subtitle mb-3">
                    {course.subtitle || "For grade 1 and 2"}
                  </p>
                  <p
                    className="stem-list-description mb-3 cursor-pointer"
                    title={course.description || "No description available"}
                  >
                    {truncateDescription(
                      course.description ||
                        "Give your child a head start in technology! With the VEX 123 kit, kids learn coding, problem-solving, and creativity through fun, hands-on play.",
                      170
                    )}
                  </p>
                  <p className="stem-list-hint">
                    {course.features ||
                      "Touch coding, coder cards, and VEXcode platform"}
                  </p>
                </div>

                <div className="mt-4 text-center md:text-left">
                  <Link
                    href={`/courses/${course.slug || course.id || "#"}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF8533] to-[#FFB84D] hover:from-[#FFB84D] hover:to-[#FF8533] text-white font-bold pl-4 pr-1 py-1 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    View More
                    <div className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
