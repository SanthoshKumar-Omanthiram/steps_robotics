import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactWay() {
  return (
    <div className='contact-way container mx-auto'>
      <div className='contact-better-main mt-[45px]'>
        <p className="contact-way-title text-3xl font-bold">
          We are here to help you
          <span className="stem-gold pl-2">know us in a better way</span>
        </p>
        <p className="contact-model-title mt-3 text-gray-700 max-w-4xl">
          Whether you're a parent exploring courses for your child, a student eager to learn, a professional interested in our franchise opportunities, or someone looking to join our team of trainers, we'd love to hear from you. Our team is always approachable and committed to responding promptly.
        </p>
      </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <div className="bg-yellow-50 border-1 shadow border-yellow-200 pt-[5px] pr-[10px] pb-[10px] pl-[10px] rounded-3xl flex flex-row items-start">
        <div className="w-1/3 flex justify-center mt-[21px]">
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center">
            <MapPin className="w-8 h-8 text-gray-800" />
          </div>
        </div>

        <div className="w-2/3">
          <h3 className="contact-main-title mb-2">Location</h3>
          <p className="contact-subtitle leading-relaxed">
            TVH Agnito park, Rajiv Gandhi Salai, PTK Nagar, Thiruvanmiyur,
            Chennai, Tamil Nadu 600096.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-1 shadow border-yellow-200 rounded-3xl pt-[5px] pr-[10px] pb-[10px] pl-[10px] flex flex-row items-start">
        <div className="w-1/3 flex justify-center mt-[21px]">
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center">
            <Phone className="w-8 h-8 text-gray-800" />
          </div>
        </div>

        <div className="w-2/3">
          <h3 className="contact-main-title mb-2">Call Now</h3>
          <div className="contact-subtitle space-y-1">
            <p>+91 9787616940</p>
            <p>+91 9787616940</p>
            <p>044 223344567</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-1 shadow border-yellow-200 rounded-3xl pt-[5px] pr-[10px] pb-[10px] pl-[10px] flex flex-row items-start">
        <div className="w-1/3 flex justify-center mt-[21px]">
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center">
            <Mail className="w-8 h-8 text-gray-800" />
          </div>
        </div>

        <div className="w-2/3">
          <h3 className="contact-main-title mb-2">Email Now</h3>
          <div className="contact-subtitle space-y-1">
            <p>info@stepsrobotics.com</p>
            <p>support@stepsrobotics.com</p>
            <p>enquiry@stepsrobotics.com</p>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}