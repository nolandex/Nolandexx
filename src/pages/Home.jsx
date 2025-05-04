/* src/pages/Home/Home.css */

/* Efek glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: background 0.3s ease;
}

.glass:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Styling untuk section home */
#home {
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Container utama */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Judul utama */
h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
  h1 {
    font-size: 4.5rem;
  }
}

/* Styling untuk produk di keranjang */
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  border-radius: 8px;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cart-item-details span {
  font-size: 1.1rem;
  color: white;
}

.cart-item-remove {
  background: #ff3b30;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cart-item-remove:hover {
  background: #ff4d4d;
}

.cart-item-remove:focus {
  outline: none;
}

/* Responsive untuk produk dan keranjang */
@media (max-width: 640px) {
  .container {
    padding: 0 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .cart-item-details span {
    font-size: 1rem;
  }
  }
