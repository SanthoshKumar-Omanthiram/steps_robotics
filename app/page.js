"use client";
// app/page.js

import Image from 'next/image';
import Link from 'next/link';
// import HeroBanner from "@/components/HeroBanner";
import HeroSlider from './component/HeroSlider';
import ProjectCard from "./component/ProjectCard";
import Robot from "@/public/robot.png"
import TestimonialsSection from './component/TestimonialsSection';
import Footer from './component/Footer';
import { motion } from 'framer-motion';



const projects = [
  { image: "Swetha.png", name: "Swetha" },
  { image: "John.png", name: "John" },
  { image: "Aditi.png", name: "Aditi" },
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

const images = [
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
  '/child-1.jpg',
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
  return (
    <div className="min-h-screen bg-white sticky top-0 z-50">

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Steps Robotics Logo"
                width={250}
                height={60}
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link text-gray-700 hover:text-yellow-500">
                Home
              </Link>
              <Link href="/courses" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                Courses
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/programs" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/about" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                About us
              </Link>
              <Link href="/contact" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSlider />

      {/* Projects Section */}
      <section className="py-12 bg-white px-4 sm:px-8 lg:px-30">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
          See what kids built with{" "}
          <span className="text-yellow-500 text-font-orbitron">STEPS Robotics!</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm dotted-cards sm:text-base lg:text-lg mb-10 leading-relaxed text-font-poppins text-left">
          With Steps Robotics, your child will build products in the real world to solve real world problems and become skilled in technologies
          that matter for the future. Best part — this happens while your child is playing!
        </p>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={i} image={p.image} name={p.name} />
            ))}
          </div>
        </div>
      </section>

      {/**Robot section */}
      <section className="py-12 px-4 sm:px-8 lg:px-30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
              What We Offer <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span> for Your Child?
            </h2>
            <p className="text-gray-600 text-base md:text-lg text-font-poppins">
              STEPS Robotics goes beyond classrooms to bring full-spectrum robotics and STEM experiences to students, teachers, and institutions.
            </p>
          </div>

          {/* Main Content - 3 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left Column - 3 Offerings */}
            <div className="space-y-4 lg:ml-auto">
              {leftOfferings.map((offering, index) => (
                <div key={index} className="flex flex-col items-start w-full max-w-[330px]">

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
                <div key={index} className="flex flex-col items-start w-full max-w-[330px]">
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
      <section className="relative py-16" style={{
        backgroundImage: "url('/why_choose_bg.jpg')",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
            Why Choose{" "}
            <span className="text-[#F5B800]">STEPS Robotics</span> for Your Child?
          </h2>
          <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
            With so many options out there, finding the right course matters.
            Our programs combine creativity, logic, and hands-on practice
            to build real-world skills across coding, robotics, AI, and more.
          </p>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-10 items-center">
          {/* Left: Images and colored boxes */}
          <div className="">
            <div className='relative flex flex-col items-start'>
              <div className="relative w-[257px] h-[257px] overflow-hidden shadow-lg mb-6 ml-12">
                <Image
                  src="/kid1.png"
                  alt="Kids learning robotics"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Colored boxes */}
              <div className="absolute top-[175px] left-[315px] w-[70px] h-[70px] bg-[#66CDAA]"></div>
              <div className="absolute top-[100px] left-[390px] w-[70px] h-[70px] bg-[#F25C5C]"></div>{/**Red Color */}
            </div>




            <div className='relative flex flex-col items-end'>
              {/* Colored boxes */}
              <div className="absolute top-[60px] left-[75px] w-[150px] h-[120px] bg-[#66CDAA]"></div>
              <div className="absolute top-[-12px] left-[225px] w-[70px] h-[70px] bg-[#F25C5C]"></div>{/**Red Color */}
              <div className="relative w-[257px] h-[257px] overflow-hidden shadow-lg mb-6 mt-[-22px] mr-[40px]">
                <Image
                  src="/kid1.png"
                  alt="Kids learning robotics"
                  fill
                  className="object-cover"
                />
              </div>



            </div>
          </div>

          {/* Right: Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-[-40px]">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-800 font-bold text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**STEPS Robotics Talsk */}
      <TestimonialsSection />

      {/**Study Process Gallery */}
      <section className="relative bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden" style={{
        backgroundImage: "url('/studyProgress.png')", backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
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

      {/**Footer */}
      <Footer />

    </div>




  );
}