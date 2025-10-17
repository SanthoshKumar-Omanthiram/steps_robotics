"use client";
// app/page.js


import Image from 'next/image';
// import HeroBanner from "@/components/HeroBanner";
import HeroSlider from './component/HeroSlider';
import ProjectCard from "./component/ProjectCard";
import Robot from "@/public/robot.png"
import TestimonialsSection from './component/TestimonialsSection';
import { motion } from 'framer-motion';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhyChooseSection from './component/WhyChooseSection';
import Footer from './component/Footer';

import { Mail, Phone, ArrowRight } from 'lucide-react';





// const projects = [
//   { image: "Swetha.png", name: "Swetha" },
//   { image: "John.png", name: "John" },
//   { image: "Aditi.png", name: "Aditi" },
// ];

const projects = [
  { image: "/Swetha.png", video: "/about/kid-1.mp4", name: "Aditi" },
  { image: "/Sathish.png", video: "/about/kid-2.mp4", name: "Shankar" },
  { image: "/Sandiya.png", video: "/about/kid-3.mp4", name: "Divya" },
  { image: "/Swetha.png", video: "/about/kid-4.mp4", name: "Aditi Shakar" },
  { image: "/Sathish.png", video: "/about/kid-5.mp4", name: "Mukesh Raj" },
  { image: "/Sandiya.png", video: "/about/kid-1.mp4", name: "Vidhya Sree" },

];

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

// const rightOfferings = [
//   {
//     title: "Robotics\nCompetitions",
//     icon: "/icons/robotics.png",
//     description: "Test skills in real-world scenarios. \n Join national-level competitions with training, support.",
//   },
//   {
//     title: "Competition Coaching",
//     icon: "/icons/competition.png",
//     description: "Customized mentoring for WRO, FIRST, and national STEM events.",
//   },
//   {
//     title: "CSR & Corporate STEM Programs",
//     icon: "/icons/CSR.png",
//     description: "Partner with us to bring STEM learning to underserved communities.",
//   }
// ];

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



// const galleryImages = [
//   // Column 1
//   [
//     { src: '/child-1.jpg', alt: 'Student building robot', height: 'h-40 w-50' },
//     { src: '/child-1.jpg', alt: 'Teacher with students', height: 'h-100 w-50' }
//   ],
//   // Column 2
//   [
//     { src: '/child-1.jpg', alt: 'Students working on project', height: 'h-80 w-80 px-[-20]' },
//     { src: '/child-1.jpg', alt: 'Classroom activity', height: 'h-64' }
//   ],
//   // Column 3
//   [
//     { src: '/child-1.jpg', alt: 'Science experiment', height: 'h-72' },
//     { src: '/child-1.jpg', alt: 'Student presentation', height: 'h-80' }
//   ],
//   // Column 4
//   [
//     { src: '/child-1.jpg', alt: 'Robotics project', height: 'h-96' }
//   ],
//   // Column 5
//   [
//     { src: '/child-1.jpg', alt: 'Group learning', height: 'h-64' },
//     { src: '/child-1.jpg', alt: 'Hands-on activity', height: 'h-80' }
//   ]
// ];





