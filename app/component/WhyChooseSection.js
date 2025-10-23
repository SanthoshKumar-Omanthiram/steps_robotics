import React from 'react';
import Image from 'next/image';
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
export default function WhyChooseSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Why Choose{" "}
            <span className="text-yellow-500">STEPS Robotics</span> for Your Child?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            With so many options out there, finding the right course matters.
            Our programs combine creativity, logic, and hands-on practice
            to build real-world skills across coding, robotics, AI, and more.
          </p>
          
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative flex why_choose_steps_ flex-col gap-6 md:gap-8">
            <div className="relative flex justify-start md:justify-center lg:justify-start">
              <div className="relative why_choose_image_1">
                <Image
                  src="/kid1.png"
                  alt="Kids with mentor"
                  width={148}
                  height={148}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover relative z-10"
                />
                <div className="absolute bottom-4 -right-18 w-16 h-16 sm:w-20 sm:bottom-1 sm:h-20 bg-teal-400 sm:-right-22"></div>
                <div className="absolute top-[45] section_1_red -right-35 w-16 h-16 sm:w-20 sm:h-20 sm:-right-43 sm:top-23 bg-red-400 z-0"></div>
              </div>
            </div>
            <div className="relative flex justify-end right-18 xs:right-30 -top-8 md:justify-center lg:justify-end">
              <div className="relative why_choose_image_2">
                <Image
                  src="/kid1.png"
                  alt="Kids with mentor"
                  width={148}
                  height={148}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg relative z-10"
                />


                <div className="flex why_choose_sex_2_tale absolute top-20 -left-57 w-16 h-16 sm:w-40 sm:h-20 sm:-left-62 sm:top-22 md:w-40 sm:h-34 bg-teal-400  z-0"></div>
                <div className="absolute top-4 -left-18 w-15 h-15 sm:-left-22 sm:w-20 sm:h-20 sm:top-2 bg-red-400  z-0"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="!w-auto !h-[100px]"
                  />
                <div className="pt-2">
                  <h4 className="text-gray-900 font-semibold text-base sm:text-lg leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}