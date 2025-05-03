import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaWallet, FaStore, FaChevronDown, FaCheckCircle, FaArrowRight, FaLock, FaCopy, FaTimes, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';

const PaymentGateway = () => {
  const [selectedPlan] = useState({
    name: "Layanan Premium",
    amount: "299000",
    product: "Layanan Premium 1 Bulan"
  });
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invoiceNumber] = useState('INV-' + Math.floor(1000 + Math.random() * 9000));

  const formatRupiah = (amount) => {
    return 'Rp' + parseInt(amount).toLocaleString('id-ID');
  };

  const toggleMethod = (method) => {
    setActiveMethod(activeMethod === method ? null : method);
    setSelectedMethod(method);
  };

  const processPayment = () => {
    setShowModal(false);
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 1500);
  };

  const getMethodName = (method) => {
    const methods = {
      'qris': 'QRIS',
      'virtual_account': 'Virtual Account',
      'ewallet': 'E-Wallet',
      'retail': 'Retail',
      'credit_card': 'Kartu Kredit'
    };
    return methods[method] || 'Pembayaran';
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      // Anda bisa tambahkan toast notification di sini
      console.log(`${label} disalin!`);
    });
  };

  return (
    <>
      {/* Payment Button */}
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          <FaCreditCard className="inline mr-2" /> Bayar Sekarang
        </button>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">Pembayaran</h2>
                  <p className="text-blue-100 text-sm mt-1">Layanan Premium</p>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-blue-200"
                >
                  <FaTimes />
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
                  <p className="text-gray-500 line-through text-sm">{formatRupiah(selectedPlan.amount * 1.67)}</p>
                  <p className="text-blue-600 font-bold text-xl">{formatRupiah(selectedPlan.amount)}</p>
                </div>
              </div>

              {/* Payment Methods */}
              <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
              
              <div className="space-y-3 mb-6">
                {/* QRIS */}
                <div className="payment-method-container">
                  <div 
                    className="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm"
                    onClick={() => toggleMethod('qris')}
                  >
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
                    <FaChevronDown className={`text-gray-400 transform transition-transform duration-300 ${activeMethod === 'qris' ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'qris' && (
                    <div className="payment-details-content">
                      <div className="text-center mb-4">
                        <div className="qr-code mx-auto w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg mb-3"></div>
                        <p className="text-sm text-gray-500">Scan QR code menggunakan aplikasi mobile banking atau e-wallet</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 mb-4">
                        <p><FaInfoCircle className="inline mr-2" /> QR code akan kadaluarsa dalam 24 jam</p>
                      </div>
                      
                      <button 
                        className="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        onClick={processPayment}
                      >
                        <FaCheckCircle className="inline mr-2" /> Saya Sudah Bayar
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Virtual Account */}
                <div className="payment-method-container">
                  <div 
                    className="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm"
                    onClick={() => toggleMethod('virtual_account')}
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <FaUniversity className="text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">Virtual Account</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transform transition-transform duration-300 ${activeMethod === 'virtual_account' ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'virtual_account' && (
                    <div className="payment-details-content">
                      <h4 className="font-medium mb-3 text-center">Pilih Bank</h4>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {/* BCA */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" 
                            alt="BCA" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                        
                        {/* Mandiri */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png" 
                            alt="Mandiri" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                        
                        {/* BNI */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png" 
                            alt="BNI" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="mb-3">
                          <label className="block text-gray-500 text-sm mb-1">Nomor Virtual Account</label>
                          <div className="flex items-center">
                            <span className="font-mono bg-gray-100 p-2 rounded flex-1">8888801234567890</span>
                            <button 
                              className="text-blue-600 hover:text-blue-800 ml-2"
                              onClick={() => copyToClipboard('8888801234567890', 'Nomor VA')}
                            >
                              <FaCopy />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-500 text-sm mb-1">Jumlah Transfer</label>
                          <span className="font-bold text-blue-600">{formatRupiah(selectedPlan.amount)}</span>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 mb-4">
                        <p><FaExclamationCircle className="inline mr-2" /> Transfer tepat sesuai nominal untuk proses otomatis</p>
                      </div>
                      
                      <button 
                        className="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        onClick={processPayment}
                      >
                        <FaCheckCircle className="inline mr-2" /> Konfirmasi Pembayaran
                      </button>
                    </div>
                  )}
                </div>
                
                {/* E-Wallets */}
                <div className="payment-method-container">
                  <div 
                    className="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm"
                    onClick={() => toggleMethod('ewallet')}
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <FaWallet className="text-green-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">E-Wallet</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transform transition-transform duration-300 ${activeMethod === 'ewallet' ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'ewallet' && (
                    <div className="payment-details-content">
                      <h4 className="font-medium mb-3 text-center">Pilih E-Wallet</h4>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {/* DANA */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png" 
                            alt="DANA" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                        
                        {/* GoPay */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1200px-Gopay_logo.svg.png" 
                            alt="GoPay" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                        
                        {/* OVO */}
                        <div className="method-item p-2 rounded-lg cursor-pointer text-center">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OVO_logo.svg/1200px-OVO_logo.svg.png" 
                            alt="OVO" 
                            className="h-6 mx-auto mb-1"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="mb-3">
                          <label className="block text-gray-500 text-sm mb-1">Nomor E-Wallet</label>
                          <div className="flex items-center">
                            <span className="font-mono bg-gray-100 p-2 rounded flex-1">081234567890</span>
                            <button 
                              className="text-blue-600 hover:text-blue-800 ml-2"
                              onClick={() => copyToClipboard('081234567890', 'Nomor e-wallet')}
                            >
                              <FaCopy />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-500 text-sm mb-1">Jumlah Transfer</label>
                          <span className="font-bold text-blue-600">{formatRupiah(selectedPlan.amount)}</span>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 mb-4">
                        <p><FaInfoCircle className="inline mr-2" /> Anda akan diarahkan ke aplikasi untuk menyelesaikan pembayaran</p>
                      </div>
                      
                      <button 
                        className="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        onClick={processPayment}
                      >
                        <FaArrowRight className="inline mr-2" /> Lanjut ke Pembayaran
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Credit Card */}
                <div className="payment-method-container">
                  <div 
                    className="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm"
                    onClick={() => toggleMethod('credit_card')}
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <FaCreditCard className="text-purple-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">Kartu Kredit</h3>
                    </div>
                    <FaChevronDown className={`text-gray-400 transform transition-transform duration-300 ${activeMethod === 'credit_card' ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {activeMethod === 'credit_card' && (
                    <div className="payment-details-content">
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Informasi Kartu</label>
                        <div className="space-y-3">
                          <input type="text" placeholder="Nomor Kartu" className="w-full px-4 py-2 border rounded-lg" maxLength="19" />
                          <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-lg" maxLength="5" />
                            <input type="text" placeholder="CVV" className="w-full px-4 py-2 border rounded-lg" maxLength="3" />
                          </div>
                          <input type="text" placeholder="Nama di Kartu" className="w-full px-4 py-2 border rounded-lg" />
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <input type="checkbox" id="saveCard" className="mr-2" />
                        <label htmlFor="saveCard" className="text-sm text-gray-600">Simpan kartu untuk pembayaran berikutnya</label>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Jumlah Pembayaran</span>
                          <span className="font-bold text-blue-600">{formatRupiah(selectedPlan.amount)}</span>
                        </div>
                      </div>
                      
                      <button 
                        className="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                        onClick={processPayment}
                      >
                        <FaLock className="inline mr-2" /> Bayar Sekarang
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Processing Modal */}
      {processing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="loading-bar h-full bg-blue-500" style={{ width: '100%' }}></div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Memproses Pembayaran</h3>
            <p className="text-gray-600">Harap tunggu sebentar...</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="text-green-500 mb-4">
              <FaCheckCircle className="text-5xl inline" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
            <p className="text-gray-600 mb-4">Terima kasih telah melakukan pembayaran.</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Invoice</span>
                <span className="font-mono">{invoiceNumber}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Metode</span>
                <span className="font-medium">{getMethodName(selectedMethod)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-bold text-blue-600">{formatRupiah(selectedPlan.amount)}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setSuccess(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentGateway;
