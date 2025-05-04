import React, { useState } from "react";
import { FaGlobe, FaWhatsapp, FaCommentDots, FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

const products = [
  { id: 1, title: "Product 1", price: "$29.99", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", price: "$19.99", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Product 4", price: "$49.99", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Product 5", price: "$24.99", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Product 6", price: "$34.99", image: "https://via.placeholder.com/150" },
];

const Home = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'processing', 'success'

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
    setPaymentStatus(null);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentStatus(null);
  };

  const handlePayment = () => {
    setPaymentStatus('processing');
    
    // Simulasi proses pembayaran
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  // Fungsi untuk konversi harga ke Rupiah (fake rate 1 USD = 15,000 IDR)
  const convertToRupiah = (usdPrice) => {
    const numericPrice = parseFloat(usdPrice.replace('$', ''));
    return (numericPrice * 15000).toLocaleString('id-ID');
  };

  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8">
      {/* ... bagian sebelumnya tetap sama ... */}

      {/* Product Catalog */}
      <div className="max-w-lg mx-auto mt-12">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="glass p-3 rounded-lg hover:bg-white/20 transition duration-200 flex flex-col items-center cursor-pointer"
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
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">Pembayaran</h2>
                  <p className="text-blue-100 text-sm mt-1">{selectedProduct?.title}</p>
                </div>
                <button onClick={closePaymentModal} className="text-white hover:text-blue-200">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Order Summary */}
              <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Total Pembayaran</h3>
                  <p className="text-gray-500 text-sm">Termasuk PPN 11%</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 line-through text-sm">
                    Rp {Math.floor(parseFloat(selectedProduct?.price.replace('$', '')) * 15000 * 1.67).toLocaleString('id-ID')}
                  </p>
                  <p className="text-blue-600 font-bold text-xl">
                    Rp {convertToRupiah(selectedProduct?.price)}
                  </p>
                </div>
              </div>

              {/* Payment Methods - Simplified Version */}
              <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
              
              <div className="space-y-3 mb-6">
                {/* QRIS */}
                <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600">QR</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">QRIS</h3>
                  </div>
                </div>
                
                {/* Virtual Account */}
                <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-university text-blue-600"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">Virtual Account</h3>
                  </div>
                </div>
                
                {/* E-Wallet */}
                <div className="bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-wallet text-green-600"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">E-Wallet</h3>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button 
                onClick={handlePayment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Processing Modal */}
      {paymentStatus === 'processing' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse w-full"></div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Memproses Pembayaran</h3>
            <p className="text-gray-600">Harap tunggu sebentar...</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {paymentStatus === 'success' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="text-green-500 mb-4">
              <i className="fas fa-check-circle text-5xl"></i>
            </div>
            <h2 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
            <p className="text-gray-600 mb-4">Terima kasih telah membeli {selectedProduct?.title}.</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Invoice</span>
                <span className="font-mono">INV-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-bold text-blue-600">Rp {convertToRupiah(selectedProduct?.price)}</span>
              </div>
            </div>
            
            <button 
              onClick={closePaymentModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
