import React, { useState } from "react";
// ... import lainnya tetap sama

const Home = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fungsi untuk menangani klik product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  // Fungsi untuk menutup modal
  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <section id="home" className="min-h-screen relative z-10 pt-8 pb-8">
      {/* ... kode sebelumnya tetap sama ... */}

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
                  <p className="text-gray-500 line-through text-sm">Rp {Math.floor(parseInt(selectedProduct?.price.replace('$', '')) * 15000 * 1.67).toLocaleString('id-ID')}</p>
                  <p className="text-blue-600 font-bold text-xl">Rp {(parseInt(selectedProduct?.price.replace('$', '')) * 15000).toLocaleString('id-ID')}</p>
                </div>
              </div>

              {/* Sisanya sama dengan kode payment gateway HTML Anda */}
              {/* ... */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
