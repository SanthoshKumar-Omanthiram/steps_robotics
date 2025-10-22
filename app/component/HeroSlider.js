// app/components/HeroSlider.js
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        title: "New Batch",
        subtitle: "Starting Soon!",
        description: "Interactive robotics and coding courses for Grades 1–12. Where curiosity transforms into creation by inspiring creators, leaders, and problem-solvers.",
        image: "/banner1.jpg",
        mobileTitle: "Future-Ready",
        mobileSubtitle: "STEM & Robotics",
        mobileTitle2: "Skills for Kids",
        mobileDescription: "Hands-on coding and robotics courses for Grades 2-12. Fun, interactive, and designed for young innovators."
    },
    {
        id: 2,
        title: "Build Your Future",
        subtitle: "With Robotics!",
        description: "Hands-on learning experience with VEX robotics platform. Learn by doing and create amazing projects.",
        image: "/banner2.jpg",
        mobileTitle: "Future-Ready",
        mobileSubtitle: "STEM & Robotics",
        mobileTitle2: "Skills for Kids",
        mobileDescription: "Hands-on coding and robotics courses for Grades 2-12. Fun, interactive, and designed for young innovators."
    },
];

const infoCards = [
    { image: "/banner_icons/student.png", title: "For Students", subtitle: "Age 3-17" },
    { image: "/banner_icons/platform.png", title: "Platform", subtitle: "VEX" },
    { image: "/banner_icons/courses.png", title: "Courses", subtitle: "12+" },
    { image: "/banner_icons/tools.png", title: "Tools & Kit", subtitle: "25+" }
];

const mobileInfoCards = [
    { image: "/banner_icons/student.png", title: "For Kids", subtitle: "Age 3-12" },
    { image: "/banner_icons/platform.png", title: "Students", subtitle: "20,000+" },
    { image: "/banner_icons/courses.png", title: "Interactive Courses", subtitle: "150+" },
    { image: "/banner_icons/tools.png", title: "Products", subtitle: "86+" }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

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

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const slideVariants = {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <section className="relative overflow-hidden h-[700px] md:h-[700px]">
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
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent md:bg-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                        {/* Desktop Layout */}
                        <div className="hidden md:block max-w-2xl">
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
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Pre Register Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Layout - Centered */}
                        <div className="md:hidden text-center">
                            <motion.h1
                                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {slides[currentSlide].mobileTitle}
                            </motion.h1>
                            <motion.h2
                                className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {slides[currentSlide].mobileSubtitle}
                            </motion.h2>
                            <motion.h3
                                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {slides[currentSlide].mobileTitle2}
                            </motion.h3>
                            <motion.p
                                className="text-base text-gray-800 mb-6 px-4 max-w-md mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                {slides[currentSlide].mobileDescription.split('Grades 2-12')[0]}
                                <span className="text-orange-500 font-semibold">Grades 2-12</span>
                                {slides[currentSlide].mobileDescription.split('Grades 2-12')[1]}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Get Started
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            
            

            

            {/* Dots Navigation */}
            {/* <div className="absolute bottom-32 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all ${currentSlide === index
                                ? 'bg-orange-500 w-8 h-3'
                                : 'bg-white/70 hover:bg-white w-3 h-3'
                            } rounded-full`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}

            {/* Info Cards - Desktop (4 columns) */}
            <motion.div
                className="hidden md:block absolute bottom-0 left-0 right-0 z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-4 gap-6 bg-white rounded-t-3xl shadow-lg py-6 px-4">
                        {infoCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            >
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <div className="text-gray-800 font-medium text-sm">
                                        {card.title}
                                    </div>
                                    <div className="text-xl font-bold text-gray-900">
                                        {card.subtitle}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Info Cards - Mobile (2x2 grid) */}
            <motion.div
                className="md:hidden absolute bottom-0 left-0 right-0 z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-4 bg-white rounded-t-3xl shadow-lg py-4 px-4">
                        {mobileInfoCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 border-gray-500 p-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            >
                                <div className="w-10 h-10 relative flex-shrink-0">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <div className="text-gray-800 font-medium text-xs">
                                        {card.title}
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">
                                        {card.subtitle}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
