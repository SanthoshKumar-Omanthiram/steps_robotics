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
                className="relative hidden md:block bg-gradient-to-br  from-yellow-200 via-yellow-300 to-yellow-400 py-16 px-4  overflow-hidden"
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

                    <div className="container mx-auto relative z-10">
                        {/* Header */}
                        <motion.div
                            className="mb-12 max-w-5xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4 text-font-orbitron">
                                Study Process Gallery
                            </h2>
                            <p className="text-gray-800 text-lg leading-relaxed text-font-poppins">
                                Instructor led training digital learning cbt completion criteria learning management system cognitive load byod self-directed learning knowledge
                            </p>
                        </motion.div>

                        {/* Manual Masonry Gallery - 5 Columns */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">

                            {/* COLUMN 1 */}
                            <div className="flex flex-col gap-4">
                                {/* Image 1 */}
                                <motion.div
                                    className="relative h-50 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[0].image}
                                        alt="Student building robot"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>

                                {/* Image 2 */}
                                <motion.div
                                    className="relative h-96 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[1].image}
                                        alt="Teacher with students"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>
                            </div>

                            {/* COLUMN 2 */}
                            <div className="flex flex-col gap-4 ml-[-40px]">
                                {/* Image 1 */}
                                <motion.div
                                    className="relative h-95 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[2].image}
                                        alt="Students working on project"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>

                                {/* Image 2 */}
                                <motion.div
                                    className="relative h-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[3].image}
                                        alt="Classroom activity"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>
                            </div>

                            {/* COLUMN 3 */}
                            <div className="flex flex-col gap-4 ">
                                {/* Image 1 */}
                                <motion.div
                                    className="relative h-90 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[4].image}
                                        alt="Science experiment"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>

                                {/* Image 2 */}
                                <motion.div
                                    className="relative h-55 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[5].image}
                                        alt="Student presentation"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>
                            </div>

                            {/* COLUMN 4 */}
                            <div className="flex flex-col gap-4 ml-[-40px]">
                                {/* Image 1 */}
                                <motion.div
                                    className="relative h-148 w-50 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[6].image}
                                        alt="Robotics project"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>
                            </div>

                            {/* COLUMN 5 */}
                            <div className="flex flex-col gap-4 ml-[-70px]">
                                {/* Image 1 */}
                                <motion.div
                                    className="relative h-64 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[7].image}
                                        alt="Group learning"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>

                                {/* Image 2 */}
                                <motion.div
                                    className="relative h-80 w-70 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={gallery[8].image}
                                        alt="Hands-on activity"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>






            {/**Mobile View Section */}
            <section
                className="relative bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 overflow-hidden"
                style={{
                    backgroundImage: "url('/studyProgress.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* ======= DESKTOP / TABLET GALLERY ======= */}
                <div className="hidden md:block">
                    {/* 👉 Paste your current gallery code here exactly as you have it */}
                </div>

                {/* ======= MOBILE SECTION ======= */}
                <div className="block md:hidden relative z-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 text-font-orbitron text-white px-20">
                        Try for free Register now
                    </h2>

                    <p className="text-gray-800 text-base leading-relaxed mb-6 text-font-poppins px-20">
                        Let your chile experience the magic of play based learning in this free 1:1 Live Online Class. <br />Book your slot now!
                    </p>

                    <div className="flex justify-center pt-2">
                        <button className="group bg-gradient-to-r mb-8 from-orange-500 to-yellow-400 text-white font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        >
                            SEND MESSAGE
                            <div className="bg-white font-bold rounded-full p-2 group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5 text-orange-500" />
                            </div>
                        </button>
                    </div>

                    <div className="relative w-72 h-72 mx-auto rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/child-1.jpg"
                            alt="Study process preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
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


