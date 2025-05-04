// src/components/ProductSelector/ProductSelector.js
import React, { useState } from "react";
import "./ProductSelector.css";

const ProductSelector = ({ onAddToCart, products = [], cartCount = 0 }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!selectedProduct || !selectedVariant || quantity < 1) return;

    const product = products.find((p) => p.name === selectedProduct);
    if (!product) return;

    const price = product.variants[selectedVariant];
    if (!price) return;

    onAddToCart({
      product: selectedProduct,
      variant: selectedVariant,
      quantity: parseInt(quantity, 10),
      price,
    });

    setQuantity(1);
    setSelectedVariant("");
    setSelectedProduct("");
  };

  const selectedProductData = products.find((p) => p.name === selectedProduct);

  return (
    <div className="product-selector">
      <button className="glass uniform-btn w-full mb-4 cursor-default" disabled>
        Pilih Produk ({cartCount} dipilih)
      </button>

      <label htmlFor="product">Produk</label>
      <select
        id="product"
        value={selectedProduct}
        onChange={(e) => {
          setSelectedProduct(e.target.value);
          setSelectedVariant("");
        }}
      >
        <option value="">Pilih produk</option>
        {products.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      {selectedProduct && selectedProductData && (
        <>
          <label htmlFor="variant">Varian</label>
          <select
            id="variant"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
          >
            <option value="">Pilih varian</option>
            {Object.keys(selectedProductData.variants).map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedVariant && (
        <>
          <label htmlFor="quantity">Jumlah</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
          />
        </>
      )}

      <button onClick={handleAdd} disabled={!selectedProduct || !selectedVariant || quantity < 1}>
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default ProductSelector;
