"use client";
import React, { useRef, useState } from "react";
import { Play, ArrowRight } from "lucide-react";

export default function WorkShopRobotics() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/workshop.mp4"
        muted
        loop
        playsInline
      ></video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center">
        <div className="relative inline-block container mx-auto">
          {!isPlaying && (
            <div
              onClick={handlePlayVideo}
              className="absolute -top-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
            >
              <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
          )}

          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 sm:p-10 text-white">
            <h2 className="font-semibold leading-snug workshop-sample-title sm:text-3xl ">
              Our <span className="text-[#FFB800]">VEX GO</span> Robotics Workshop is a fun,
              <br className="hidden md:block" /> supportive way to learn STEM skills.
            </h2>

            <p className="mt-4 text-white/90 text-base workshop-sample-description sm:text-lg">
              Give your child the tools to explore, build, and innovate
            </p>

            <div className="mt-6 flex justify-center">
              <button className="bg-[#FFB800] workshop-sample-btn hover:bg-[#ffca2c] text-white font-semibold text-lg px-4 py-1 rounded-full flex items-center gap-2 shadow-md transition-all">
                Enroll Now!
                <div className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
