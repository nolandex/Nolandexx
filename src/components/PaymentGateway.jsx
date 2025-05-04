<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Gateway</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    .payment-method {
      transition: all 0.2s ease;
    }
    .payment-method:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .loading-bar {
      width: 0%;
      transition: width 1s ease-in-out;
    }
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      display: none;
      z-index: 1000;
    }
    .payment-logo {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    .bank-option {
      transition: all 0.2s ease;
    }
    .bank-option:hover {
      background-color: #f8fafc;
    }
    .payment-option {
      transition: all 0.2s ease;
    }
    .payment-option:hover {
      background-color: #f8fafc;
    }
    .payment-details {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
    .payment-details.active {
      max-height: 500px;
    }
    .method-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .method-item {
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
    }
    .method-item:hover {
      background-color: #f3f4f6;
    }
    .method-logo {
      width: 32px;
      height: 32px;
      margin: 0 auto;
      object-fit: contain;
    }
    .payment-details-content {
      padding: 12px 0;
      margin-left: 0;
      border-left: none;
    }
    .glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body class="bg-gray-50 min-h-screen">
  <!-- Product Catalog -->
  <section id="home" class="min-h-screen relative z-10 pt-8 pb-8">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-7xl font-bold mt-10 mb-10">NolanDex</h1>

      <div class="flex flex-col items-center gap-4 max-w-5xl mx-auto mt-8">
        <a href="https://nolandex.my.id" class="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
          <i class="fas fa-globe"></i>
          <span>Pesan di Website</span>
        </a>
        <a href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services" class="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
          <i class="fab fa-whatsapp"></i>
          <span>Pesan di WhatsApp</span>
        </a>
        <a href="#contact-section" class="glass flex items-center justify-center gap-2 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
          <i class="fas fa-comment-dots"></i>
          <span>Pesan di Sini</span>
        </a>
        <div class="glass flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all duration-200 w-full max-w-md">
          <a href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg==" class="text-gray-400 hover:text-white transition-all duration-200">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1" class="text-gray-400 hover:text-white transition-all duration-200">
            <i class="fab fa-tiktok text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/nolandexco" class="text-gray-400 hover:text-white transition-all duration-200">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://t.me/nolandex" class="text-gray-400 hover:text-white transition-all duration-200">
            <i class="fab fa-telegram text-2xl"></i>
          </a>
          <a href="mailto:nolandexco@gmail.com" class="text-gray-400 hover:text-white transition-all duration-200">
            <i class="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="max-w-lg mx-auto mt-8">
        <div class="grid grid-cols-2 gap-3">
          <!-- Product 1 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(1, 'Product 1', 299000)">
            <img src="https://via.placeholder.com/150" alt="Product 1" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 1</h3>
            <p class="text-gray-300 text-[10px]">Rp 299.000</p>
          </div>
          
          <!-- Product 2 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(2, 'Product 2', 399000)">
            <img src="https://via.placeholder.com/150" alt="Product 2" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 2</h3>
            <p class="text-gray-300 text-[10px]">Rp 399.000</p>
          </div>
          
          <!-- Product 3 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(3, 'Product 3', 199000)">
            <img src="https://via.placeholder.com/150" alt="Product 3" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 3</h3>
            <p class="text-gray-300 text-[10px]">Rp 199.000</p>
          </div>
          
          <!-- Product 4 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(4, 'Product 4', 499000)">
            <img src="https://via.placeholder.com/150" alt="Product 4" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 4</h3>
            <p class="text-gray-300 text-[10px]">Rp 499.000</p>
          </div>
          
          <!-- Product 5 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(5, 'Product 5', 249000)">
            <img src="https://via.placeholder.com/150" alt="Product 5" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 5</h3>
            <p class="text-gray-300 text-[10px]">Rp 249.000</p>
          </div>
          
          <!-- Product 6 -->
          <div class="glass p-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex flex-col items-center cursor-pointer" onclick="openPaymentModal(6, 'Product 6', 349000)">
            <img src="https://via.placeholder.com/150" alt="Product 6" class="w-16 h-16 object-cover rounded-md mb-2">
            <h3 class="text-xs font-medium text-white">Product 6</h3>
            <p class="text-gray-300 text-[10px]">Rp 349.000</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Payment Gateway Modal -->
  <div id="paymentModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-blue-600 p-6 text-white">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-bold" id="modalPlan">Pembayaran</h2>
            <p class="text-blue-100 text-sm mt-1" id="modalProduct">Layanan Premium</p>
          </div>
          <button id="closeModal" class="text-white hover:text-blue-200">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      
      <!-- Body -->
      <div class="p-6">
        <!-- Order Summary -->
        <div class="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-medium">Total Pembayaran</h3>
            <p class="text-gray-500 text-sm">Termasuk PPN 11%</p>
          </div>
          <div class="text-right">
            <p class="text-gray-500 line-through text-sm" id="modalOldPrice">Rp 500.000</p>
            <p class="text-blue-600 font-bold text-xl" id="modalAmount">Rp 299.000</p>
          </div>
        </div>

        <!-- Payment Methods -->
        <h3 class="text-lg font-bold mb-4">Metode Pembayaran</h3>
        
        <div class="space-y-3 mb-6">
          <!-- QRIS -->
          <div class="payment-method-container">
            <div class="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm" data-method="qris">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QRIS_logo.svg/1200px-QRIS_logo.svg.png" alt="QRIS" class="h-5">
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">QRIS</h3>
              </div>
              <i class="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"></i>
            </div>
            
            <div class="payment-details">
              <div class="payment-details-content">
                <div class="text-center mb-4">
                  <div class="qr-code mx-auto w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg mb-3"></div>
                  <p class="text-sm text-gray-500">Scan QR code menggunakan aplikasi mobile banking atau e-wallet</p>
                </div>
                
                <div class="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 mb-4">
                  <p><i class="fas fa-info-circle mr-2"></i> QR code akan kadaluarsa dalam 24 jam</p>
                </div>
                
                <button class="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
                  <i class="fas fa-check-circle mr-2"></i> Saya Sudah Bayar
                </button>
              </div>
            </div>
          </div>
          
          <!-- Virtual Account -->
          <div class="payment-method-container">
            <div class="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm" data-method="virtual_account">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                <i class="fas fa-university text-blue-600"></i>
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">Virtual Account</h3>
              </div>
              <i class="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"></i>
            </div>
            
            <div class="payment-details">
              <div class="payment-details-content">
                <h4 class="font-medium mb-3 text-center">Pilih Bank</h4>
                <div class="method-grid mb-4">
                  <!-- BCA -->
                  <div class="method-item bank-option" data-bank="bca">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" alt="BCA" class="method-logo">
                  </div>
                  
                  <!-- Mandiri -->
                  <div class="method-item bank-option" data-bank="mandiri">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png" alt="Mandiri" class="method-logo">
                  </div>
                  
                  <!-- BNI -->
                  <div class="method-item bank-option" data-bank="bni">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png" alt="BNI" class="method-logo">
                  </div>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                  <div class="mb-3">
                    <label class="block text-gray-500 text-sm mb-1">Nomor Virtual Account</label>
                    <div class="flex items-center">
                      <span class="font-mono va-number bg-gray-100 p-2 rounded flex-1">8888801234567890</span>
                      <button class="copy-btn text-blue-600 hover:text-blue-800 ml-2" onclick="copyToClipboard('8888801234567890', 'Nomor VA')">
                        <i class="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-gray-500 text-sm mb-1">Jumlah Transfer</label>
                    <span class="font-bold text-blue-600" id="vaAmount">Rp 299.000</span>
                  </div>
                </div>
                
                <div class="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 mb-4">
                  <p><i class="fas fa-exclamation-circle mr-2"></i> Transfer tepat sesuai nominal untuk proses otomatis</p>
                </div>
                
                <button class="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
                  <i class="fas fa-check-circle mr-2"></i> Konfirmasi Pembayaran
                </button>
              </div>
            </div>
          </div>
          
          <!-- E-Wallets -->
          <div class="payment-method-container">
            <div class="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm" data-method="ewallet">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                <i class="fas fa-wallet text-green-600"></i>
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">E-Wallet</h3>
              </div>
              <i class="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"></i>
            </div>
            
            <div class="payment-details">
              <div class="payment-details-content">
                <h4 class="font-medium mb-3 text-center">Pilih E-Wallet</h4>
                <div class="method-grid mb-4">
                  <!-- DANA -->
                  <div class="method-item payment-option" data-wallet="dana">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png" alt="DANA" class="method-logo">
                  </div>
                  
                  <!-- GoPay -->
                  <div class="method-item payment-option" data-wallet="gopay">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1200px-Gopay_logo.svg.png" alt="GoPay" class="method-logo">
                  </div>
                  
                  <!-- OVO -->
                  <div class="method-item payment-option" data-wallet="ovo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OVO_logo.svg/1200px-OVO_logo.svg.png" alt="OVO" class="method-logo">
                  </div>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                  <div class="mb-3">
                    <label class="block text-gray-500 text-sm mb-1">Nomor E-Wallet</label>
                    <div class="flex items-center">
                      <span class="font-mono ewallet-number bg-gray-100 p-2 rounded flex-1">081234567890</span>
                      <button class="copy-btn text-blue-600 hover:text-blue-800 ml-2" onclick="copyToClipboard('081234567890', 'Nomor e-wallet')">
                        <i class="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-gray-500 text-sm mb-1">Jumlah Transfer</label>
                    <span class="font-bold text-blue-600" id="ewalletAmount">Rp 299.000</span>
                  </div>
                </div>
                
                <div class="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 mb-4">
                  <p><i class="fas fa-info-circle mr-2"></i> Anda akan diarahkan ke aplikasi untuk menyelesaikan pembayaran</p>
                </div>
                
                <button class="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
                  <i class="fas fa-arrow-right mr-2"></i> Lanjut ke Pembayaran
                </button>
              </div>
            </div>
          </div>
          
          <!-- Retail Outlets -->
          <div class="payment-method-container">
            <div class="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm" data-method="retail">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                <i class="fas fa-store text-orange-600"></i>
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">Retail</h3>
              </div>
              <i class="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"></i>
            </div>
            
            <div class="payment-details">
              <div class="payment-details-content">
                <h4 class="font-medium mb-3 text-center">Pilih Retail</h4>
                <div class="method-grid mb-4">
                  <!-- Alfamart -->
                  <div class="method-item payment-option" data-retail="alfamart">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Alfamart_logo_2019.svg/1200px-Alfamart_logo_2019.svg.png" alt="Alfamart" class="method-logo">
                  </div>
                  
                  <!-- Indomaret -->
                  <div class="method-item payment-option" data-retail="indomaret">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Indomaret_logo.svg/1200px-Indomaret_logo.svg.png" alt="Indomaret" class="method-logo">
                  </div>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                  <div class="mb-3">
                    <label class="block text-gray-500 text-sm mb-1">Kode Pembayaran</label>
                    <div class="flex items-center">
                      <span class="font-mono retail-code bg-gray-100 p-2 rounded flex-1">ALFA123456</span>
                      <button class="copy-btn text-blue-600 hover:text-blue-800 ml-2" onclick="copyToClipboard('ALFA123456', 'Kode pembayaran')">
                        <i class="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-gray-500 text-sm mb-1">Jumlah Pembayaran</label>
                    <span class="font-bold text-blue-600" id="retailAmount">Rp 299.000</span>
                  </div>
                </div>
                
                <div class="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 mb-4">
                  <p><i class="fas fa-exclamation-circle mr-2"></i> Kode pembayaran akan kadaluarsa dalam 24 jam</p>
                </div>
                
                <button class="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
                  <i class="fas fa-check-circle mr-2"></i> Konfirmasi
                </button>
              </div>
            </div>
          </div>
          
          <!-- Credit Card -->
          <div class="payment-method-container">
            <div class="payment-method bg-white rounded-lg p-3 flex items-center cursor-pointer shadow-sm" data-method="credit_card">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                <i class="far fa-credit-card text-purple-600"></i>
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">Kartu Kredit</h3>
              </div>
              <i class="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"></i>
            </div>
            
            <div class="payment-details">
              <div class="payment-details-content">
                <div class="mb-4">
                  <label class="block text-gray-700 mb-2">Informasi Kartu</label>
                  <div class="space-y-3">
                    <input type="text" placeholder="Nomor Kartu" class="w-full px-4 py-2 border rounded-lg" maxlength="19">
                    <div class="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="MM/YY" class="w-full px-4 py-2 border rounded-lg" maxlength="5">
                      <input type="text" placeholder="CVV" class="w-full px-4 py-2 border rounded-lg" maxlength="3">
                    </div>
                    <input type="text" placeholder="Nama di Kartu" class="w-full px-4 py-2 border rounded-lg">
                  </div>
                </div>
                
                <div class="flex items-center mb-4">
                  <input type="checkbox" id="saveCard" class="mr-2">
                  <label for="saveCard" class="text-sm text-gray-600">Simpan kartu untuk pembayaran berikutnya</label>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                  <div class="flex justify-between">
                    <span class="text-gray-500">Jumlah Pembayaran</span>
                    <span class="font-bold text-blue-600" id="ccAmount">Rp 299.000</span>
                  </div>
                </div>
                
                <button class="confirm-payment w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
                  <i class="fas fa-lock mr-2"></i> Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Payment Processing Modal -->
  <div id="processingModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-xl max-w-md w-full p-6 text-center">
      <div class="mb-4">
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div id="loadingBar" class="loading-bar h-full bg-blue-500"></div>
        </div>
      </div>
      <h3 class="text-lg font-bold mb-2">Memproses Pembayaran</h3>
      <p class="text-gray-600">Harap tunggu sebentar...</p>
    </div>
  </div>

  <!-- Success Modal -->
  <div id="successModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-xl max-w-md w-full p-6 text-center">
      <div class="text-green-500 mb-4">
        <i class="fas fa-check-circle text-5xl"></i>
      </div>
      <h2 class="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
      <p class="text-gray-600 mb-4">Terima kasih telah melakukan pembayaran.</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-4 text-left">
        <div class="flex justify-between mb-2">
          <span class="text-gray-500">Invoice</span>
          <span class="font-mono">INV-<span id="invoiceNumber">XXXX</span></span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-500">Produk</span>
          <span id="successProduct" class="font-medium">Product 1</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-500">Metode</span>
          <span id="successMethod" class="font-medium">QRIS</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Total</span>
          <span id="successAmount" class="font-bold text-blue-600">Rp 299.000</span>
        </div>
      </div>
      
      <button id="closeSuccessModal" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
        Selesai
      </button>
    </div>
  </div>

  <!-- Toast Notification -->
  <div id="toast" class="toast">
    <i class="fas fa-copy mr-2"></i> Nomor disalin!
  </div>

  <script>
    // Global variables
    let selectedPlan = {
      id: 1,
      name: "Product 1",
      amount: "299000",
      product: "Product 1"
    };
    let selectedMethod = null;

    // Format Rupiah helper function
    function formatRupiah(amount) {
      return 'Rp ' + parseInt(amount).toLocaleString('id-ID');
    }

    // Open Payment Modal from product click
    function openPaymentModal(id, name, amount) {
      selectedPlan = {
        id: id,
        name: name,
        amount: amount.toString(),
        product: name
      };
      
      document.getElementById('modalPlan').textContent = name;
      document.getElementById('modalProduct').textContent = name;
      document.getElementById('modalAmount').textContent = formatRupiah(amount);
      document.getElementById('modalOldPrice').textContent = formatRupiah(amount * 1.67);
      
      // Update all payment method amounts
      document.getElementById('vaAmount').textContent = formatRupiah(amount);
      document.getElementById('ewalletAmount').textContent = formatRupiah(amount);
      document.getElementById('retailAmount').textContent = formatRupiah(amount);
      document.getElementById('ccAmount').textContent = formatRupiah(amount);
      
      // Close all open payment details
      document.querySelectorAll('.payment-details').forEach(detail => {
        detail.classList.remove('active');
      });
      
      // Reset all chevron icons
      document.querySelectorAll('.payment-method i.fa-chevron-down').forEach(icon => {
        icon.classList.remove('rotate-180');
      });
      
      document.getElementById('paymentModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    // Payment Method Selection
    document.querySelectorAll('.payment-method').forEach(method => {
      method.addEventListener('click', function() {
        const container = this.closest('.payment-method-container');
        const details = container.querySelector('.payment-details');
        const chevron = this.querySelector('i.fa-chevron-down');
        
        // Close all other payment details
        document.querySelectorAll('.payment-details').forEach(d => {
          if (d !== details) {
            d.classList.remove('active');
          }
        });
        
        // Reset all other chevron icons
        document.querySelectorAll('.payment-method i.fa-chevron-down').forEach(icon => {
          if (icon !== chevron) {
            icon.classList.remove('rotate-180');
          }
        });
        
        // Toggle current payment details
        details.classList.toggle('active');
        chevron.classList.toggle('rotate-180');
        
        // Set selected method
        selectedMethod = this.getAttribute('data-method');
      });
    });

    // Bank Option Selection for Virtual Account
    document.addEventListener('click', function(e) {
      if (e.target.closest('.bank-option')) {
        const option = e.target.closest('.bank-option');
        const container = option.closest('.payment-details');
        const vaNumber = container.querySelector('.va-number');
        const copyBtn = container.querySelector('.copy-btn');
        
        // Remove selection from all options in this container
        container.querySelectorAll('.bank-option').forEach(opt => {
          opt.classList.remove('bg-blue-100');
        });
        
        // Add selection to clicked option
        option.classList.add('bg-blue-100');
        
        // Update VA number based on bank
        const bank = option.getAttribute('data-bank');
        const vaNumbers = {
          'bca': '8888801234567890',
          'mandiri': '8888802345678901',
          'bni': '8888803456789012'
        };
        
        if (vaNumbers[bank]) {
          vaNumber.textContent = vaNumbers[bank];
          copyBtn.setAttribute('onclick', `copyToClipboard('${vaNumbers[bank]}', 'Nomor VA')`);
        }
      }
      
      // E-Wallet Option Selection
      if (e.target.closest('.payment-option')) {
        const option = e.target.closest('.payment-option');
        const container = option.closest('.payment-details');
        
        // Check if this is in e-wallet section
        if (container.querySelector('.ewallet-number')) {
          const ewalletNumber = container.querySelector('.ewallet-number');
          const copyBtn = container.querySelector('.copy-btn');
          
          // Remove selection from all options in this container
          container.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('bg-blue-100');
          });
          
          // Add selection to clicked option
          option.classList.add('bg-blue-100');
          
          // Update e-wallet number based on selection
          const wallet = option.getAttribute('data-wallet');
          const numbers = {
            'dana': '081234567890',
            'gopay': '081987654321',
            'ovo': '082345678901'
          };
          
          if (numbers[wallet]) {
            ewalletNumber.textContent = numbers[wallet];
            copyBtn.setAttribute('onclick', `copyToClipboard('${numbers[wallet]}', 'Nomor e-wallet')`);
          }
        }
        
        // Check if this is in retail section
        if (container.querySelector('.retail-code')) {
          const retailCode = container.querySelector('.retail-code');
          const copyBtn = container.querySelector('.copy-btn');
          
          // Remove selection from all options in this container
          container.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('bg-blue-100');
          });
          
          // Add selection to clicked option
          option.classList.add('bg-blue-100');
          
          // Update retail code based on selection
          const retail = option.getAttribute('data-retail');
          const codes = {
            'alfamart': 'ALFA' + Math.floor(100000 + Math.random() * 900000),
            'indomaret': 'INDO' + Math.floor(100000 + Math.random() * 900000)
          };
          
          if (codes[retail]) {
            retailCode.textContent = codes[retail];
            copyBtn.setAttribute('onclick', `copyToClipboard('${codes[retail]}', 'Kode pembayaran')`);
          }
        }
      }
    });

    // Confirm Payment Button
    document.addEventListener('click', function(e) {
      if (e.target.closest('.confirm-payment')) {
        processPayment();
      }
    });

    // Process Payment
    function processPayment() {
      document.getElementById('paymentModal').classList.add('hidden');
      document.getElementById('processingModal').classList.remove('hidden');
      
      setTimeout(() => {
        document.getElementById('loadingBar').style.width = '100%';
      }, 100);
      
      setTimeout(() => {
        document.getElementById('processingModal').classList.add('hidden');
        
        document.getElementById('successAmount').textContent = formatRupiah(selectedPlan.amount);
        document.getElementById('successProduct').textContent = selectedPlan.name;
        document.getElementById('successMethod').textContent = getMethodName(selectedMethod);
        document.getElementById('invoiceNumber').textContent = 'INV-' + Math.floor(1000 + Math.random() * 9000);
        
        document.getElementById('successModal').classList.remove('hidden');
      }, 1500);
    }

    // Close Modals
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('paymentModal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
    
    document.getElementById('closeSuccessModal').addEventListener('click', () => {
      document.getElementById('successModal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    // Get Method Name
    function getMethodName(method) {
      const methods = {
        'qris': 'QRIS',
        'virtual_account': 'Virtual Account',
        'bank_transfer': 'Transfer Bank',
        'ewallet': 'E-Wallet',
        'retail': 'Retail',
        'credit_card': 'Kartu Kredit'
      };
      return methods[method] || 'Pembayaran';
    }

    // Copy to Clipboard Function
    function copyToClipboard(text, label) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} disalin!`);
      }).catch(err => {
        console.error('Gagal menyalin: ', err);
      });
    }

    // Show Toast Notification
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.innerHTML = `<i class="fas fa-copy mr-2"></i> ${message}`;
      toast.style.display = 'flex';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 2000);
    }
  </script>
</body>
</html>
