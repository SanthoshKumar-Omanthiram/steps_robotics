"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { fetchLogo, fetchNavbar } from "@/app/utils/fetchData";
import { getNavbarData } from "../utils/menuItems";

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
        const { logoUrl, sortedItems } = await getNavbarData();
        setLogo(logoUrl);
        setMenuItems(sortedItems);

      } catch (err) {
        console.error("Navbar data fetch error:", err);
      }
    }
    loadData();
  }, []);


  return (
    <nav className="bg-white header_part shadow-sm fixed top-0 left-0 right-0 z-50">
      <header className="w-full h-[5px] bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-100 h-full bg-yellow-400 [clip-path:polygon(0_0,94%_0,100%_100%,0%_100%)]"></div>
      </header>


      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Steps Robotics Logo"
                width={250}
                height={60}
                className="h-16 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden navbar md:flex items-center space-x-8">
            {menuItems
              .filter((item) => item.visible)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  ref={item.label.toLowerCase() === "courses" ? dropdownRef : null}
                  onMouseEnter={() => item.label.toLowerCase() === "courses" && setShowDropdown(true)}
                  onMouseLeave={() => item.label.toLowerCase() === "courses" && setShowDropdown(false)}
                >
                  {item.label.toLowerCase() === "courses" ? (
                    // Courses with dropdown
                    <>
                      <Link
                        href={item.href}
                        className="nav-link text-gray-700 hover:text-yellow-500 flex items-center"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
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

                      {/* Dropdown Menu */}
                      {showDropdown && courses.length > 0 && (
                        <div className="absolute top-full left-0  w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                          {courses.map((course) => (
                            <Link
                              key={course.id}
                              href={`/courses/${course.id}`}
                              className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors"
                            >
                              {course.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Regular menu items
                    <Link
                      href={item.href}
                      className="nav-link text-gray-700 hover:text-yellow-500 flex items-center"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
          </div>




          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">

            <button className="cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">

              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link href="/login" className="">
              <button className="cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </Link>

            {/* Hamburger Icon */}
            <button
              className="cursor-pointer md:hidden w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
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
      {
        isOpen && (
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

export default Navbar
