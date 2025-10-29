"use client";
// app/page.js

import Image from 'next/image';
import HeroSlider from './component/HeroSlider';
import ProjectCard from "./component/ProjectCard";
import Robot from "@/public/robot.png"
import TestimonialsSection from './component/TestimonialsSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhyChooseSection from './component/WhyChooseSection';
import { ArrowRight } from 'lucide-react';
import CodingAdventures from './component/CodingAdventures';
import { fetchExploreCourses } from "@/app/utils/fetchData";



// const projects = [
//   { image: "/Swetha.png", video: "/about/kid-1.mp4", name: "Aditi" },
//   { image: "/Sathish.png", video: "/about/kid-2.mp4", name: "Shankar" },
//   { image: "/Sandiya.png", video: "/about/kid-3.mp4", name: "Divya" },
//   { image: "/Swetha.png", video: "/about/kid-4.mp4", name: "Aditi Shakar" },
//   { image: "/Sathish.png", video: "/about/kid-5.mp4", name: "Mukesh Raj" },
//   { image: "/Sandiya.png", video: "/about/kid-1.mp4", name: "Vidhya Sree" },
// ];

const leftOfferings = [
  {
    title: "STEM Education Programs",
    icon: "/icons/stem.png",
    description: "Structured curriculum designed for progressive learning from basics to advanced.",
  },
  {
    title: "School/College Workshops",
    icon: "/icons/school.png",
    description: "One-day to multi-day hands-on events hosted at your campus.",
  },
  {
    title: "Robotics Lab Setup",
    icon: "/icons/lab.png",
    description: "Complete design, setup, and training for robotics labs in institutions.",
  }
];

const rightOfferings = [
  {
    title: "Robotics\nCompetitions",
    icon: "/icons/robotics.png",
    description: "Test skills in real-world scenarios.\nJoin national-level competitions with training, support.",
  },
  {
    title: "Competition\nCoaching",
    icon: "/icons/competition.png",
    description: "Customized mentoring for WRO,\nFIRST, and national STEM events.",
  },
  {
    title: "CSR & Corporate\nSTEM Programs",
    icon: "/icons/CSR.png",
    description: "Partner with us to bring STEM\nlearning to underserved communities.",
  }
];

