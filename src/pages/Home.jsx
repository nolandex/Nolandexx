import React from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 pb-8">
      <div className="container mx-auto px-4 text-center">
        {/* Title - hanya NolanDex */}
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          NolanDex
        </h1>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
          {/* Button 1: Pesan di Website */}
          <a
            href="https://nolandex.my.id"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaGlobe />
            <span>Pesan di Website</span>
          </a>

          {/* Button 2: Pesan di WhatsApp */}
          <a
            href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaWhatsapp />
            <span>Pesan di WhatsApp</span>
          </a>

          {/* Button 3: Pesan di Sini */}
          <a
            href="#contact-section"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaCommentDots />
            <span>Pesan di Sini</span>
          </a>

          {/* Button 4: Social Media Icons */}
          <div className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
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
      </div>
    </section>
  );
};

export default Home;
