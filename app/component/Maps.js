import React from 'react';

export default function Maps() {
  return (
    <div className="maps relative w-full h-[400px] md:h-[500px] shadow-lg overflow-hidden">
      <div className="w-full h-full overflow-hidden bg-white">
        <iframe
          title="Redant Labs Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291.351827455594!2d80.23990160662257!3d12.970162411470813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d686717aaab%3A0x4b5acc44eb083082!2sRedant%20Labs%20Private%20Limited!5e1!3m2!1sen!2sin!4v1760003886898!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
