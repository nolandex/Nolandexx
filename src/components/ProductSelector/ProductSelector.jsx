import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import "./ProductSelector.css";

const ProductSelector = ({ onAddToCart }) => {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [selectedVariantId, setSelectedVariantId] = useState(products[0].variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const selectedProduct = products.find((p) => p.id === selectedProductId);

  useEffect(() => {
    // Reset variant saat produk berubah
    setSelectedVariantId(selectedProduct.variants[0].id);
  }, [selectedProductId]);

  const handleAddToCart = () => {
    const variant = selectedProduct.variants.find((v) => v.id === selectedVariantId);
    onAddToCart({
      product: selectedProduct.name,
      variant: variant.name,
      price: variant.price,
      quantity,
    });
    setQuantity(1); // Reset jumlah setelah ditambahkan
  };

  return (
    <div className="product-selector">
      <h2>Pilih Produk</h2>
      <div>
        <label>Produk:</label>
        <select
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(parseInt(e.target.value))}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Jenis:</label>
        <select
          value={selectedVariantId}
          onChange={(e) => setSelectedVariantId(parseInt(e.target.value))}
        >
          {selectedProduct.variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.name} (Rp {variant.price.toLocaleString("id-ID")})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Jumlah:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleAddToCart}>Tambah ke Keranjang</button>
    </div>
  );
};

export default ProductSelector;
