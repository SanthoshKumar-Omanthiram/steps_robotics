"use client";
import Image from "next/image";

export default function CodingAdventures() {
    return (
        <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
            {/* Title */}
            <div className="max-w-7xl mx-auto mb-4">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-4 leading-snug text-left text-font-orbitron">
                    About <span className="text-yellow-400 text-font-orbitron">STEPS Robotics</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg text-font-poppins pr-40">
                    We believe that true learning begins with exploration. That's why we deliver immersive, hands-on STEM experiences that ignite creativity and build
                    real-world skills in Robotics, Artificial Intelligence, Coding, IoT and more
                </p>
                <h2>Coding Adventures</h2>
            </div>

            {/* Floating Circles */}
            <div className="absolute top-75 left-45 w-32 h-32 rounded-full border-[10px] border-yellow-400 flex items-center justify-center bg-white shadow-md">
                <span className="font-semibold text-gray-700">CODING</span>
            </div>

            <div className="absolute top-130 left-20 w-28 h-28 rounded-full border-[10px] border-yellow-400 flex items-center justify-center bg-white shadow-md">
                <span className="font-semibold text-gray-700 text-sm">AI & ML</span>
            </div>

            <div className="absolute top-80 right-16 w-32 h-32 rounded-full border-[10px] border-yellow-400 flex items-center justify-center bg-white shadow-md">
                <span className="font-semibold text-gray-700">ROBOTICS</span>
            </div>


            <div className="absolute top-56 right-10 w-28 h-28 rounded-full border-[10px] border-yellow-400 flex items-center justify-center bg-white shadow-md">
                <span className="font-semibold text-gray-700 text-sm">AI & VR</span>
            </div>

            {/* Steps Section */}
            {/* Robot Image - Full Width, No Container */}
            <div className="w-full mt-40 -mb-50 ">
                <Image
                    src="/codingSteps-V1.png"
                    alt="STEPS Robotics Robot"
                    width={2000}
                    height={600}
                    className="w-full object-fit h-auto block"
                />
            </div>



        </section>
    );
}
