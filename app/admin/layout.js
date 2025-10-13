'use client';
import { useState } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./admin.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${poppins.variable} font-sans flex`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className={`admin-main bg-gray-50 min-h-screen w-full transition-all duration-300 ml-0 ${
          collapsed ? 'md:ml-14' : 'md:ml-64'
        } px-4 sm:px-6 lg:px-8 py-6`}
      >
        {children}
      </main>
    </div>
  );
}
