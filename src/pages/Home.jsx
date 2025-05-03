import React from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

// Sample product data (6 products)
const products = [
  { id: 1, title: "Product 1", price: "$29.99", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", price: "$19.99", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Product 4", price: "$49.99", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Product 5", price: "$24.99", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Product 6", price: "$34.99", image: "https://via.placeholder.com/150" },
];

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8">
      <div className="container mx-auto px-4 text-center">
        {/* Title - Positioned at the very top */}
        <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-10">NolanDex</h1>

        {/* Buttons - Below title */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto mt-8">
          <a
            href="https://nolandex.my.id"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaGlobe />
            <span>Pesan di Website</span>
          </a>
          <a
            href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaWhatsapp />
            <span>Pesan di WhatsApp</span>
          </a>
          <a
            href="#contact-section"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <FaCommentDots />
            <span>Pesan di Sini</span>
          </a>
          <div
            className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md"
          >
            <a href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg==" className="text-gray-400 hover:text-white transition-all duration-200">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1" className="text-gray-400 hover:text-white transition-all duration-200">
              <FaTiktok size={24} />
            </a>
            <a href="https://www.facebook.com/nolandexco" className="text-gray-400 hover:text-white transition-all duration-200">
              <FaFacebook size={24} />
            </a>
            <a href="https://t.me/nolandex" className="text-gray-400 hover:text-white transition-all duration-200">
              <FaTelegram size={24} />
            </a>
            <a href="mailto:nolandexco@gmail.com" className=">';text-gray-400 hover:text-white transition-all duration-200">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Catalog Section */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass p-3 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded-md mb-3"
                />
                <h3 className="text-base font-medium text-white">{product.title}</h3>
                <p className="text-gray-300 text-sm">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section for Button 3 */}
        <section id="contact-section" className="mt-20">
          {/* Placeholder for additional content, e.g., contact form */}
        </section>
      </div>
    </section>
  );
};

export default Home;
