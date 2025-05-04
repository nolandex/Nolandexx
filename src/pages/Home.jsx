import React, { useState } from "react";
import {
  FaGlobe,
  FaWhatsapp,
  FaCommentDots,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product1a from "../assets/images/product1a.jpg";
import product1b from "../assets/images/product1b.jpg";
import product1c from "../assets/images/product1c.jpg";
import product2a from "../assets/images/product2a.jpg";
import product2b from "../assets/images/product2b.jpg";
import product2c from "../assets/images/product2c.jpg";

const products = [
  { id: 1, title: "Product 1", price: "$29.99", image: product1 },
  { id: 2, title: "Product 2", price: "$39.99", image: product2 },
];

const product1Images = [
  { id: 1, image: product1a },
  { id: 2, image: product1b },
  { id: 3, image: product1c },
];

const product2Images = [
  { id: 1, image: product2a },
  { id: 2, image: product2b },
  { id: 3, image: product2c },
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProduct(productId === selectedProduct ? null : productId);
  };

  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-10">NolanDex</h1>

        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto mt-8">
          <a
            href="https://nolandex.my.id"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full max-w-md"
          >
            <FaGlobe />
            <span>Pesan di Website</span>
          </a>
          <a
            href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full max-w-md"
          >
            <FaWhatsapp />
            <span>Pesan di WhatsApp</span>
          </a>
          <a
            href="#contact-section"
            className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full max-w-md"
          >
            <FaCommentDots />
            <span>Pesan di Sini</span>
          </a>

          <div className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full max-w-md">
            <a href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg==" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1" className="text-gray-400 hover:text-white">
              <FaTiktok size={24} />
            </a>
            <a href="https://www.facebook.com/nolandexco" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://t.me/nolandex" className="text-gray-400 hover:text-white">
              <FaTelegram size={24} />
            </a>
            <a href="mailto:nolandexco@gmail.com" className="text-gray-400 hover:text-white">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="max-w-lg mx-auto mt-12">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass p-3 rounded-lg hover:bg-white/20 transition duration-200 flex flex-col items-center cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-semibold text-white">{product.title}</h3>
                <p className="text-gray-300 text-xs">{product.price}</p>
              </div>
            ))}
          </div>

          {selectedProduct === 1 && (
            <div className="mt-8 w-full max-w-xs mx-auto">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                {product1Images.map((img) => (
                  <div key={img.id}>
                    <img
                      src={img.image}
                      alt={`Product 1 - ${img.id}`}
                      className="w-full max-w-xs h-48 object-cover rounded-md"
                    />
                  </div>
                ))}
              </Carousel>
              <a
                href="https://wa.me/6285156779923?text=Hi%2C%20I%20want%20to%20buy%20Product%201"
                className="glass flex items-center justify-center gap-2 p-4 mt-4 rounded-lg hover:bg-white/20 transition duration-200 w-full"
              >
                <FaWhatsapp />
                <span>Bayar Sekarang</span>
              </a>
            </div>
          )}

          {selectedProduct === 2 && (
            <div className="mt-8 w-full max-w-xs mx-auto flex flex-col gap-4">
              {product2Images.map((img) => (
                <div key={img.id} className="flex flex-col items-center">
                  <img
                    src={img.image}
                    alt={`Product 2 - ${img.id}`}
                    className="w-full max-w-xs h-48 object-cover rounded-md"
                  />
                  <a
                    href="https://wa.me/6285156779923?text=Hi%2C%20I%20want%20to%20buy%20Product%202"
                    className="glass flex items-center justify-center gap-2 p-4 mt-4 rounded-lg hover:bg-white/20 transition duration-200 w-full"
                  >
                    <FaWhatsapp />
                    <span>Bayar Sekarang</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <section id="contact-section" className="mt-20"></section>
      </div>
    </section>
  );
};

export default Home;
