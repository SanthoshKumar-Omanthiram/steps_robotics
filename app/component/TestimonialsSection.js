// components/TestimonialsSection.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import robotImage from '@/public/robot.png';

const testimonials = [
    {
        id: 1,
        name: 'Ms. Malathi',
        role: 'Computer Science - Teacher',
        rating: 4.5,
        image: '/kid1.png',
        quote: 'My students are more engaged than ever!',
        description: 'My Son can’t wait for class - she even codes at home!”. Before joining the program, my son was curious about technology but didn’t know where to start. Now, he’s completely hooked - coding during his free time, and fun learning environment have made a huge difference in her confidence and creativity. I’ve never seen her this excited about learning!.'
    },
    {
        id: 2,
        name: 'Mr. John Peter',
        role: 'Parents - Software Developer',
        rating: 4.5,
        image: '/kid2.png',
        quote: 'My son can\'t wait for class—he even codes at home!',
        description: 'Before joining the program, my son was curious about technology but didn\'t know where to start. Now, He\'s completely hooked—coding during him free time, and fun learning environment have made a huge difference in him confidence and creativity. I\'ve never seen him this excited about learning!'
    },
    {
        id: 3,
        name: 'Mr. Anand',
        role: 'Head Master - Patric School',
        rating: 4.5,
        image: '/kid1.png',
        quote: 'Best investment we\'ve made for our school!',
        description: 'My Son can’t wait for class - she even codes at home!”. Before joining the program, my son was curious about technology but didn’t know where to start. Now, he’s completely hooked - coding during his free time, and fun learning environment have made a huge difference in her confidence and creativity. I’ve never seen her this excited about learning!.'
    }
];

const RobotMascot = () => (
    <div className="absolute right-0 top-[-20px] w-20 h-20 lg:w-24 lg:h-24 animate-float">
        <Image
            src={robotImage}
            alt="Robot Mascot"
            width={96}
            height={96}
            className="object-contain"
        />
    </div>
);

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= Math.floor(rating) ? 'opacity-100' : 'opacity-50'}>
                ⭐
            </span>
        );
    }
    return <div className="text-center mb-3 text-xl text-yellow-400">{stars}</div>;
};

const BinderClip = () => (
    <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 z-10">
        <div className="absolute w-7 h-9 bg-gray-800 rounded-t-md left-1.5"></div>
        <div className="absolute w-5 h-5 bg-gray-600 rounded-full left-2.5 top-1"></div>
    </div>
);

const TestimonialCard = ({ testimonial, isCenter, onClick }) => (
    <div
        onClick={onClick}
        className={`relative rounded-2xl p-8 w-80 shadow-xl transition-all duration-500 cursor-pointer ${isCenter
            ? 'bg-[#f5b800] scale-90 z-20 hover:-translate-y-3 mt-30'
            : 'bg-gray-100 scale-90 opacity-100 hover:opacity-100 hover:scale-95 z-10'
            }`}
    >
        <BinderClip />
        <div className={` mx-auto mb-5 rounded-2xl overflow-hidden ${isCenter ? 'border-white' : 'border-gray-50'
            }`}>
            <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
            />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2.5">
            {testimonial.name}
        </h3>
        <StarRating rating={testimonial.rating} />
        <p className={`text-center text-sm ${isCenter ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
            {testimonial.role}
        </p>
    </div>
);

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with center card (index 1)
    const [mobileIndex, setMobileIndex] = useState(0);
    const nextSlide = () => {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const handleDotClick = (dotIndex) => {
        // Map dots to testimonial indices
        // Dot 0 is decorative (sun), dots 1-3 map to cards 0-2
        const handleDotClick = (dotIndex) => {
            setActiveIndex(dotIndex);
        };
    };

    // Get the arrangement of cards based on active index
    const getCardOrder = () => {
        const order = [];
        const totalCards = testimonials.length;

        for (let i = 0; i < totalCards; i++) {
            const index = (activeIndex - 1 + i + totalCards) % totalCards;
            order.push(index);
        }

        return order;
    };

    const cardOrder = getCardOrder();

    return (
        <div className="min-h-screen bg-gradient-to-br py-10 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-center sm:text-left text-font-orbitron text-yellow-400">
                        STEPS Robotics <span className="text-black text-font-orbitron">Talks</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg text-font-poppins">
                        We believe that true learning begins with exploration. That's why we deliver immersive, hands-on STEM experiences that ignite creativity and build
                        real-world skills in Robotics, Artificial Intelligence, Coding, IoT and more
                    </p>
                </div>
                

                {/* Testimonials Cards */}
                <div className="hidden md:flex relative justify-center items-center gap-8 mb-10 flex-wrap lg:flex-nowrap">
                    {/* Left Quote */}

                    {cardOrder.map((testimonialIndex, position) => (
                        <div key={testimonials[testimonialIndex].id} className="relative">
                            {position === 1 && (
                                <>
                                    <div className="absolute -left-6 mt-65 top-1/2 transform -translate-y-1/2 text-7xl text-black font-serif font-bold pointer-events-non">
                                        "
                                    </div>
                                    <div className="absolute -right-6 top-1/3 transform -translate-y-1/2 text-7xl text-black font-serif font-bold pointer-events-non">
                                        "
                                    </div>
                                </>
                            )}
                            <TestimonialCard
                                testimonial={testimonials[testimonialIndex]}
                                isCenter={position === 1}
                                onClick={() => handleCardClick(testimonialIndex)}
                            />
                        </div>
                    ))}
                </div>

                {/* 💬 Desktop Description */}
                <div className="hidden md:block text-center max-w-4xl mx-auto mb-8 px-5">
                    <p className="text-gray-800 text-base leading-relaxed mb-4 italic font-semibold">
                        "{testimonials[activeIndex].quote}"
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">
                        {testimonials[activeIndex].description}
                    </p>
                </div>

                {/* 🟡 Navigation Dots - Desktop */}
                <div className="hidden md:flex justify-center gap-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${index === activeIndex
                                ? 'border-2 border-dotted border-black bg-transparent !w-7 mt-[-5] !h-7 p-1.5'
                                : 'rounded-full bg-yellow-400 bg-transparent w-4 h-4'
                                }`}
                            aria-label={`View testimonial ${index + 1}`}
                        >
                            {index === activeIndex ? (
                                <div className="w-full h-full rounded-full bg-yellow-400"></div>
                            ) : null}
                        </button>
                    ))}
                </div>





                {/* 📱 Mobile Slider Version */}
                <div className="flex flex-col items-center md:hidden mt-8">
                    {/* Circular Image */}
                    <div className="testimonial-wrapper bg-white">
                        {/* Dotted Border */}
                        <div className="testimonial-border"></div>

                        {/* Image inside with spacing */}
                        <div className="testimonial-inner">
                            <Image
                                src={testimonials[mobileIndex].image}
                                alt={testimonials[mobileIndex].name}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>



                    {/* Quote & Description */}
                    <div className="text-center border-2 w-[350px] h[4000px] talks_description m-[-25px] border-dotted rounded-xl p-3 bg-gradient-to-br from-white to-yellow-400 ">
                        <p className="text-gray-800 text-base italic font-semibold mt-5 mb-3">
                            "{testimonials[mobileIndex].quote}"
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{testimonials[mobileIndex].description}</p>
                        <h3 className="text-lg font-bold text-gray-800">{testimonials[mobileIndex].name}</h3>
                        <p className="text-gray-600 text-sm mb-8">{testimonials[mobileIndex].role}</p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

