import React from 'react';
import { Check, X } from 'lucide-react';

export default function HowDifferent() {
  const stepsFeatures = [
    'Hands-on Learning: Robotics, Coding & Electronics',
    'Block Programming & Coding for Kids',
    'Circuit Design & Electronics Lab',
    'Python & AI Introduction for Kids',
    'IoT & Robotics Integration Projects',
    'Mechanical Design & Robot Assembly Workshops'
  ];

  const otherFeatures = [
    'Hands-on Learning: Robotics, Coding & Electronics',
    'Block Programming & Coding for Kids',
    'Circuit Design & Electronics Lab',
    'Python & AI Introduction for Kids',
    'IoT & Robotics Integration Projects',
    'Mechanical Design & Robot Assembly Workshops'
  ];

  const galleryImages = [
    '/gallery-profile.png',
    '/gallery-profile.png',
    '/gallery-profile.png',
    '/gallery-profile.png',
    '/gallery-profile.png',
    '/gallery-profile.png'
  ];

  return (
    <div className="container mx-auto pt-8">
      <div className="mb-5">
        <h2 className="course-details-black mb-4">
          How are we <span className="course-details-gold">Different from Others?</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-4xl text-sm">
          Our STEPS Robotics program offers a unique, hands-on offline learning experience that integrates 
          Robotics, Coding, Electronics, and STEM concepts — designed to build real-world skills beyond 
          traditional classes.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-[40px] steps-robotics-points pt-[25px] pr-[25px] pb-[10px] pl-[28px] relative overflow-hidden">
           <div className='diffrent-section'  style={{
    background: "linear-gradient(135deg, #f6f6f6, #f2f2f2)",
    clipPath: "polygon(0 0, 40% 0, 100% 38%, 100% 100%, 0 100%, 0 0)",
    borderRadius: "16px",
  }}>
             <div className="absolute top-6 right-6 text-7xl transform rotate-12">🤖</div>
            <h3 className="steps-robotics-points-titile mb-8">STEPS<br />Robotics</h3>
            <div className="space-y-3">
              {stepsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-500 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="feature-font leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
           </div>
          </div>
          <div className="rounded-[40px] steps-robotics-others pt-[25px] pr-[25px] pb-[10px] pl-[28px] relative overflow-hidden">
                     <div className='diffrent-section shadow-sm'>
            <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              Robotics
            </div>
            <h3 className="steps-robotics-points-titile mb-8 text-black">Other<br />Classes</h3>
            <div className="space-y-3">
              {otherFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-red-700 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <span className="feature-font text-black leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">
              Course <span className="class-instructor-gold">Gallery</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden bg-gray-100">
                  <img src={img} alt={`Student ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}