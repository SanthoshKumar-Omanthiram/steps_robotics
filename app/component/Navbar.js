"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  return (
    <nav className="bg-white header_part shadow-sm sticky top-0 left-0 right-0 z-50">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-gray-700 hover:text-yellow-500">
              Home
            </Link>

            {/* ✅ Courses Menu (Now redirects on click + dropdown) */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-1">
                <Link
                  href="/courses"
                  className="nav-link text-gray-700 hover:text-yellow-500"
                >
                  Courses
                </Link>
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-gray-700 hover:text-yellow-500"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : "rotate-0"
                    }`}
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
                </button>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute left-0 mt-3 w-52 bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden z-50 animate-fade-in">
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

            <Link
              href="/programs"
              className="nav-link text-gray-700 hover:text-yellow-500 flex items-center"
            >
              Programs
            </Link>

            <Link href="/about" className="nav-link text-gray-700 hover:text-yellow-500">
              About us
            </Link>
            <Link href="/contacts" className="nav-link text-gray-700 hover:text-yellow-500">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Hamburger Icon */}
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

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Image
                src="/logo.png"
                alt="STEPS Robotics"
                width={150}
                height={40}
                className="object-contain"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center hover:bg-yellow-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 border-l-4 font-semibold transition-colors duration-200 ${
                    pathname === "/"
                      ? "bg-yellow-50 border-yellow-400 text-yellow-600"
                      : "border-transparent text-gray-800 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                  }`}
                >
                  Home
                </Link>

                {/* ✅ Mobile Courses Menu */}
                <div className="border-b border-gray-200">
                  <Link
                    href="/courses"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-50"
                  >
                    Courses
                  </Link>

                  {courses.length > 0 && (
                    <div className="bg-gray-50">
                      {courses.map((course) => (
                        <Link
                          key={course.id}
                          href={`/courses/${course.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-10 py-3 text-sm text-gray-700 hover:bg-yellow-100"
                        >
                          {course.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/programs"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-50"
                >
                  Programs
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-50"
                >
                  About Us
                </Link>
                <Link
                  href="/contacts"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-gray-800 font-semibold hover:bg-yellow-50"
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
