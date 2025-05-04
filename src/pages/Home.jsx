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
import { products } from "../data/products"; // Pastikan path-nya benar
import "./Home.css";

const ProductSelector = lazy(() => import("../components/ProductSelector/ProductSelector"));
const Cart = lazy(() => import("../components/Cart/Cart"));

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.product === item.product && cartItem.variant === item.variant
    );

    if (existingItemIndex !== -1) {
      // Jika item sudah ada di keranjang, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      // Jika item belum ada di keranjang, tambah item baru
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
          `${item.product} - ${item.variant} (Rp ${item.price.toLocaleString(
            "id-ID"
          )}) x ${item.quantity}`
      )
      .join("%0A");
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity, // Kalkulasi total dengan benar
      0
    );
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

        {/* Button links */}
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
        </div>

        {/* Social media */}
        <div className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full max-w-md mt-6">
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
            <ProductSelector onAddToCart={addToCart} products={products} />
          </Suspense>
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="mt-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-details">
                  <span>{item.product} - {item.variant}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Rp {item.price.toLocaleString("id-ID")}</span>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={handleCheckout}
              className="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition duration-200 w-full"
              aria-label="Checkout via WhatsApp"
            >
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
