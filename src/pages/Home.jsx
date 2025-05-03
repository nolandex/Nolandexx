import React from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative z-10 pt-10 pb-8 bg-[#f0f4ff]">
      <div className="container mx-auto px-4 text-center">
        {/* Title - di atas */}
        <h1 className="text-5xl md:text-7xl font-bold mb-10 text-[#111] font-['Arial',_sans-serif]">
          NolanDex
        </h1>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
          {/* Button 1: Pesan di Website */}
          <a
            href="https://nolandex.my.id"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 w-full max-w-md shadow-[0_6px_12px_rgba(0,0,0,0.1)] font-['Arial',_sans-serif] font-semibold"
          >
            <FaGlobe />
            <span>Pesan di Website</span>
          </a>

          {/* Button 2: Pesan di WhatsApp */}
          <a
            href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 w-full max-w-md shadow-[0_6px_12px_rgba(0,0,0,0.1)] font-['Arial',_sans-serif] font-semibold"
          >
            <FaWhatsapp />
            <span>Pesan di WhatsApp</span>
          </a>

          {/* Button 3: Pesan di Sini */}
          <a
            href="#contact-section"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 w-full max-w-md shadow-[0_6px_12px_rgba(0,0,0,0.1)] font-['Arial',_sans-serif] font-semibold"
          >
            <FaCommentDots />
            <span>Pesan di Sini</span>
          </a>

          {/* Button 4: Social Media Icons */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-[#2563eb] text-white w-full max-w-md shadow-[0_6px_12px_rgba(0,0,0,0.1)]">
            <a
              href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg=="
              className="text-white hover:text-gray-300 transition-all duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1"
              className="text-white hover:text-gray-300 transition-all duration-200"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com/nolandexco"
              className="text-white hover:text-gray-300 transition-all duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://t.me/nolandex"
              className="text-white hover:text-gray-300 transition-all duration-200"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="mailto:nolandexco@gmail.com"
              className="text-white hover:text-gray-300 transition-all duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#111] font-['Arial',_sans-serif]">Harga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pricing 1: Basic */}
            <div className="glass p-6 rounded-lg shadow-[0_6px_12px_rgba(0,0,0,0.1)] bg-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-[#111] mb-2 font-['Arial',_sans-serif]">Basic</h3>
              <p className="text-2xl font-bold text-[#111] mb-4 font-['Arial',_sans-serif]">Rp 500.000</p>
              <ul className="text-sm text-gray-600 mb-4 font-['Arial',_sans-serif] text-left">
                <li>✔ Konsultasi bisnis dasar</li>
                <li>✔ Setup website sederhana</li>
                <li>✔ Dukungan 1 bulan</li>
              </ul>
              <a
                href="https://nolandex.my.id/payment"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 w-full font-['Arial',_sans-serif] font-semibold"
              >
                Bayar
              </a>
            </div>

            {/* Pricing 2: Premium */}
            <div className="glass p-6 rounded-lg shadow-[0_6px_12px_rgba(0,0,0,0.1)] bg-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-[#111] mb-2 font-['Arial',_sans-serif]">Premium</h3>
              <p className="text-2xl font-bold text-[#111] mb-4 font-['Arial',_sans-serif]">Rp 1.500.000</p>
              <ul className="text-sm text-gray-600 mb-4 font-['Arial',_sans-serif] text-left">
                <li>✔ Konsultasi bisnis lengkap</li>
                <li>✔ Website profesional</li>
                <li>✔ Dukungan 3 bulan</li>
                <li>✔ Optimasi media sosial</li>
              </ul>
              <a
                href="https://nolandex.my.id/payment"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 w-full font-['Arial',_sans-serif] font-semibold"
              >
                Bayar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
