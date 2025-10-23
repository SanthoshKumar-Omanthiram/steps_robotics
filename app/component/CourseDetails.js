'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Clock, Users, FileText, BarChart, Monitor, Award, Facebook, Twitter, Linkedin, Share2} from "lucide-react";

export default function CourseDetails({ title }) {
  const [course, setCourse] = useState(null);
  const pathname = usePathname();
  const url = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const openPopup = (shareUrl) => {
    window.open(
      shareUrl,
      'ShareWindow',
      'height=500,width=600,resizable=yes,scrollbars=yes'
    );
  };

  const fetchCourses = async () => {
    try {
      const res = await axios.get("/api/courses");
      const courseList = Array.isArray(res.data) ? res.data : [];

      const courseDetails = await Promise.all(
        courseList.map(async (course) => {
          let objectives = [];
          let highlights = [];
          try {
            const objRes = await axios.get(`/api/courses/objectives?courseId=${course.id}`);
            objectives = Array.isArray(objRes.data)
              ? objRes.data.map((o) => o.objective)
              : [];
          } catch {}

          try {
            const hlRes = await axios.get(`/api/courses/highlights?courseId=${course.id}`);
            highlights = Array.isArray(hlRes.data)
              ? hlRes.data.map((h) => h.highlight)
              : [];
          } catch {}

          return {
            ...course,
            objectives,
            highlights,
          };
        })
      );

      if (courseDetails.length > 0) {
        setCourse(courseDetails[0]);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const highlightStyles = [
    { icon: Clock, bgColor: "bg-cyan-100", iconColor: "text-cyan-500",iconbgcolor:"#39B8E1" },
    { icon: Monitor, bgColor: "bg-orange-100", iconColor: "text-orange-500" ,iconbgcolor:"#F47525"},
    { icon: Users, bgColor: "bg-lime-100", iconColor: "text-lime-600",iconbgcolor:"#9DC61F" },
    { icon: Award, bgColor: "bg-purple-100", iconColor: "text-purple-500",iconbgcolor:"#AE71EC" }
  ];

  if (!course)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 animate-pulse">Loading course details...</p>
      </div>
    );

  return (
    <div className="container mx-auto py-10 course-details-section">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center text-sm font-medium text-gray-700">
            <span className="border-hr-text hover:text-yellow-500 transition">Courses</span>
            <span className="mx-2 border-hr-text">›</span>
            <span className="text-yellow-500 border-hr-text !font-semibold">{course.title}</span>
          </div>
          <hr className="mt-3 border-t-2 border-hr-breadcrumb border-dashed border-yellow-400" />

          <h1 className="course-details-title">
            {course.title}
          </h1>
          <div className="flex items-center gap-2 mb-[5px]">
            <span className="text-yellow-400 text-lg">★★★★☆</span>
            <span className="course-rating">{course.rating}4.5/5</span>
          </div>
          <p className="course-model-title leading-relaxed">{course.description}</p>
          
          <div>
            <h2 className="text-xl f-14-title mb-3">Course Objectives</h2>
            <ul className="space-y-2 text-gray-700">
              {course.objectives.map((obj, i) => (
                <li key={i} className="flex objective-points items-start gap-2">
                  <span className="objective-bullets">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke="#FFA228" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12L12 8" stroke="#FFA228" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12L8 12" stroke="#FFA228" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16L16 12" stroke="#FFA228" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="course-highlights-title mb-3">Course Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
   {course.highlights.map((hl, i) => {
  const style = highlightStyles[i % highlightStyles.length];
  const IconComponent = style.icon;

  return (
    <div
      key={i}
      className={`rounded-sm p-3 flex items-center gap-4 hover:shadow-md transition-all duration-300 ${style.bgColor}`}
    >
    <div
  className="rounded-full p-3 flex items-center justify-center"
  style={{ backgroundColor: style.iconbgcolor }}
>
<IconComponent
  className={`${style.iconColor} text-white`}
  size={28}
  strokeWidth={2}
/>
      </div>
      <p className="highlights-points flex-1">{hl}</p>
    </div>
  );
})}
            </div>
          </div>
        </div>

<div className="bg-white shadow-lg course-details-class-popup -mt-[120px] mb-[130px] rounded-2xl p-6 space-y-6 relative">
  <div className="relative">
    <Image
      src="/course-demo.png"
      alt={course.title}
      width={400}
      height={250}
      className="rounded-xl object-cover w-full"
    />
    <div className="absolute -right-[16px] top-[96px] sm:w-24 md:w-28">
      <div className="relative">
        <Image
          src="/offers.png"
          alt="Special Offer"
          width={110}
          height={110}
          className="h-auto w-[110px] drop-shadow-lg"
        />
      </div>
    </div>
  </div>

  <div>
    <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">
      Course Includes
    </h2>
    <div className="space-y-3 text-gray-700 text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="text-yellow-500" size={18} />
          <span className="course-include-title">Batch of Students:</span>
        </div>
        <span className="course-include-description">50 Students</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="text-yellow-500" size={18} />
          <span className="course-include-title">Lessons:</span>
        </div>
        <span className="course-include-description">{course.lessons || "12 Lessons"}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="text-yellow-500" size={18} />
          <span className="course-include-title">Duration:</span>
        </div>
        <span className="course-include-description">{course.duration || "12 Weeks"}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart className="text-yellow-500" size={18} />
          <span className="course-include-title">Quiz:</span>
        </div>
        <span className="course-include-description">1 Quiz</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="text-yellow-500" size={18} />
          <span className="course-include-title">Level:</span>
        </div>
        <span className="course-include-description">{course.level || "All Levels"}</span>
      </div>
    </div>
  </div>
<div className="pt-1 border-t border-gray-100">
  <div className="flex social-icons-course items-center justify-between text-gray-600">
    <span className="share-icon">Share:</span>
  <div className="flex items-center gap-2">

      <Share2
        size={18}
        className="hover:text-yellow-500 cursor-pointer transition-colors"
        onClick={handleCopyLink}
        title="Copy link"
      />

      <Facebook
        size={18}
        className="hover:text-yellow-500 cursor-pointer transition-colors"
        onClick={() =>
          openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        }
        title="Share on Facebook"
      />

      <Twitter
        size={18}
        className="hover:text-yellow-500 cursor-pointer transition-colors"
        onClick={() =>
          openPopup(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)
        }
        title="Share on Twitter"
      />

      <Linkedin
        size={18}
        className="hover:text-yellow-500 cursor-pointer transition-colors"
        onClick={() =>
          openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        }
        title="Share on LinkedIn"
      />
    </div>
  </div>
</div>
   <div className="flex justify-center">
                        <Link
                          href={`/courses/${course.slug || course.id || "#"}`}
                          className="inline-flex items-center gap-3 text-white px-3 py-1 rounded-full transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-[#FF6F28] to-[#FFCF20] hover:from-[#FFCF20] hover:to-[#FF6F28]"
                        >
Enroll Now                          <span className="text-xl leading-none flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#FF6F28] shadow-md">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
</div>
      </div>
    </div>
  );
}