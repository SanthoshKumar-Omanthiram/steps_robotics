"use client";
import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How will my child learn and build robotics projects?",
      answer:
        "Students learn through hands-on activities conducted inside their school as part of a structured NEP-aligned curriculum. Each session includes guided building, coding, and problem-solving using age-appropriate robotics kits. The kits are designed for beginners and follow a learn-by-doing approach. Even first-time learners can assemble and operate them with step-by-step guidance from our trained instructors.",
    },
    {
      question: "Is it difficult to use your Robotics Kits?",
      answer: "",
    },
    {
      question: "What will my child learn from this Robotics Program?",
      answer: "",
    },
    {
      question: "What is included in the Robotics Kit provided?",
      answer: "",
    },
    {
      question: "When and where are the Robotics sessions conducted?",
      answer: "",
    },
    {
      question: "Will my child be able to create their own ideas and projects?",
      answer: "",
    },
    {
      question: "Can my child design and build something original on their own?",
      answer: "",
    },
  ];

  return (
    <div className="bg-white faq-section text-black mt-[40px]">
        <div className="container-custom">
      <h2 className="faq-heading mb-2">
        Frequently Asked{" "}
        <span className="faq-heading-span text-[#EFBC08]">Questions</span>
      </h2>

      <p className="faq-description mb-8">
        Browse through commonly asked questions for clarity on our curriculum and services.
        We’ve compiled everything you need to know in a simple, easy to read format.
      </p>

      <div className="border-t border-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className={`w-full text-left py-4 font-medium faq-points-title transition-all flex justify-between items-center ${
                openIndex === index
                  ? "text-[#EF9E08]"
                  : "text-gray-800 hover:text-[#EF9E08]"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="text-lg">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>

            {openIndex === index && faq.answer && (
              <div className="bg-[#fdf8e8] border-t border-b border-[#cecece] text-gray-700 px-6 py-4 text-sm faq-points-description leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
}
