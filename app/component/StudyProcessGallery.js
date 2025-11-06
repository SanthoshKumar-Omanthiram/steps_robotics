import React from 'react'
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from "react";


export default function StudyProcessGallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        async function loadGallery() {
            try {
                const res = await fetch("/api/home/study-gallery");
                const data = await res.json();
                setGallery(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("❌ Failed to load gallery:", err);
            }
        }
        loadGallery();
    }, []);

    if (!gallery.length) {
        return (
            <section className="py-16 text-center">
                <p>Loading gallery...</p>
            </section>
        );
    }

    // Helper function to get specific image by index safely
    const img = (i) => gallery[i]?.image || "";
    const alt = (i) => gallery[i]?.alt || `gallery_${i}`;

    return (
        <>
            {/**Study Process Gallery Start */}
            <section
                className="relative md:block bg-gradient-to-br  from-yellow-200 via-yellow-300 to-yellow-400 py-16 px-4  overflow-hidden"
                style={{
                    backgroundImage: "url('/studyProgress.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className='container-custom'>
                    {/* Geometric Pattern Background */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px)`
                            }}>
                        </div>
                    </div>

                    {/* YouTube Icon */}
                    <motion.div
                        className="absolute top-8 right-8 md:top-12 md:right-50"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="w-28 h-28 md:w-30 md:h-30 flex items-center justify-center transform rotate-6 hover:rotate-3 transition-transform">
                            <Image
                                src="/youtube.gif"
                                alt="Student building robot"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="mb-12 max-w-5xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-[500] text-gray-900 mb-4 text-font-orbitron">
                            Study Process Gallery
                        </h2>
                        <p className="text-gray-800 text-lg leading-relaxed text-font-poppins">
                            Instructor led training digital learning cbt completion criteria learning management system cognitive load byod self-directed learning knowledge
                        </p>
                    </motion.div>

                    <div className="container md:block mx-auto relative z-10">
                        {/* Header */}

                        {/**Study Gallery Desktop */}
                        {/* Manual Masonry Gallery - 5 Columns */}
                        <div
                            className="study_gallery_desktop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl1139:grid-cols-3 gap-4 mt-20"
                        >
                            {/* COLUMN 1 */}
                            <div className="flex section_1 flex-col gap-4">
                                {/* Image 1 */}
                                <div className="relative h-50 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[0].image}
                                        alt="Student building robot"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Image 2 */}
                                <div className="relative h-96 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[1].image}
                                        alt="Teacher with students"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* COLUMN 2 */}
                            <div className="flex section_2 flex-col gap-4 ml-[-10px]">
                                {/* Image 1 */}
                                <div className="relative h-95 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={gallery[2].image}
                                        alt="Students working on project"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Image 2 */}
                                <div className="relative h-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[3].image}
                                        alt="Classroom activity"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* COLUMN 3 */}
                            <div className="flex flex-col gap-4">
                                {/* Image 1 */}
                                <div className="relative h-90 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[4].image}
                                        alt="Science experiment"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Image 2 */}
                                <div className="relative h-55 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[5].image}
                                        alt="Student presentation"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* COLUMN 4 */}
                            <div className="flex section_4 flex-col gap-4 ml-[-40px]">
                                <div className="relative h-148 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[6].image}
                                        alt="Robotics project"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* COLUMN 5 */}
                            <div className="flex section_5 flex-col gap-4 ml-[-70px]">
                                <div className="relative h-64 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[7].image}
                                        alt="Group learning"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <div className="relative h-80 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
                                    <Image
                                        src={gallery[8].image}
                                        alt="Hands-on activity"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>







            <section
                className="relative bg-gradient-to-br overflow-hidden"
            // style={{
            //     backgroundImage: "url('/studyProgress.png')",
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >

            </section>

            {/**Study Process Gallery End */}

        </>
    )
}

// 🧩 Reusable Image Component
function GalleryImage({ src, alt, height }) {
    if (!src) return null; // skip empty slots
    return (
        <motion.div
            className={`relative ${height} rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </motion.div>
    );
}


