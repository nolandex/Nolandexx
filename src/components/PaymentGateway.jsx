// Global variables
let selectedPlan = {
  name: "Layanan Premium",
  amount: "299000",
  product: "Layanan Premium 1 Bulan"
};
let selectedMethod = null;

// Product data
const products = [
  { id: 1, name: "Product 1", amount: "299000", product: "Product 1" },
  { id: 2, name: "Product 2", amount: "399000", product: "Product 2" },
  { id: 3, name: "Product 3", amount: "199000", product: "Product 3" },
  { id: 4, name: "Product 4", amount: "499000", product: "Product 4" },
  { id: 5, name: "Product 5", amount: "249000", product: "Product 5" },
  { id: 6, name: "Product 6", amount: "349000", product: "Product 6" }
];

// Format Rupiah helper function
function formatRupiah(amount) {
  return 'Rp' + parseInt(amount).toLocaleString('id-ID');
}

// Open Payment Modal for specific product
function openPaymentModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedPlan = product;
  
  document.getElementById('modalPlan').textContent = product.name;
  document.getElementById('modalProduct').textContent = product.product;
  document.getElementById('modalAmount').textContent = formatRupiah(product.amount);
  document.getElementById('modalOldPrice').textContent = formatRupiah(product.amount * 1.67);
  
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
