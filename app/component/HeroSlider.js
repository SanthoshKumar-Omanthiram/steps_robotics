"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BookTrial from "./BookTrail";
import { ArrowRight } from 'lucide-react';
import { fetchBanners } from "@/app/utils/fetchData"; // ✅ import from utils

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
  {
    id: 2,
    title: "Future Robotics",
    subtitle: "Coding Course!",
    description:
      "Interactive robotics and coding courses for Grades 1–12. Learn by doing and create amazing projects.",
    image: "/banner3.jpg",
  },
];


const infoCards = [
  { image: "/banner_icons/student.png", title: "For Students", subtitle: "Age 3-17" },
  { image: "/banner_icons/platform.png", title: "Platform", subtitle: "VEX" },
  { image: "/banner_icons/courses.png", title: "Courses", subtitle: "12+" },
  { image: "/banner_icons/tools.png", title: "Tools & Kit", subtitle: "25+" },
];

export default function HeroSlider() {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    async function loadBanners() {
      try {
        const data = await fetchBanners();
        setBanners(data);
      } catch (err) {
        console.error("Failed to fetch banners:", err);
      }
    }
    loadBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);


  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [direction, setDirection] = useState(0);
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
    <section className="relative h-[600px] md:h-[600px]">
      {/* Slider */}
      {banners.length > 0 && (
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              enter: (direction) => ({ opacity: 0, x: direction > 0 ? 100 : -100 }),
              center: { opacity: 1, x: 0 },
              exit: (direction) => ({ opacity: 0, x: direction < 0 ? 100 : -100 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* 🖼 Banner Image */}
            <div className="absolute inset-0">
              <Image
                src={banners[currentSlide].image}
                alt={banners[currentSlide].banner_title1}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ✨ Banner Text */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-2xl banner-text">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {banners[currentSlide].banner_title1}
                </motion.h1>

                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {banners[currentSlide].banner_title2}
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-gray-900 mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {banners[currentSlide].paragraph}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <button
                    onClick={() =>
                      (window.location.href = banners[currentSlide].button_link || "/")
                    }
                    className="absolute home_banner_button w-50 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xl py-2 px-3 rounded-full flex items-center justify-center gap-3 hover:shadow-lg transition-shadow"
                  >
                    {banners[currentSlide].button_name || "Get Started"}
                    <div className="bg-white rounded-full p-2">
                      <ArrowRight className="w-6 h-6 text-orange-500" />
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}


      {/* Info Cards */}
      <div className="absolute bottom-[-50px] left-0 right-0 z-20">
        <div className="container mx-auto">
          {/* Outer white container */}
          <div className="bg-white p-2 rounded-t-3xl ">
            {/* Inner gray/yellow section */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-b from-gray-100 to-white gap-6 rounded-2xl py-4  px-4">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 p-3"
                >
                  <div className="w-12 h-12 relative">
                    <Image src={card.image} alt={card.title} fill className="object-contain" />
                  </div>
                  <div className="text-left">
                    <div className="text-gray-700 font-medium text-sm">{card.title}</div>
                    <div className="text-xl font-bold text-gray-900">{card.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {showBookTrial && (
        <div className="fixed inset-0 z-[9999] m-[30px] overflow-y-auto animate-fadeIn">    <button
          onClick={closeModal}
          className="absolute top-[60px] right-[113px] z-[10000] text-gray-300 text-4xl hover:text-gray-500"
        >
          &times;
        </button>

          <div className="min-h-screen flex items-center justify-center p-0">
            <BookTrial />
          </div>
        </div>
      )}

    </section>


  );
}
