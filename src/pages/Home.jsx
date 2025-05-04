import React, { useState, lazy, Suspense } from "react";
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
import { products } from "../data/products";
import "./Home.css";

const ProductSelector = lazy(() => import("../components/ProductSelector/ProductSelector"));
const Cart = lazy(() => import("../components/Cart/Cart"));

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingIndex = cart.findIndex(
      (i) => i.product === item.product && i.variant === item.variant
    );
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const generateWhatsAppMessage = () => {
    const items = cart
      .map(
        (item) =>
          `${item.product} - ${item.variant} (Rp ${item.price.toLocaleString("id-ID")}) x ${item.quantity}`
      )
      .join("%0A");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return `Hi%2C%20I%20want%20to%20buy:%0A${items}%0ATotal: Rp ${total.toLocaleString("id-ID")}`;
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/6285156779923?text=${message}`, "_blank");
  };

  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-10">NolanDex</h1>

        {/* Top Buttons */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto mt-8">
          <a href="https://nolandex.my.id" className="glass uniform-btn">
            <FaGlobe />
            <span>Pesan di Website</span>
          </a>
          <a href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services" className="glass uniform-btn">
            <FaWhatsapp />
            <span>Pesan di WhatsApp</span>
          </a>
          <a href="#contact-section" className="glass uniform-btn">
            <FaCommentDots />
            <span>Pesan di Sini</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="glass flex items-center justify-center gap-4 p-4 rounded-lg w-full max-w-md mt-6">
          <a href="https://www.instagram.com/nolandexco" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@nolandexco" className="text-gray-400 hover:text-white">
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

        {/* Product Selector */}
        <div className="max-w-lg mx-auto mt-12">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductSelector onAddToCart={addToCart} products={products} cartCount={cart.length} />
          </Suspense>
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className="mt-8 max-w-lg mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <Cart cart={cart} onRemove={removeFromCart} />
            </Suspense>
            <button onClick={handleCheckout} className="glass uniform-btn mt-4">
              <FaWhatsapp />
              <span>Checkout via WhatsApp</span>
            </button>
          </div>
        )}

        <section id="contact-section" className="mt-20"></section>
      </div>
    </section>
  );
};

export default Home;