export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Projects Section */}
      <section className="py-12 bg-white px-4 sm:px-8 lg:px-30">
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
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <ProjectCard
                  image={p.image}
                  name={p.name}
                  onClick={() => setActiveVideo(p.video)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fullscreen Video Modal */}
          {/* {activeVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-5 right-5 text-white text-3xl font-bold"
              >
                ✕
              </button>
            </div>
          )} */}
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


      </section>

      {/**Robot section */}
      <section className="py-6 px-4 sm:px-8 lg:px-30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
              What We Offer <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span> for Your Child?
            </h2>
            <p className="text-gray-600 text-base md:text-lg text-font-poppins">
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
                    <h3 className="text-base md:text-lg text-font-poppins font-bold break-words text-start flex-1 px-4">
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
                  <p className="text-gray-600 text-sm leading-relaxed text-left w-full px-6 whitespace-pre-line">
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
                    <h3 className="text-base md:text-lg text-font-poppins font-bold break-words text-end flex-1 px-4">
                      {offering.title}
                    </h3>
                  </div>
                  {/* Description text outside */}
                  <p className="text-gray-600 text-sm leading-relaxed text-left w-full px-6 whitespace-pre-line">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/**Explore Learning */}
      <section className='explore_learning' style={{ backgroundImage: "url('/Explore_screen_bg.jpg')" }}>
        <div className="max-w-7xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl pt-10 mb-4 leading-snug text-left text-font-orbitron">
            Explore Learning with <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-font-poppins mb-10 pr-40">
            From structured courses to dynamic programs, STEPS Robotics offers multiple pathways for students to develop essential STEM and coding skills.
            Our approach blends theory with hands-on practice, preparing learners to thrive in the technology-driven word.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mt-18 mb-20 mx-auto">
          {/* Card 1 */}
          <div className="relative flex-1 border-2 border-dotted border-orange-400 rounded-3xl bg-white overflow-visible flex flex-col md:flex-row items-center md:items-start md:p-8 gap-6 h-67">


            {/* Left: Image (popped out) */}
            <div className="absolute rounded-2xl -top-10 left-6 md:left-20">
              <div className="p-1 bg-black w-40 h-60 md:w-50 md:h-60">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/program1.png"
                    alt="Students learning robotics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>



            {/* Right: Text (with padding to avoid overlap) */}
            <div className="flex-1 text-left mt-32 md:mt-0 md:ml-72">
              <p className="text-font-orbitron-explore font-bold">
                Explore Courses
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed text-font-poppins">
                Structured STEM courses combining robotics, coding, and hands-on projects to build creativity, problem-solving, and future-ready skills.
              </p>

              <ul className="space-y-1 mb-1">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span className="text-gray-700 text-font-poppins">Interactive robotics classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 ">→</span>
                  <span className="text-gray-700 text-font-poppins">Project-based curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span className="text-gray-700 text-font-poppins">Expert mentor guidance</span>
                </li>
              </ul>

              <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                Explore More
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>


          {/* Card 2 */}
          <div className="relative flex-1 border-2 border-dotted border-orange-400 rounded-3xl bg-white overflow-visible flex flex-col md:flex-row items-center md:items-start md:p-8 gap-6 h-67">


            {/* Left: Image (popped out) */}
            <div className="absolute rounded-2xl -top-10 left-6 md:left-20">
              <div className="p-1 bg-black w-40 h-60 md:w-50 md:h-60">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/program1.png"
                    alt="Students learning robotics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>



            {/* Right: Text (with padding to avoid overlap) */}
            <div className="flex-1 text-left mt-32 md:mt-0 md:ml-72">
              <p className="text-font-orbitron-explore font-bold">
                Explore Courses
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed text-font-poppins">
                Structured STEM courses combining robotics, coding, and hands-on projects to build creativity, problem-solving, and future-ready skills.
              </p>

              <ul className="space-y-1 mb-1">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span className="text-gray-700 text-font-poppins">Interactive robotics classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 ">→</span>
                  <span className="text-gray-700 text-font-poppins">Project-based curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span className="text-gray-700 text-font-poppins">Expert mentor guidance</span>
                </li>
              </ul>

              <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                Explore More
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/**Coding */}
      <section className="pt-12 px-4 sm:px-8 lg:px-30 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/about_bg.jpg')" }}>
        {/* Header with max-width */}
        <div className="max-w-7xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
            About <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-font-poppins pr-40">
            We believe that true learning begins with exploration. That's why we deliver immersive, hands-on STEM experiences that ignite creativity and build
            real-world skills in Robotics, Artificial Intelligence, Coding, IoT and more
          </p>
        </div>

        {/* Robot Image - Full Width, No Container */}
        <div className="w-full leading-none -mb-1 mt-[-100]">
          <Image
            src="/codingSteps.png"
            alt="STEPS Robotics Robot"
            width={2000}
            height={600}
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/**Choose STEPS Robotics */}
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
                  src="/child-1.jpg"
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
        className="relative bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
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
        <div className="block md:hidden relative z-10 text-center mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-font-orbitron text-white px-20">
            Try for free Register now
          </h2>

          <p className="text-gray-800 text-base leading-relaxed mb-6 text-font-poppins px-20">
            Let your chile experience the magic of play based learning in this free 1:1 Live Online Class. <br />Book your slot now!
          </p>

          {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold mb-8 transition duration-300">
            Explore More
          </button> */}
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


      {/**Footer */}
      <Footer />

    </div>




  );
}