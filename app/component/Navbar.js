import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div>
            <nav className="bg-white header_part shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Steps Robotics Logo"
                                width={250}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="nav-link text-gray-700 hover:text-yellow-500">
                                Home
                            </Link>
                            <Link href="/courses" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
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
                            <Link href="/about" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                                About us
                            </Link>
                            <Link href="/contacts" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
                                Contact
                            </Link>
                        </div>

                        {/* Icons */}
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
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
