"use client";
import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  ArrowUp,
  Send,
} from "lucide-react";

export default function Footer() {
  const [boxes, setBoxes] = React.useState([]);

  React.useEffect(() => {
    const initialBoxes = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 30 + Math.random() * 30,
      rotation: Math.random() * 360,
      color: [
        "bg-blue-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-red-400",
        "bg-purple-400",
        "bg-orange-400",
        "bg-pink-400",
        "bg-cyan-400",
      ][Math.floor(Math.random() * 8)],
    }));
    setBoxes(initialBoxes);
  }, []);

  return (
    <footer className="footer relative overflow-hidden">
      {/* Floating animated boxes */}
      <div className="absolute inset-0 pointer-events-none">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`absolute ${box.color} opacity-40 rounded-md`}
            style={{
              left: `${box.left}%`,
              width: `${box.size}px`,
              height: `${box.size}px`,
              transform: `rotate(${box.rotation}deg)`,
              animation: `fall ${box.duration}s linear ${box.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            top: -100px;
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-center">
            <Image
              src="/footer-logo.png"
              alt="Steps Robotics Logo"
              width={194}
              height={104}
              className="object-contain mb-4"
              priority
            />

            <div className="text-sm text-gray-700 space-y-1 mb-4 text-center">
              <p>TVH Agnito Park, Rajiv Gandhi Salai</p>
              <p>PTK Nagar, Thiruvanmiyur,</p>
              <p>Chennai, Tamil Nadu 600096</p>
            </div>

            <div className="flex justify-center space-x-2">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition"
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-yellow-500 mb-6">
              Links
            </h3>
            <ul className="space-y-3 text-center">
              {["Home", "Courses", "Programs", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-yellow-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Let’s Connect */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-yellow-500 mb-6">
              Let’s Connect
            </h3>
            <div className="space-y-4 text-center">
              <div>
                <div className="flex justify-center items-center space-x-2 text-yellow-500 mb-1">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Mobile</span>
                </div>
                <p className="text-gray-700 text-sm">+91 97876 16940</p>
              </div>

              <div>
                <div className="flex justify-center items-center space-x-2 text-yellow-500 mb-1">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-gray-700 text-sm">
                  info@stepsroboticsedu.io
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 - Write to Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-yellow-500 mb-6">
              Write to Us
            </h3>
            <div className="space-y-4 text-center">
              <div className="relative w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition">
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-yellow-500 mb-2">
                  Talk to us today!
                </h4>
                <p className="text-gray-700 text-sm">
                  We're happy to answer your questions and help you get started
                  with our courses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:scale-110 transition z-20"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex flex-col sm:flex-row text-sm relative z-10">
        <div className="relative bg-[#FFD700] sm:w-[40%] w-full flex justify-center items-center h-10 sm:h-8">
          <div className="flex space-x-2 text-black">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>
        </div>

        <div
          className="bg-black sm:w-[64%] w-full flex flex-col sm:flex-row justify-between items-center text-white px-3 sm:px-4 h-10 sm:h-8 sm:-ml-[30px]"
          style={{
            clipPath: "polygon(30px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <p className="text-center sm:text-left text-xs sm:text-sm leading-tight sm:ml-[65px]">
            Copyright STEPS Robotics 2025. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-xs sm:text-sm leading-tight sm:mr-[30px] mt-1 sm:mt-0">
            Powered by: <span className="font-medium">Redant Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
