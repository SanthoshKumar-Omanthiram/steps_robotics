// app/components/Footer.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gray-50 pt-16 pb-0 overflow-hidden" style={{backgroundImage: "url('/footer-bg.jpg')"}}>
      {/* Decorative 3D blocks */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="STEPS Robotics"
                width={200}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <address className="not-italic text-gray-700 text-sm leading-relaxed mb-6 text-font-poppins-explore">
              TVH Agnito park, Rajiv Gandhi<br />
              Salai, PTK nagar, Thiruvanmiyur,<br />
              Chennai, Tamil Nadu 600096
            </address>
            
            {/* Social Icons */}
            <div className="flex gap-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 text-font-orbitron-explore">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore text-lg">
                Home
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore text-lg">
                Courses
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore text-lg">
                Programs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore text-lg">
                About us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore text-lg">
                Contact
              </Link>
            </nav>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-3 text-font-orbitron-explore">Let's Connect</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span className="font-semibold text-font-poppins-explore">Mobile</span>
                </div>
                <a href="tel:+919787616940" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore">
                  +91 9787616940
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6" fill="none" stroke="white" strokeWidth="2"/>
                  </svg>
                  <span className="font-semibold text-font-poppins-explore">Get in Touch</span>
                </div>
                <a href="mailto:info@stepsroboticsedu.io" className="text-gray-700 hover:text-yellow-400 transition-colors break-all text-font-poppins-explore">
                  info@stepsroboticsedu.io
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span className="font-semibold text-font-poppins-explore">Mobile</span>
                </div>
                <a href="tel:+919787616940" className="text-gray-700 hover:text-yellow-400 transition-colors text-font-poppins-explore">
                  +91 9787616940
                </a>
              </div>
            </div>
          </div>

          {/* Write to us */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-font-orbitron-explore">Write to us</h3>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-yellow-400 hover:text-yellow-500 transition-colors"
                  aria-label="Submit email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </form>

            <div className="relative">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4 text-font-orbitron-explore">Talk to us today!</h4>
              <div className="relative w-32 h-32">
                <Image
                  src="/robot-mascot.png"
                  alt="Talk to us"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-all z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>

      {/* Bottom Bar */}
      <div className="relative mt-2">
        <div className="flex flex-col md:flex-row">
          {/* Yellow Section */}
          <div className="bg-yellow-400 text-gray-900 px-8 py-2 flex items-center gap-4 md:w-1/4">
            <Link href="/privacy" className="hover:underline font-medium">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="hover:underline font-medium">
              Terms of Use
            </Link>
          </div>
          
          {/* Black Section */}
          <div className="bg-black text-white px-8 py-2 flex flex-col md:flex-row items-center justify-between md:w-3/4 gap-4">
            <p className="text-sm">
              Copyright STEPS Robotics 2025. All rights reserved.
            </p>
            <p className="text-sm">
              Powered by: <span className="font-semibold">Redant Labs</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}