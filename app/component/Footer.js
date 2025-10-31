"use client";
import React, { useEffect, useState } from "react";
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
import { footer } from "../utils/fetchData";
import { getNavbarData } from "../utils/menuItems";

export default function Footer() {
  const [boxes, setBoxes] = React.useState([]);
  const [menuItems, setMenuItems] = useState([]);



  const [sectionData, setSectionData] = useState({});
  useEffect(() => {
    async function loadData() {
      try {
        const data = await footer();
        console.log("✅ API Data for the Footer:", data);

        // ✅ Adjust according to structure
        setSectionData(data);


      } catch (err) {
        console.error("❌ Failed to load Why Choose STEPS data:", err);
      }
    }
    loadData();
  }, []);



  useEffect(() => {
    async function loadData() {
      try {
        const { sortedItems } = await getNavbarData();
        setMenuItems(sortedItems);
      } catch (err) {
        console.error("Footer data fetch error:", err);
      }
    }
    loadData();
  }, []);





  return (

    <footer className="footer relative overflow-hidden">

      <div className="container mx-auto border-gray-200 mb-8 relative z-10">
        <div className="container-custom px-4 py-8">
          {/* 3 Columns (col-md-4 each) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Left Column - Logo & Address */}
            <div className="footerlogo text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Image
                  src={sectionData.logo_url}
                  alt="Steps Robotics Logo"
                  width={194}
                  height={104}
                  className="object-contain"
                  priority
                />
              </div>

              {/* <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p className="footer-address-company">
                  TVH Agnito Park, Rajiv Gandhi Salai
                </p>
                <p className="footer-address-company">PTK Nagar, Thiruvanmiyur,</p>
                <p className="footer-address-company">
                  Chennai, Tamil Nadu 600096
                </p>
              </div> */}
              <div className="text-sm text-gray-700 space-y-1 mb-4">
                {sectionData.address
                  ?.split("|")
                  .map((line, i) => (
                    <p key={i} className="footer-address-company">
                      {line.trim()}
                    </p>
                  ))}
              </div>


              <div className="flex justify-center md:justify-start space-x-2">
                {[
                  { Icon: Facebook, link: sectionData.facebook },
                  { Icon: Twitter, link: sectionData.twitter },
                  { Icon: Instagram, link: sectionData.instagram },
                  { Icon: Youtube, link: sectionData.youtube },
                  { Icon: Linkedin, link: sectionData.linkedin },
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition"
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </a>
                ))}
              </div>

            </div>

            {/* Middle Column - Links + Let's Connect (side by side) */}
            <div className="text-center md:text-left">
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Links Section */}
                <div className="flex-1">
                  <h3 className="text-xl footer-links-title stem-gold mb-6">
                    Links
                  </h3>
                  <ul className="space-y-3">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <a href={item.href || "#"} className="footer-links hover:text-yellow-500 transition">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Let's Connect Section */}
                <div className="flex-1">
                  <h3 className="text-xl footer-links-title stem-gold mb-6">
                    Let's Connect
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-center md:justify-start items-center space-x-2 text-yellow-500 mb-2">
                        <Phone className="w-5 h-5" />
                        <span className="footer-sub-title stem-gold">
                          Mobile
                        </span>
                      </div>
                      <p className="footer-links">{sectionData.mobile}</p>
                    </div>

                    <div>
                      <div className="flex justify-center md:justify-start items-center space-x-2 text-yellow-500 mb-2">
                        <Mail className="w-5 h-5" />
                        <span className="footer-sub-title stem-gold">Email</span>
                      </div>
                      <p className="footer-links">{sectionData.email}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Write to Us */}
            <div className="text-center md:text-left">
              <h3 className="text-xl footer-links-title stem-gold mb-6">
                Write to Us
              </h3>
              <div className="space-y-4">
                <div className="relative mx-auto md:mx-0 max-w-xs md:max-w-none">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition">
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </div>

                <div className="relative">
                  <h4 className="text-xl footer-links-title stem-gold">
                    Talk to us today!
                  </h4>

                  <div className="absolute">
                    <div className="w-30 h-50 right-200">
                      <img src={sectionData.talk_image} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
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
      <div className="w-full  flex flex-col sm:flex-row text-sm relative z-10">
        <div className="relative bg-[#FFD700] sm:w-[40%] w-full flex justify-center items-center h-10 sm:h-8">
          <div className="flex space-x-2 text-black">
            <a href="#" className="hover:underline footer-bottom-text">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline footer-bottom-text">
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
          <p className="text-center sm:text-left footer-bottom-text text-xs sm:text-sm leading-tight sm:ml-[65px]">
            Copyright STEPS Robotics 2025. All rights reserved.
          </p>
          <p className="text-center sm:text-right footer-bottom-text text-xs sm:text-sm leading-tight sm:mr-[30px] mt-1 sm:mt-0">
            Powered by: <span className="font-medium">Redant Labs</span>
          </p>
        </div>
      </div>
    </footer>

  );
}