"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Workshop() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get("/api/programs");
        setPrograms(res.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <section className="w-full program-workshop py-14">
      <div className="container mx-auto padding-80 sm:px-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-9 items-start"
          >          
            <div className="w-full">
                <div className="flex items-center text-sm font-medium text-gray-700">
      <span className="border-hr-text hover:text-yellow-500 transition">Programs</span>
      <span className="mx-2 border-hr-text">›</span>
      <span className="text-yellow-500 border-hr-text !font-semibold">VEX GO Robotics Workshop Program</span>
    </div>
    <hr className="mt-3 border-t-2 border-hr-breadcrumb border-dashed border-yellow-400" />
                  <h2 className="program-main-title md:text-4xl mb-3">
                <span className="program-main-title !mt-[35px]">VEX GO Robotics </span>
                <span className="program-main-title stem-gold">Workshop Program</span>
              </h2>
              <p className="program-sub-title mb-6">
                At STEPS Robotics, we believe that learning by doing creates the
                brightest minds of tomorrow. Our hands-on robotics workshops are
                designed to spark curiosity, foster creativity, and build essential
                STEM skills. Using the VEX GO robotics kit, students will explore
                real-world applications of technology, engineering, and
                problem-solving through interactive projects.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/workshop_img.jpg"
                  alt="Workshop"
                  className="w-full rounded-2xl"
                  width={450}
                  height={450}
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <button className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-5.197-3.023A1 1 0 008 9.023v5.954a1 1 0 001.555.832l5.197-3.023a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFDF7] p-6 md:p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl text-center event-title mb-6 pb-3">
                Program Details
              </h3>
<hr className="border-b-2 border-hr border-yellow-400" />
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-yellow-500 w-5 h-5" />
                  <div>
                    <p className="event-subtitle font-semibold">Days</p>
                    <p className="event-subtext text-sm">{program.days}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-yellow-500 w-5 h-5" />
                  <div>
                    <p className="event-subtitle font-semibold">Duration</p>
                    <p className="event-subtext text-sm">{program.duration}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
             <Clock className="text-yellow-500 w-5 h-5" />
                  <div>
                <p className="event-subtitle text-gray-800">Time</p>
                <p className="event-subtext text-sm">{program.time}</p>
              </div>
              </div>
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="text-yellow-500 w-10 h-10 mt-1" />
                  <div>
                    <p className="event-subtitle text-gray-800">Venue</p>
                    <p className="event-subtext text-sm">{program.venue}</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-sm mb-3">
                <p className="font-semibold event-details">→ Materials</p>
                <p className="event-details-span text-sm">{program.materials}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-sm mb-3">
                <p className="font-semibold event-details">→ Mentors</p>
                <p className="event-details-span text-sm">{program.mentors}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-sm mb-6">
                <p className="font-semibold event-details">→ Batch Size</p>
                <p className="event-details-span text-sm">{program.batch_size}</p>
              </div>
              <div className="flex justify-center">
  <button className="w-[180px] event-enroll-btn flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-2 rounded-full font-semibold hover:shadow-lg transition">
    Enroll Now <ArrowRight className="w-5 h-5" />
  </button>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
