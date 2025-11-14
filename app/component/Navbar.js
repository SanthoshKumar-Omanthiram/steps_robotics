"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { fetchLogo, fetchNavbar } from "@/app/utils/fetchData";
import { getNavbarData } from "../utils/menuItems";
import axios from "axios";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [courses, setCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [objectives, setObjectives] = useState([]);
  const [highlights, setHighlights] = useState([]);


  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const res = await axios.get("/api/courses");
  //       const data = Array.isArray(res.data) ? res.data : [];
  //       setCourses(data);
  //     } catch (err) {
  //       console.error("Failed to fetch courses:", err);
  //     }
  //   };
  //   fetchCourses();
  // }, []);

  // 🧠 Fetch all data
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const { data: courseList } = await axios.get("/api/courses");
        setCourses(courseList);

        const allObjectives = [];
        const allHighlights = [];

        // Loop through each course
        for (const course of courseList) {
          const [objRes, highRes] = await Promise.all([
            axios.get(`/api/courses/objectives?courseId=${course.id}`),
            axios.get(`/api/courses/highlights?courseId=${course.id}`),
          ]);
          allObjectives.push(...objRes.data);
          allHighlights.push(...highRes.data);
        }

        setObjectives(allObjectives);
        setHighlights(allHighlights);
        console.log("✅ Loaded data:", { courses: courseList.length, allObjectives, allHighlights });
      } catch (err) {
        console.error("❌ Failed to fetch data:", err);
      }
    };

    fetchAllData();
  }, []);

  // 🔍 Search
  const handleSearch = (value) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const term = value.toLowerCase();

    const matchCourses = courses.filter(
      (c) =>
        c.title?.toLowerCase().includes(term) ||
        c.description?.toLowerCase().includes(term)
    );

    const matchedCourseIdsFromObjectives = objectives
      .filter((o) => o.objective?.toLowerCase().includes(term))
      .map((o) => o.course_id);

    const matchedCourseIdsFromHighlights = highlights
      .filter((h) => h.highlight?.toLowerCase().includes(term))
      .map((h) => h.course_id);

    const allMatchedIds = [
      ...new Set([
        ...matchCourses.map((c) => c.id),
        ...matchedCourseIdsFromObjectives,
        ...matchedCourseIdsFromHighlights,
      ]),
    ];

    const finalMatches = courses.filter((c) => allMatchedIds.includes(c.id));

    console.log("✅ Search matches:", finalMatches);
    setResults(finalMatches);
  };

  // ✅ Highlight the search term inside text
  const getSnippetWithHighlight = (text, term, contextLength = 40) => {
    if (!term || !text) return null;
    const lowerText = text.toLowerCase();
    const lowerTerm = term.toLowerCase();
    const index = lowerText.indexOf(lowerTerm);

    if (index === -1) return null; // no match

    // Get context around the match
    const start = Math.max(0, index - contextLength);
    const end = Math.min(text.length, index + term.length + contextLength);
    const snippet = text.substring(start, end);

    // Highlight matched term
    const regex = new RegExp(`(${term})`, "gi");
    const highlighted = snippet.replace(
      regex,
      `<span class="text-yellow-500 font-semibold">$1</span>`
    );

    return `${start > 0 ? "..." : ""}${highlighted}${end < text.length ? "..." : ""}`;
  };





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


      {/* TOP STRIP */}
      <div className="w-full flex flex-col sm:flex-row text-sm relative z-10">

        <div className="bg-[#FFD700] sm:w-[40%] w-full flex justify-center items-center h-4 sm:h-2">
          <div className="flex space-x-2 text-black">
          </div>
        </div>

        <div className="bg-black sm:w-[64%] w-full flex justify-center items-center h-2 
                  
                 
                  sm:-ml-[30px]
                                
                  sm:[clip-path:polygon(20px_0,100%_0,100%_100%,0_100%)]">
          <div className="flex space-x-2 text-black">
          </div>
        </div>

        {/* <div
          className="
                  bg-black  
                  sm:w-[64%] w-full 
                  flex flex-col sm:flex-row 
                  justify-center sm:justify-between 
                  items-center text-white 
                  px-3 sm:px-4 
                  h-1 py-2 -sm:h-2
                  sm:-ml-[30px]
                  text-center
                  sm:[clip-path:polygon(30px_0,100%_0,100%_100%,0_100%)]
                "
        >
        </div> */}

      </div>
      {/* <div className="relative w-full h-[8px]">
        <div className="absolute inset-0 bg-[#094b23] z-0"></div>
        <div className="absolute inset-0 bg-yellow-400 z-20 "></div>
      </div> */}

      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Steps Robotics Logo"
                width={700}
                height={60}
                className="h-16 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden navbar md:flex items-center space-x-8">
            {menuItems
              .filter((item) => item.visible)
              .map((item) => {
                // const isActive = pathname.startsWith(item.href);
                const isActive =
                  item.href === "/"
                    ? pathname === "/" // ✅ Home active only on root
                    : pathname.startsWith(item.href); // ✅ Subpages highlight parent
                const isCourses = item.label.toLowerCase() === "courses";

                return (
                  <div
                    key={item.id}
                    className="relative"
                    ref={isCourses ? dropdownRef : null}
                    onMouseEnter={() => isCourses && setShowDropdown(true)}
                    onMouseLeave={() => isCourses && setShowDropdown(false)}
                  >
                    {isCourses ? (
                      <>
                        <Link
                          href={item.href}
                          className={`nav-link flex items-center ${isActive
                            ? "text-gray-700 text-yellow-500"
                            : "text-gray-700 hover:text-yellow-500"
                            }`}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 ml-1 transition-transform ${showDropdown ? "rotate-180" : ""
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
                        </Link>

                        {/* Dropdown Menu */}
                        {showDropdown && courses.length > 0 && (
                          <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
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
                      <Link
                        href={item.href}
                        className={`nav-link flex items-center ${isActive
                          ? "text-gray-700 text-yellow-500"
                          : "text-gray-700 hover:text-yellow-500"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">

            {/* <button className="cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}
            {/* 🔍 Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* 🪄 Fullscreen popup */}
            {isSearchOpen && (
              <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-24 p-4 overflow-y-auto">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute top-6 right-6 text-gray-800 hover:text-black text-3xl font-light"
                >
                  ✕
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search courses..."
                  autoFocus
                  className="w-full max-w-lg border border-gray-300 rounded-full px-5 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 text-lg"
                />

                {/* Results */}
                <div className="mt-6 w-full max-w-lg space-y-3">
                  {results.length > 0 ? (
                    results.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          router.push(`/courses/${course.id}`);
                        }}
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg p-4 shadow-sm transition"
                      >
                        {/* <h3 className="font-semibold text-lg text-gray-800">{course.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p> */}

                        <h3
                          className="font-semibold text-lg text-gray-800"
                          dangerouslySetInnerHTML={{
                            __html:
                              getSnippetWithHighlight(course.title, query) ||
                              course.title,
                          }}
                        ></h3>

                        <p
                          className="text-gray-600 text-sm"
                          dangerouslySetInnerHTML={{
                            __html:
                              getSnippetWithHighlight(course.description, query) ||
                              getSnippetWithHighlight(
                                objectives.find((o) => o.course_id === course.id)?.objective,
                                query
                              ) ||
                              getSnippetWithHighlight(
                                highlights.find((h) => h.course_id === course.id)?.highlight,
                                query
                              ) ||
                              course.description,
                          }}
                        ></p>


                      </div>
                    ))
                  ) : (
                    query && <p className="text-gray-500 text-center mt-4">No results found.</p>
                  )}
                </div>
              </div>
            )}

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
