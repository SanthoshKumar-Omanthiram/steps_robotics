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
        image: "/banner1.jpg", // Replace with your actual image path
    },
    {
        id: 2,
        title: "Build Your Future",
        subtitle: "With Robotics!",
        description: "Hands-on learning experience with VEX robotics platform. Learn by doing and create amazing projects.",
        image: "/banner2.jpg",
    },

];

const infoCards = [
    {image: "/banner_icons/student.png", title: "For Students", subtitle: "Age 3-17" },
    {image: "/banner_icons/platform.png", title: "Platform", subtitle: "VEX" },
    {image: "/banner_icons/courses.png", title: "Courses", subtitle: "12+" },
    {image: "/banner_icons/tools.png", title: "Tools & Kit", subtitle: "25+" }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-slide every 5 seconds
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
        enter: {
            opacity: 0
        },
        center: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    };

    return (
        <section className="relative overflow-hidden h-[600px] md:h-[700px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.3 }
                    }}
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
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                        <div className="max-w-2xl banner-text">
                            {/* Text Content */}
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
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Info Cards - Positioned at bottom */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-t-3xl shadow-lg py-6 px-4">
                        {infoCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            >
                                {/* ICON */}
                                {/* <div className="text-4xl text-yellow-500">{card.icon}</div> */}
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* TEXT */}
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


        </section>
    );
}