const features = [
  {
    icon: "/icons/1.png",
    title: "Holistic 360° Skill",
    subtitle: "Development",
  },
  {
    icon: "/icons/2.png",
    title: "48+ Hours of",
    subtitle: "Structured Learning",
  },
  {
    icon: "/icons/3.png",
    title: "Progressive",
    subtitle: "Learning Path",
  },
  {
    icon: "/icons/4.png",
    title: "Customized &",
    subtitle: "Guided Training",
  },
  {
    icon: "/icons/5.png",
    title: "Experienced",
    subtitle: "Industry Mentors",
  },
  {
    icon: "/icons/6.png",
    title: "Flexible Learning",
    subtitle: "Modes",
  },
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [projects, setProjects] = useState([]);
  // Fetch data from your API (See What kids built with STEPS Robotics)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/home/steps_robotics");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("❌ Error fetching steps robotics:", error);
      }
    }
    fetchData();
  }, []);


  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await fetchExploreCourses();
        setCourses(data);
      } catch (err) {
        console.error("❌ Failed to load explore courses:", err);
      }
    }
    loadCourses();
  }, []);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Projects Section */}
      <section className="py-6 px-4 mt-20 sm:px-8 lg:px-30">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-center sm:text-left text-font-orbitron">
            See what kids built with{" "}
            <span className="text-yellow-500 text-font-orbitron">STEPS Robotics!</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10 leading-relaxed text-center sm:text-left text-font-poppins">
            With Steps Robotics, your child will build products in the real world to solve real world problems and become skilled in technologies
            that matter for the future. Best part — this happens while your child is playing!
          </p>



          <div className="relative max-w-7xl mx-auto ">
            {/* Swiper Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="cursor-grab"
            >
              {projects.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProjectCard
                    image={item.image}
                    name={item.title}
                    onClick={() => setActiveVideo(item.video)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Fullscreen Video Modal */}
            {activeVideo && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Semi-transparent overlay */}
                <div
                  className="absolute inset-0 bg-black opacity-70"
                  onClick={() => setActiveVideo(null)} // click outside to close
                ></div>

                {/* Video container */}
                <div className="relative z-10 w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                  <video
                    src={activeVideo}
                    controls
                    autoPlay
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-3 right-3 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>


      </section>

      {/**Robot section */}
      <section className="py-6 px-4 mt-10 sm:px-8 lg:px-30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-center sm:text-left text-font-orbitron">
              What We Offer <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span> for Your Child?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10 leading-relaxed text-center sm:text-left text-font-poppins">
              STEPS Robotics goes beyond classrooms to bring full-spectrum robotics and STEM experiences to students, teachers, and institutions.
            </p>
          </div>

          {/* Main Content - 3 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 w-auto gap-8 items-center">

            {/* Left Column - 3 Offerings */}
            <div className="space-y-4 lg:ml-auto">
              {leftOfferings.map((offering, index) => (
                <div key={index}
                  className="
                        flex flex-col
                        items-start
                        w-full          /* full width on mobile */
                        sm:max-w-[250px] /* small screens */
                        md:max-w-[300px] /* medium screens */
                        lg:max-w-[330px] /* large screens */
                      "
                >

                  {/* White box with icon and heading */}
                  <div className="bg-white rounded-[3rem] px-6 py-4 shadow-md flex flex-row items-center gap-3 mb-2 w-full">
                    <h3 className="text-base steps_robotics_child_h3 md:text-lg text-font-poppins break-words text-start flex-1 px-4">
                      {offering.title}
                    </h3>
                    {/* Icon on LEFT */}
                    <div className="flex-shrink-0">
                      <Image
                        src={offering.icon}
                        alt={offering.title}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                    {/* Heading on RIGHT */}

                  </div>
                  {/* Description text outside */}
                  <p className="text-gray-600 text-sm leading-relaxed text-left w-full px-8 whitespace-pre-line">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column - Robot Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-100 h-100 md:w-110 md:h-110 ">
                  <Image
                    src={Robot}
                    alt="STEPS Robotics Robot"
                    width={1000}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - 3 Offerings */}
            <div className="space-y-4">
              {rightOfferings.map((offering, index) => (
                <div key={index}
                  className="
                        flex flex-col
                        items-start
                        w-full          /* full width on mobile */
                        sm:max-w-[250px] /* small screens */
                        md:max-w-[300px] /* medium screens */
                        lg:max-w-[330px] /* large screens */
                      "
                >
                  {/* White box with icon and heading */}
                  <div className="bg-white rounded-[3rem] px-6 py-4 shadow-md flex flex-row items-center gap-3 mb-2 w-full">
                    {/* Icon on LEFT */}
                    <div className="flex-shrink-0">
                      <Image
                        src={offering.icon}
                        alt={offering.title}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                    {/* Heading on RIGHT */}
                    <h3 className="text-base steps_robotics_child_h3 md:text-lg text-font-poppins font-bold break-words text-end flex-1 px-4">
                      {offering.title}
                    </h3>
                  </div>
                  {/* Description text outside */}
                  <p className="text-gray-600 text-sm leading-relaxed text-right w-full px-9 whitespace-pre-line">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/**Explore Learning */}
      <section className='explore_learning px-4 mt-5 mb-20 sm:px-8 lg:px-30' style={{ backgroundImage: "url('/Explore_screen_bg.jpg')" }}>
        <div className="max-w-7xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 explore_learning_robotics leading-snug text-center sm:text-left text-font-orbitron">
            Explore Learning with <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10 leading-relaxed text-center sm:text-left text-font-poppins pr-40">
            From structured courses to dynamic programs, STEPS Robotics offers multiple pathways for students to develop essential STEM and coding skills.
            Our approach blends theory with hands-on practice, preparing learners to thrive in the technology-driven word.
          </p>


          <div className="relative exploring_web flex flex-col md:flex-row justify-center items-center gap-8 p-2 border-yellow-400 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="relative border-yellow-400 h-80 flex flex-col w-full md:w-1/2 border-2 border-dotted rounded-2xl p-8 overflow-visible"
                >
                  {/* Blurred background layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-left opacity-40 rounded-2xl z-0"
                    style={{ backgroundImage: "url('/explore_course_bg.png')" }}
                  ></div>

                  {/* Wrapper for floating image + text */}
                  <div className="flex flex-col md:flex-row relative">
                    {/* Left side image */}
                    <div className="flex-shrink-0 explore_image_responsive relative border-2 m-2 p-2 border-white shadow top-[-70px] rounded_image">
                      <Image
                        src={course.image || "/placeholder.png"}
                        alt={course.title}
                        width={200}
                        height={250}
                        className="object-cover rounded shadow h-65 w-60 block"
                      />
                    </div>

                    {/* Right side text */}
                    <div className="flex-1 flex flex-col mt-[-40px] explore_right_section pl-4 justify-center">
                      <h1 className="text-xl font-bold mb-1">{course.title}</h1>
                      <p className="text-gray-600 mb-2 leading-relaxed">
                        {course.description}
                      </p>

                      <ul className="steps_list_items mb-4">
                        {course.list_items?.map((item, i) => (
                          <li key={i} className="flex mb-2 items-center gap-2">
                            <ArrowRight className="w-5 h-5 text-orange-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Button below both */}
                  <div className="absolute top-70 explore_learning_button right-5 w-full flex justify-center">
                    <button
                      onClick={() =>
                        course.button_link &&
                        window.open(course.button_link, "_blank")
                      }
                      className="absolute home_banner_button w-50 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xl py-2 px-3 rounded-full flex items-center justify-center gap-3 hover:shadow-lg transition-shadow"
                    >
                      {course.button_text || "Explore More"}
                      <div className="bg-white rounded-full p-2">
                        <ArrowRight className="w-6 h-6 text-orange-500" />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>





        </div>


      </section>




      {/**About STEPS Robotics */}
      <CodingAdventures />

      {/**Why Choose STEPS Robotics for your child */}
      <WhyChooseSection />

      {/**STEPS Robotics Talsk */}
      <TestimonialsSection />

      {/**Study Process Gallery Start */}
      <section
        className="relative hidden md:block bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/studyProgress.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px)`
            }}>
          </div>
        </div>

        {/* YouTube Icon */}
        <motion.div
          className="absolute top-8 right-8 md:top-12 md:right-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-28 h-28 md:w-30 md:h-30 flex items-center justify-center transform rotate-6 hover:rotate-3 transition-transform">
            <Image
              src="/youtube.gif"
              alt="Student building robot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="mb-12 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4 text-font-orbitron">
              Study Process Gallery
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed text-font-poppins">
              Instructor led training digital learning cbt completion criteria learning management system cognitive load byod self-directed learning knowledge
            </p>
          </motion.div>

          {/* Manual Masonry Gallery - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4">
              {/* Image 1 */}
              <motion.div
                className="relative h-50 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gallery_img1.jpg"
                  alt="Student building robot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative h-96 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gif/gif-1-2.gif"
                  alt="Teacher with students"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-4 ml-[-40px]">
              {/* Image 1 */}
              <motion.div
                className="relative h-95 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gallery_img2.png"
                  alt="Students working on project"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative h-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gif/gif-1.gif"
                  alt="Classroom activity"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-4 ">
              {/* Image 1 */}
              <motion.div
                className="relative h-90 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gif/gif-3-1.gif"
                  alt="Science experiment"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative h-55 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gif/gif-3-2.gif"
                  alt="Student presentation"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>
            </div>

            {/* COLUMN 4 */}
            <div className="flex flex-col gap-4 ml-[-40px]">
              {/* Image 1 */}
              <motion.div
                className="relative h-148 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gallery_img3.png"
                  alt="Robotics project"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>
            </div>

            {/* COLUMN 5 */}
            <div className="flex flex-col gap-4 ml-[-70px]">
              {/* Image 1 */}
              <motion.div
                className="relative h-64 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gif/gif-4-1.gif"
                  alt="Group learning"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative h-80 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Study_Gallery/gallery_img4.png"
                  alt="Hands-on activity"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/**Mobile View Section */}
      <section
        className="relative bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 overflow-hidden"
        style={{
          backgroundImage: "url('/studyProgress.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ======= DESKTOP / TABLET GALLERY ======= */}
        <div className="hidden md:block">
          {/* 👉 Paste your current gallery code here exactly as you have it */}
        </div>

        {/* ======= MOBILE SECTION ======= */}
        <div className="block md:hidden relative z-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-font-orbitron text-white px-20">
            Try for free Register now
          </h2>

          <p className="text-gray-800 text-base leading-relaxed mb-6 text-font-poppins px-20">
            Let your chile experience the magic of play based learning in this free 1:1 Live Online Class. <br />Book your slot now!
          </p>

          <div className="flex justify-center pt-2">
            <button className="group bg-gradient-to-r mb-8 from-orange-500 to-yellow-400 text-white font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              SEND MESSAGE
              <div className="bg-white font-bold rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-orange-500" />
              </div>
            </button>
          </div>

          <div className="relative w-72 h-72 mx-auto rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/child-1.jpg"
              alt="Study process preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/**Study Process Gallery End */}

    </div>

  );
}