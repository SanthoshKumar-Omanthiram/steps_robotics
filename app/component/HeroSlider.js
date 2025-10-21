"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BookTrial from "./BookTrail";

const slides = [
  {
    id: 1,
    title: "New Batch",
    subtitle: "Starting Soon!",
    description:
      "Interactive robotics and coding courses for Grades 1–12. Where curiosity transforms into creation by inspiring creators, leaders, and problem-solvers.",
    image: "/banner1.jpg",
  },
  {
    id: 2,
    title: "Build Your Future",
    subtitle: "With Robotics!",
    description:
      "Hands-on learning experience with VEX robotics platform. Learn by doing and create amazing projects.",
    image: "/banner2.jpg",
  },
];

const infoCards = [
  { image: "/banner_icons/student.png", title: "For Students", subtitle: "Age 3-17" },
  { image: "/banner_icons/platform.png", title: "Platform", subtitle: "VEX" },
  { image: "/banner_icons/courses.png", title: "Courses", subtitle: "12+" },
  { image: "/banner_icons/tools.png", title: "Tools & Kit", subtitle: "25+" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showBookTrial, setShowBookTrial] = useState(false);

  const handleRegisterClick = () => setShowBookTrial(true);
  const closeModal = () => setShowBookTrial(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative overflow-hidden h-[600px] md:h-[700px]">
      {/* Slider */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 0.3 } }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl banner-text">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-900 mb-8 max-w-xl font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <button
                  onClick={handleRegisterClick}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  Pre Register Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Info Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-t-3xl shadow-lg py-6 px-4">
            {infoCards.map((card, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-medium text-sm">{card.title}</div>
                  <div className="text-xl font-bold text-gray-900">{card.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup for BookTrial */}
      {showBookTrial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-6xl p-4 md:p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
            >
              &times;
            </button>
            <BookTrial />
          </div>
        </div>
      )}
    </section>
  );
}
