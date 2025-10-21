'use client';
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import axios from "axios";
export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
  try {
    const res = await axios.post("/api/contact", formData);
    alert(res.data.message);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong!");
  }
};

  return (
    <div className="min-h-screen getin-touch p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="get-in-touch-image">
              <div className="relative w-full max-w-md">
    <Image 
            src='/contact-form-img.jpg' 
            alt='How it works process flow' 
            className='w-full h-auto object-contain'
            width={1200}
            height={200}
            priority
          />
              </div>
            </div>
            <div className="p-5 get-in-touch-form">
              <h2 className="text-4xl get-in-touch-title font-bold mb-4">
                Get In Touch
              </h2>
              
              <p className="get-in-touch-subtitle mb-2 leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.
              </p>

           <div className="space-y-6">

  <div className="grid sm:grid-cols-2 gap-4">
    <div className="relative mt-6">
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="peer w-full px-4 py-2 border border-gray-300 rounded-lg contact-field-placeholder placeholder:[contact-field-placeholder] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
      />
      <label
        htmlFor="firstName"
        className="form-contact-label absolute left-0 ml-1 bg-white px-1 text-sm duration-100 ease-linear
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
          peer-focus:ml-1 peer-focus:px-1 peer-focus:text-sm"
      >
        First Name <span className="text-red-500">*</span>
      </label>
    </div>
    <div className="relative mt-6">
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="peer w-full px-4 py-2 border border-gray-300 rounded-lg contact-field-placeholder placeholder:[contact-field-placeholder] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
      />
      <label
        htmlFor="lastName"
        className="form-contact-label absolute left-0 ml-1 bg-white px-1 text-sm duration-100 ease-linear
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
          peer-focus:ml-1 peer-focus:px-1 peer-focus:text-sm"
      >
        Last Name
      </label>
    </div>
  </div>

  <div className="relative mt-6">
    <input
      type="email"
      name="email"
      id="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="yourmail@gmail.com"
      className="peer w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg contact-field-placeholder placeholder:[contact-field-placeholder] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
    />
    <label
      htmlFor="email"
      className="form-contact-label absolute left-0 ml-1 bg-white px-1 text-sm duration-100 ease-linear
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:ml-1 peer-focus:px-1 peer-focus:text-sm"
    >
      E-mail <span className="text-red-500">*</span>
    </label>
    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-500" />
  </div>

  <div className="relative mt-6">
    <input
      type="tel"
      name="phone"
      id="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91 9787616940"
      className="peer w-full px-4 py-2 pr-12 border border-gray-300 contact-field-placeholder placeholder:[contact-field-placeholder] rounded-lg  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
    />
    <label
      htmlFor="phone"
      className="form-contact-label absolute left-0 ml-1  bg-white px-1 text-sm duration-100 ease-linear
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:ml-1 peer-focus:px-1 peer-focus:text-sm"
    >
      Phone <span className="text-red-500">*</span>
    </label>
    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-500" />
  </div>

  <div className="relative mt-6">
    <textarea
      name="message"
      id="message"
      value={formData.message}
      onChange={handleChange}
      rows="6"
      placeholder="Your message"
      className="peer w-full px-4 py-2 border border-gray-300 contact-field-placeholder placeholder:[contact-field-placeholder] rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
    ></textarea>
    <label
      htmlFor="message"
      className="form-contact-label absolute left-0 ml-1 bg-white px-1 text-sm duration-100 ease-linear
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:ml-1 peer-focus:px-1 peer-focus:text-sm"
    >
      Message
    </label>
  </div>

  <div className="flex justify-center pt-2">
    <button
      onClick={handleSubmit}
      className="group bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
    >
      SEND MESSAGE
      <div className="bg-white font-bold rounded-full p-2 group-hover:translate-x-1 transition-transform">
        <ArrowRight className="w-5 h-5 text-orange-500" />
      </div>
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}