// import { useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "../StickyBox";
// import { supabase } from "../../superbase/supabaseClient";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-400 text-white text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let’s Connect
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're excited to explore how we can assist in your digital journey.
          </p>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* LEFT SIDE — OFFICE DETAILS */}
          <div className="w-full space-y-6 text-start">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-3">Office</h2>
              <p className="text-gray-800 text-[24px] font-semibold">
                VH'S TECHSPHERE PRIVATE LIMITED
              </p>
              <p className="text-gray-600 small-text leading-relaxed mt-1">
                A212, Ittina Abby, LBS Nagar, Kaggadasapura, Bengaluru,
                Karnataka, Bangalore. 560017.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Contact Details
              </h3>

              {/* CONTACT ITEMS */}
              <div className="space-y-4">
                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-1 text-blue-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <p className="text-gray-700 small-text hover:text-blue-600">
                    info@vhtechsphere.com
                  </p>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6  text-blue-600"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2
                     19.79 19.79 0 0 1-8.63-3.07
                     19.5 19.5 0 0 1-6-6
                     19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.22 2h3
                     a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.33
                     a2 2 0 0 1-.45 2.23L8.09 9.91a16 16 0 0 0 6 6l1.63-1.63
                     a2 2 0 0 1 2.23-.45c.73.35 1.52.6 2.33.72A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  <p
                    href="tel:+918921043470"
                    className="text-gray-700 small-text hover:text-blue-600"
                  >
                    +91 8921043470
                  </p>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <p className="text-gray-700 small-text leading-relaxed">
                    A212, Ittina Abby, LBS Nagar, Kaggadasapura,
                    <br />
                    Bengaluru, Karnataka 560017.
                  </p>
                </div>
              </div>
              <Link to="/">
                <h1 className="mt-4 text-[20px] hover:text-blue-300">
                  website: www.vhstechsphere.com
                </h1>
              </Link>
              <h1 className="mt-4 text-[20px]">CIN : U47411KA2025PTC212946</h1>
            </div>
          </div>

          {/* RIGHT SIDE — MAP */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4181.655452873386!2d77.67232817539141!3d12.97003998734521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e03dcbdb2f%3A0x3dbaefb7af124590!2sIttina%20Abby!5e1!3m2!1sen!2sin!4v1761290163150!5m2!1sen!2sin"
              className="w-full h-[450px] border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4  bg-white" id="form">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 small-text">
              Get in touch with our team. We're here to help with your
              technology needs.
              {/* We'd love to hear from you — please fill out the form below. */}
            </p>
          </div>
          {/* form  */}
          <Form />
        </section>

        {/* Location Section */}
        <section className="bg-gray-100 py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
            Find us & visit our innovation hub
          </h2>
          <p className="text-gray-700 font-semibold">
            VH'S TECHSPHERE PRIVATE LIMITED
          </p>
        </section>
      </div>
      <StickyBox />
    </>
  );
}
