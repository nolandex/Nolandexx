import React, { useState } from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

// Sample product data (6 products)
const products = [
  { id: 1, title: "Product 1", price: 299000, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", price: 399000, image: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", price: 199000, image: "https://via.placeholder.com/150" },
  { id: 4, title: "Product 4", price: 499000, image: "https://via.placeholder.com/150" },
  { id: 5, title: "Product 5", price: 249000, image: "https://via.placeholder.com/150" },
  { id: 6, title: "Product 6", price: 349000, image: "https://via.placeholder.com/150" },
];

const Home = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const formatRupiah = (amount) => {
    return 'Rp' + parseInt(amount).toLocaleString('id-ID');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPayment(true);
  };

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
          <div className="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
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
            <a href="mailto:nolandexco@gmail.com" className="text-gray-400 hover:text-white transition-all duration-200">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Catalog Section */}
        <div className="max-w-lg mx-auto mt-8">
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md mb-2"
                />
                <h3 className="text-xs font-medium text-white">{product.title}</h3>
                <p className="text-gray-300 text-[10px]">{formatRupiah(product.price)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Gateway Modal */}
        {showPayment && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="bg-blue-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                    <p className="text-blue-100 text-sm mt-1">Pembayaran Produk</p>
                  </div>
                  <button 
                    onClick={() => setShowPayment(false)}
                    className="text-white hover:text-blue-200"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium">Total Pembayaran</h3>
                    <p className="text-gray-500 text-sm">Termasuk PPN 11%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 line-through text-sm">{formatRupiah(selectedProduct.price * 1.67)}</p>
                    <p className="text-blue-600 font-bold text-xl">{formatRupiah(selectedProduct.price)}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
                
                <div className="space-y-3 mb-6">
                  {/* QRIS Method */}
                  <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QRIS_logo.svg/1200px-QRIS_logo.svg.png" 
                        alt="QRIS" 
                        className="h-5"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">QRIS</h3>
                    </div>
                  </div>
                  
                  {/* Virtual Account Method */}
                  <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-university text-blue-600"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">Virtual Account</h3>
                    </div>
                  </div>
                  
                  {/* E-Wallet Method */}
                  <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-wallet text-green-600"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">E-Wallet</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section for Button 3 */}
        <section id="contact-section" className="mt-20">
          {/* Placeholder for additional content, e.g., contact form */}
        </section>
      </div>
    </section>
  );
};

export default Home;
