import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // Menghitung total harga berdasarkan quantity dan harga produk
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Keranjang</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <span>{item.product} - {item.variant}</span>
                  <span>Rp {item.price.toLocaleString("id-ID")} x {item.quantity} = Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: Rp {total.toLocaleString("id-ID")}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
