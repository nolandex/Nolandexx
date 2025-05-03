import React from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8 bg-black">
      <div className="container mx-auto px-4 text-center">
        {/* Title - Positioned at the top */}
        <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-10 text-white">
          NolanDex
        </h1>

        {/* Buttons - Below the title */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto mt-8">
          {/* Button 1: Pesan di Website */}
          <a
            href="https://nolandex.my.id"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md bg-gray-800"
          >
            <FaGlobe className="text-white" />
            <span className="text-white">Pesan di Website</span>
          </a>

          {/* Button 2: Pesan di WhatsApp */}
          <a
            href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md bg-gray-800"
          >
            <FaWhatsapp className="text-white" />
            <span className="text-white">Pesan di WhatsApp</span>
          </a>

          {/* Button 3: Pesan di Sini */}
          <a
            href="#contact-section"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md bg-gray-800"
          >
            <FaCommentDots className="text-white" />
            <span className="text-white">Pesan di Sini</span>
          </a>

          {/* Button 4: Social Media Icons */}
          <div
            className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md bg-gray-800"
          >
            <a
              href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg=="
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1"
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com/nolandexco"
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://t.me/nolandex"
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="mailto:nolandexco@gmail.com"
              className="text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Mini Store Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 1</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 2</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>

            {/* Row 2 */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 3</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 4</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>

            {/* Row 3 */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 5</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div> {/* Placeholder Image */}
              <h3 className="text-lg font-semibold text-white mb-2">Product 6</h3>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section for Button 3 */}
        <section id="contact-section" className="mt-20">
          {/* Placeholder for additional content, e.g., contact form */}
        </section>

        {/* Background Decorative Elements - Dashed Lines and Dots */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="30%" y1="40%" x2="50%" y2="10%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="50%" y1="10%" x2="70%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="70%" y1="60%" x2="90%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="10%" cy="20%" r="4" fill="white" />
            <circle cx="30%" cy="40%" r="4" fill="white" />
            <circle cx="50%" cy="10%" r="4" fill="white" />
            <circle cx="70%" cy="60%" r="4" fill="white" />
            <circle cx="90%" cy="30%" r="4" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
