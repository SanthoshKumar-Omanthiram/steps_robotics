"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [courses, setCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("/api/courses");
        const data = Array.isArray(res.data) ? res.data : [];
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white header_part shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
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

            {/* Courses Menu */}
            <div className="relative" ref={dropdownRef}>
              <Link
                href="/courses"
                className="nav-link text-gray-700 hover:text-yellow-500 flex items-center gap-1"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Courses
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : "rotate-0"}`}
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
              </Link>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  {courses.length > 0 ? (
                    courses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                      >
                        {course.title}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No courses</div>
                  )}
                </div>
              )}
            </div>

            <Link href="/programs" className="nav-link text-gray-700 hover:text-yellow-500 flex items-center">
              Programs
            
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
  );
};

export default Navbar;
