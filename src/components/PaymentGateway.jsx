import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaCheckCircle, FaCopy, FaInfoCircle, FaExclamationCircle, FaUniversity, FaWallet, FaStore, FaCreditCard, FaQrcode, FaLock, FaArrowRight } from 'react-icons/fa';

const PaymentGateway = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);
  const [selectedBank, setSelectedBank] = useState('bca');
  const [selectedEWallet, setSelectedEWallet] = useState('dana');
  const [selectedRetail, setSelectedRetail] = useState('alfamart');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const products = [
    { id: 1, name: "Product 1", price: 299000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 399000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 199000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 499000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 249000, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: 349000, image: "https://via.placeholder.com/150" },
  ];

  const banks = {
    bca: { name: "BCA", vaNumber: "8888801234567890", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" },
    mandiri: { name: "Mandiri", vaNumber: "8888802345678901", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png" },
    bni: { name: "BNI", vaNumber: "8888803456789012", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png" }
  };

  const eWallets = {
    dana: { name: "DANA", number: "081234567890", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png" },
    gopay: { name: "GoPay", number: "081987654321", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1200px-Gopay_logo.svg.png" },
    ovo: { name: "OVO", number: "082345678901", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OVO_logo.svg/1200px-OVO_logo.svg.png" }
  };

  const retails = {
    alfamart: { name: "Alfamart", code: "ALFA123456", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Alfamart_logo_2019.svg/1200px-Alfamart_logo_2019.svg.png" },
    indomaret: { name: "Indomaret", code: "INDO654321", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Indomaret_logo.svg/1200px-Indomaret_logo.svg.png" }
  };

  const formatRupiah = (amount) => {
    return 'Rp ' + parseInt(amount).toLocaleString('id-ID');
  };

  const openPayment = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
    setActiveMethod(null);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setShowProcessingModal(false);
    setShowSuccessModal(false);
  };

  const togglePaymentDetails = (method) => {
    setActiveMethod(activeMethod === method ? null : method);
  };

  const selectBank = (bank) => {
    setSelectedBank(bank);
  };

  const selectEWallet = (wallet) => {
    setSelectedEWallet(wallet);
  };

  const selectRetail = (retail) => {
    setSelectedRetail(retail);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`${label} disalin!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const processPayment = () => {
    setShowPaymentModal(false);
    setShowProcessingModal(true);
    
    setTimeout(() => {
      setShowProcessingModal(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12">NolanDex</h1>
        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {products.map(product => (
            <div 
              key={product.id} 
              className="glass p-4 rounded-lg cursor-pointer" 
              onClick={() => openPayment(product)}
            >
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-300 text-sm">{formatRupiah(product.price)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-blue-100 text-sm mt-1">Pembayaran Produk</p>
                </div>
                <button onClick={closeModal} className="text-white hover:text-blue-200">
                  <FaTimes />
                </button>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6">
              {/* Order Summary */}
              <div className="flex justify-between items-center mb-6 p-4 bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium">Total Pembayaran</h3>
                  <p className="text-gray-400 text-sm">Termasuk PPN 11%</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 line-through text-sm">
                    {formatRupiah(selectedProduct.price * 1.67)}
                  </p>
                  <p className="text-blue-400 font-bold text-xl">
                    {formatRupiah(selectedProduct.price)}
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
              
              <div className="space-y-3 mb-6">
                {/* QRIS */}
                <div className="payment-method-container">
                  <div 
                    className={`payment-method bg-gray-700 rounded-lg p-3 flex items-center cursor-pointer shadow-sm ${activeMethod === 'qris' ? 'rounded-b-none' : ''}`}
                    onClick={() => togglePaymentDetails('qris')}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QRIS_logo.svg/1200px-QRIS_logo.svg.png" alt="QRIS" className="h-5" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">QRIS</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${activeMethod === 'qris' ? 'transform rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'qris' && (
                    <div className="payment-details bg-gray-700 rounded-b-lg overflow-hidden">
                      <div className="p-4">
                        <div className="text-center mb-4">
                          <div className="qr-code mx-auto w-48 h-48 border-2 border-dashed border-gray-600 rounded-lg mb-3 flex items-center justify-center text-gray-400">
                            <FaQrcode className="text-5xl" />
                          </div>
                          <p className="text-sm text-gray-400">Scan QR code menggunakan aplikasi mobile banking atau e-wallet</p>
                        </div>
                        
                        <div className="bg-blue-500/20 p-3 rounded-lg text-sm text-blue-300 mb-4">
                          <p><FaInfoCircle className="inline mr-2" /> QR code akan kadaluarsa dalam 24 jam</p>
                        </div>
                        
                        <button 
                          onClick={processPayment}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        >
                          <FaCheckCircle className="inline mr-2" /> Saya Sudah Bayar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Virtual Account */}
                <div className="payment-method-container">
                  <div 
                    className={`payment-method bg-gray-700 rounded-lg p-3 flex items-center cursor-pointer shadow-sm ${activeMethod === 'va' ? 'rounded-b-none' : ''}`}
                    onClick={() => togglePaymentDetails('va')}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      <FaUniversity className="text-blue-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">Virtual Account</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${activeMethod === 'va' ? 'transform rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'va' && (
                    <div className="payment-details bg-gray-700 rounded-b-lg overflow-hidden">
                      <div className="p-4">
                        <h4 className="font-medium mb-3 text-center">Pilih Bank</h4>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {Object.entries(banks).map(([key, bank]) => (
                            <div 
                              key={key}
                              className={`p-2 rounded cursor-pointer text-center ${selectedBank === key ? 'bg-blue-500/20' : ''}`}
                              onClick={() => selectBank(key)}
                            >
                              <img src={bank.logo} alt={bank.name} className="h-6 mx-auto mb-1" />
                              <span className="text-xs">{bank.name}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg mb-4">
                          <div className="mb-3">
                            <label className="block text-gray-400 text-sm mb-1">Nomor Virtual Account</label>
                            <div className="flex items-center">
                              <span className="font-mono bg-gray-700 p-2 rounded flex-1">
                                {banks[selectedBank].vaNumber}
                              </span>
                              <button 
                                onClick={() => copyToClipboard(banks[selectedBank].vaNumber, 'Nomor VA')}
                                className="text-blue-400 hover:text-blue-300 ml-2"
                              >
                                <FaCopy />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-400 text-sm mb-1">Jumlah Transfer</label>
                            <span className="font-bold text-blue-400">
                              {formatRupiah(selectedProduct.price)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-500/20 p-3 rounded-lg text-sm text-yellow-300 mb-4">
                          <p><FaExclamationCircle className="inline mr-2" /> Transfer tepat sesuai nominal untuk proses otomatis</p>
                        </div>
                        
                        <button 
                          onClick={processPayment}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        >
                          <FaCheckCircle className="inline mr-2" /> Konfirmasi Pembayaran
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* E-Wallet */}
                <div className="payment-method-container">
                  <div 
                    className={`payment-method bg-gray-700 rounded-lg p-3 flex items-center cursor-pointer shadow-sm ${activeMethod === 'ewallet' ? 'rounded-b-none' : ''}`}
                    onClick={() => togglePaymentDetails('ewallet')}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      <FaWallet className="text-green-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">E-Wallet</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${activeMethod === 'ewallet' ? 'transform rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'ewallet' && (
                    <div className="payment-details bg-gray-700 rounded-b-lg overflow-hidden">
                      <div className="p-4">
                        <h4 className="font-medium mb-3 text-center">Pilih E-Wallet</h4>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {Object.entries(eWallets).map(([key, wallet]) => (
                            <div 
                              key={key}
                              className={`p-2 rounded cursor-pointer text-center ${selectedEWallet === key ? 'bg-blue-500/20' : ''}`}
                              onClick={() => selectEWallet(key)}
                            >
                              <img src={wallet.logo} alt={wallet.name} className="h-6 mx-auto mb-1" />
                              <span className="text-xs">{wallet.name}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gray-600 p-4 rounded-lg mb-4">
                          <div className="mb-3">
                            <label className="block text-gray-400 text-sm mb-1">Nomor E-Wallet</label>
                            <div className="flex items-center">
                              <span className="font-mono bg-gray-700 p-2 rounded flex-1">
                                {eWallets[selectedEWallet].number}
                              </span>
                              <button 
                                onClick={() => copyToClipboard(eWallets[selectedEWallet].number, 'Nomor e-wallet')}
                                className="text-blue-400 hover:text-blue-300 ml-2"
                              >
                                <FaCopy />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-400 text-sm mb-1">Jumlah Transfer</label>
                            <span className="font-bold text-blue-400">
                              {formatRupiah(selectedProduct.price)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-500/20 p-3 rounded-lg text-sm text-blue-300 mb-4">
                          <p><FaInfoCircle className="inline mr-2" /> Anda akan diarahkan ke aplikasi untuk menyelesaikan pembayaran</p>
                        </div>
                        
                        <button 
                          onClick={processPayment}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        >
                          <FaArrowRight className="inline mr-2" /> Lanjut ke Pembayaran
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Processing Modal */}
      {showProcessingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-6 text-center">
            <div className="mb-4">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="loading-bar h-full bg-blue-500" style={{ width: '100%' }}></div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Memproses Pembayaran</h3>
            <p className="text-gray-400">Harap tunggu sebentar...</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-6 text-center">
            <div className="text-green-500 mb-4">
              <FaCheckCircle className="text-5xl inline" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
            <p className="text-gray-400 mb-4">Terima kasih telah melakukan pembayaran.</p>
            
            <div className="bg-gray-700 p-4 rounded-lg mb-4 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Invoice</span>
                <span className="font-mono">INV-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Produk</span>
                <span className="font-medium">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Metode</span>
                <span className="font-medium">
                  {activeMethod === 'qris' ? 'QRIS' : 
                   activeMethod === 'va' ? 'Virtual Account' : 
                   activeMethod === 'ewallet' ? 'E-Wallet' : 'Pembayaran'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total</span>
                <span className="font-bold text-blue-400">
                  {formatRupiah(selectedProduct.price)}
                </span>
              </div>
            </div>
            
            <button 
              onClick={closeModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
            >
              Selesai
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center z-50">
          <FaCopy className="mr-2" /> {toastMessage}
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
