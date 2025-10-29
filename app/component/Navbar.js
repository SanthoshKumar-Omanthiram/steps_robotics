"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchLogo, fetchNavbar } from "@/app/utils/fetchData"; // ✅ import from utils


const Navbar = () => {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? '' : menu);
    };

    // Fetch the Logo and Menu Items
    const [logo, setLogo] = useState("");
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const [logoUrl, navbarItems] = await Promise.all([
                    fetchLogo(),
                    fetchNavbar(),
                ]);

                // Define the desired order
                const order = ["Home", "Courses", "Programs", "About Us", "Contact"];

                // Sort items according to that order
                const sortedItems = navbarItems.sort(
                    (a, b) => order.indexOf(a.label) - order.indexOf(b.label)
                );

                setLogo(logoUrl);
                setMenuItems(sortedItems);
            } catch (err) {
                console.error("Data fetch error:", err);
            }
        }

        loadData();
    }, []);



    useEffect(() => {
        if (menuItems.length > 0) {
            console.log("Updated menu items:", menuItems);
        }
    }, [menuItems]);

    return (
        <nav className="bg-white header_part shadow-sm sticky top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={logo}
                            alt="Steps Robotics Logo"
                            width={250}
                            height={60}
                            className="h-16 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    {/* <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="nav-link text-gray-700 hover:text-yellow-500">
                            Home
                        </Link>
                        <Link href="/courses/4" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                            Courses
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <Link href="/programs" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                            Programs
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <Link href="/about" className="nav-link text-gray-700 hover:text-yellow-500">
                            About us
                        </Link>
                        <Link href="/contacts" className="nav-link text-gray-700 hover:text-yellow-500">
                            Contact
                        </Link>
                    </div> */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems
                            .filter((item) => item.visible) // ✅ show only visible ones
                            .map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="nav-link text-gray-700 hover:text-yellow-500 flex items-center"
                                >
                                    {item.label}

                                    {/* Optional: Add dropdown arrow for certain menus */}
                                    {(item.label.toLowerCase() === "courses" ||
                                        item.label.toLowerCase() === "programs") && (
                                            <svg
                                                className="w-4 h-4 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        )}
                                </Link>
                            ))}
                    </div>




                    {/* Right Side Icons (Visible always) */}
                    <div className="flex items-center space-x-3">
                        <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>

                        {/* Hamburger Icon (only visible on mobile) */}
                        <button
                            className="md:hidden w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <div className="flex flex-col items-center space-y-4 py-6">
                        <Link href="/" className="text-gray-700 hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/courses/4" className="text-gray-700 hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                            Courses
                        </Link>
                        <Link href="/programs" className="text-gray-700 hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                            Programs
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                            About us
                        </Link>
                        <Link href="/contacts" className="text-gray-700 hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )} */}
            {/* Hamburger Button */}
            {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-800"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button> */}

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-white">
                    <div className="flex flex-col h-full">

                        {/* Header with Logo, Icons and Close Button */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <Image
                                src="/logo.png"
                                alt="STEPS Robotics"
                                width={150}
                                height={40}
                                className="object-contain"
                            />

                            <div className="flex items-center gap-3">
                                {/* Search Icon */}
                                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>

                                {/* User Icon */}
                                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </button>

                                {/* Close Button - Now beside user icon */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center hover:bg-yellow-100 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="flex flex-col">

                                {/* Home - Highlighted */}
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className={`px-6 py-4 border-l-4 font-semibold transition-colors duration-200 ${pathname === "/"
                                        ? "bg-yellow-50 border-yellow-400 text-yellow-600"
                                        : "border-transparent text-gray-800 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                                        }`}
                                >
                                    Home
                                </Link>

                                {/* Courses - Dropdown */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleDropdown('courses')}
                                        className="w-full px-6 py-4 flex items-center justify-between text-gray-800 font-medium hover:bg-gray-50"
                                    >
                                        <span>Courses</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openDropdown === 'courses' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {openDropdown === 'courses' && (
                                        <div className="bg-gray-50">
                                            {['VEX 123', 'VEX GO', 'VEX IQ', 'VEX AIM'].map((course) => (
                                                <Link
                                                    key={course}
                                                    href={`/courses/${course.toLowerCase().replace(' ', '-')}`}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block px-10 py-3 text-sm ${course === 'VEX GO'
                                                        ? 'bg-yellow-200 text-gray-800 font-semibold'
                                                        : 'text-gray-700 hover:bg-yellow-100'
                                                        }`}
                                                >
                                                    {course}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Programs - Dropdown */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleDropdown('programs')}
                                        className="w-full px-6 py-4 flex items-center justify-between text-gray-800 font-medium hover:bg-gray-50"
                                    >
                                        <span>Programs</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openDropdown === 'programs' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {openDropdown === 'programs' && (
                                        <div className="bg-gray-50">
                                            <Link href="/programs/bootcamp" onClick={() => setIsOpen(false)} className="block px-10 py-3 text-sm text-gray-700 hover:bg-yellow-100">
                                                Bootcamp
                                            </Link>
                                            <Link href="/programs/workshops" onClick={() => setIsOpen(false)} className="block px-10 py-3 text-sm text-gray-700 hover:bg-yellow-100">
                                                Workshops
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* About us - Dropdown */}
                                <Link
                                    href="/about"
                                    onClick={() => setIsOpen(false)}
                                    className={`px-6 py-4 border-l-4 font-semibold transition-colors duration-200 ${pathname === "/about"
                                        ? "bg-yellow-50 border-yellow-400 text-yellow-600"
                                        : "border-transparent text-gray-800 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                                        }`}
                                >
                                    About Us
                                </Link>

                                {/* Contact - Dropdown */}
                                <Link
                                    href="/contacts"
                                    onClick={() => setIsOpen(false)}
                                    className={`px-6 py-4 border-l-4 font-semibold transition-colors duration-200 ${pathname === "/contacts"
                                        ? "bg-yellow-50 border-yellow-400 text-yellow-600"
                                        : "border-transparent text-gray-800 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                                        }`}
                                >
                                    Contact
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
