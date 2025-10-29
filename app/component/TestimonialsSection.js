// components/TestimonialsSection.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import robotImage from '@/public/robot.png';

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState([]);
    const [activeIndex, setActiveIndex] = useState(1);
    const [mobileIndex, setMobileIndex] = useState(0);

    // ✅ Fetch testimonials from API
    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const res = await fetch("/api/home/testimonials");
                if (!res.ok) throw new Error("Failed to fetch testimonials");
                const data = await res.json();
                setTestimonials(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            }
        }
        fetchTestimonials();
    }, []);

    // ✅ Fallback to empty UI if no testimonials yet
    if (testimonials.length === 0) {
        return (
            <div className="min-h-screen flex justify-center items-center text-gray-500">
                Loading testimonials...
            </div>
        );
    }

    const nextSlide = () => {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

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

    // ✅ Keep your existing components here
    const StarRating = ({ rating }) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= Math.floor(rating) ? 'opacity-100' : 'opacity-50'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FACC15" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.845 1.417 8.264L12 19.771l-7.417 4.086L6 15.593 0 9.748l8.332-1.73z" />
                    </svg>
                </span>
            );
        }
        return <div className="flex flex-direction-row justify-center text-center mb-3 text-xl text-yellow-400">{stars}</div>;
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
            <h3 className="text-2xl testmonials font-semibold text-gray-800 text-center mb-2.5">
                {testimonial.name}
            </h3>
            <StarRating rating={testimonial.rating} />
            <p className={`text-center testmonials text-sm ${isCenter ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
                {testimonial.role}
            </p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-15 py-2 px-5 realtive">
            <div className="absolute right-[20]">
                <div className="w-60 h-50 mt-[-66]">
                    <img src="/steps_robot_top.gif" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-4 mt-10">
                    <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-center sm:text-left text-font-orbitron text-yellow-400">
                        STEPS Robotics <span className="text-black text-font-orbitron">Talks</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg text-font-poppins">
                        What Parent & Teachers Say About Us
                    </p>
                </div>

                {/* Cards */}
                <div className="hidden md:flex relative justify-center items-center gap-8 mb-10 flex-wrap lg:flex-nowrap">
                    {cardOrder.map((testimonialIndex, position) => (
                        <div key={testimonials[testimonialIndex].id} className="relative">
                            {position === 1 && (
                                <>
                                    <div className="absolute -left-6 mt-65 top-1/2 transform -translate-y-1/2 text-7xl text-black font-serif font-bold pointer-events-non">"</div>
                                    <div className="absolute -right-6 top-1/3 transform -translate-y-1/2 text-7xl text-black font-serif font-bold pointer-events-non">"</div>
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
                    <p className="text-gray-800 text-base leading-relaxed mb-4 text-font-poppins">
                        "{testimonials[activeIndex].quote}"
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed text-font-poppins">
                        {testimonials[activeIndex].description}
                    </p>
                </div>

                {/* 🟡 Dots */}
                <div className="hidden md:flex justify-center gap-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${index === activeIndex
                                ? 'border-2 border-dotted border-black bg-transparent !w-7 mt-[-5] !h-7 p-1.5'
                                : 'rounded-full bg-yellow-400 bg-transparent w-4 h-4'
                                }`}
                        >
                            {index === activeIndex && <div className="w-full h-full rounded-full bg-yellow-400"></div>}
                        </button>
                    ))}
                </div>

                {/* 📱 Mobile Slider */}
                <div className="flex flex-col items-center md:hidden mt-8">
                    <div className="testimonial-wrapper bg-white">
                        <div className="testimonial-border"></div>
                        <div className="testimonial-inner">
                            <Image
                                src={testimonials[mobileIndex].image}
                                alt={testimonials[mobileIndex].name}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="text-center border-2 w-[350px] h[4000px] talks_description m-[-25px] border-dotted rounded-xl p-3 bg-gradient-to-br from-white to-yellow-400 ">
                        <p className="text-gray-800 text-base italic font-semibold mt-5 mb-3">
                            "{testimonials[mobileIndex].quote}"
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{testimonials[mobileIndex].description}</p>
                        <h3 className="text-lg font-bold text-gray-800">{testimonials[mobileIndex].name}</h3>
                        <p className="text-gray-600 text-sm mb-8">{testimonials[mobileIndex].role}</p>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform">‹</button>
                        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform">›</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
