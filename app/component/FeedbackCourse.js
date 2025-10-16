"use client";
import React, { useState, useEffect } from "react";

export default function FeedbackCourse() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      name: "Mr. Vinoth Kumar",
      role: "Head Master - Patric School",
      rating: 4.5,
      text: "Before joining the program, many were curious about technology but didn't know where to begin. Now, they're coding in their free time, with boosted confidence, creativity, and a genuine love for learning.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      name: "Ms. Priya Sharma",
      role: "Principal - Tech Academy",
      rating: 5,
      text: "The transformation in our students has been remarkable. They've developed critical thinking skills and a passion for problem-solving that extends beyond the classroom.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      name: "Dr. Anita Reddy",
      role: "Dean - Innovation Center",
      rating: 4.5,
      text: "This program has bridged the gap between theoretical knowledge and practical application. Our students are now confident in tackling real-world technological challenges.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Mr. Rajesh Patel",
      role: "Director - STEM Institute",
      rating: 5,
      text: "An exceptional learning experience that has inspired creativity and innovation in our students. The hands-on approach makes all the difference.",
    },
  ];

  // 🔁 Auto play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeSlide];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="#FDB022"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#FDB022" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="url(#half-fill)"
          />
        </svg>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="#E5E7EB"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="container course-testimonial pb-[140px] mx-auto bg-white px-4">
      <div className="max-w-7xl padding-80 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-[50%]">
            <h2 className="mb-4 leading-tight">
              <span className="feedback-main stem-gold">People's Say</span>{" "}
              <span className="feedback-main">
                About <br /> our Course
              </span>
            </h2>
            <p className="feedback-subtag mb-3 leading-relaxed">
              Rem aperiam eaque ipsa quae ab illo inventore veritatis architecto
              beatae vitae dicta sunt explica.
            </p>
            <button className="text-yellow-500 font-semibold text-base hover:text-yellow-600 transition-colors">
              View More
            </button>
          </div>

          <div className="w-full lg:w-[15%] flex justify-center">
            <div
              className="w-56 h-35 rounded-3xl overflow-hidden bg-gray-200 transform rotate-6"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover transform -rotate-6 scale-110 transition-all duration-700"
              />
            </div>
          </div>

          <div className="w-full pt-[98px] lg:w-[35%] transition-all duration-700">
            <p className="course-testimonial-text mt-5 leading-relaxed mb-8">
              {currentTestimonial.text}
            </p>

            <div className="mb-6">
              <h3 className="course-testimonial-name mb-2">
                {currentTestimonial.name}
              </h3>
              <div className="flex items-center gap-1 mb-2">
                {renderStars(currentTestimonial.rating)}
              </div>
              <p className="course-testimonial-role text-sm">
                {currentTestimonial.role}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`transition-all duration-300 ${
                    index === activeSlide
                      ? "w-10 h-10 rounded-full border-4 border-yellow-500 bg-white flex items-center justify-center"
                      : "w-3 h-3 rounded-full bg-gray-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === activeSlide && (
                    <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
