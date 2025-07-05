import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const products = [
  {
    id: "plastic-bags",
    name: "Plastic Bags",
    description: "Durable plastic bags available in various sizes and colors.",
    image: "https://i.pinimg.com/736x/47/32/1a/47321a8e9b59c70907c6b0f51c9d73cb.jpg",
  },
  {
    id: "cardboard-boxes",
    name: "Cardboard Boxes",
    description: "Eco-friendly boxes perfect for shipping and storage.",
    image: "https://i.pinimg.com/736x/84/c8/0a/84c80a9bc45b0d418d6e3b06a4dff052.jpg",
  },
  {
    id: "custom-packaging",
    name: "Custom Packaging",
    description: "Personalized packaging with your brand's logo & design.",
    image: "https://i.pinimg.com/736x/6d/ac/a5/6daca5cbdbe965f7b518684370402b4e.jpg",
  },
  {
    id: "wrapping-paper",
    name: "Wrapping Paper",
    description: "Premium quality wrapping paper to protect your items.",
    image: "https://i.pinimg.com/736x/11/8a/3b/118a3b9953727cc1a5323dc6f4161fc7.jpg",
  },
  {
    id: "tape",
    name: "Packaging Tape",
    description: "Strong adhesive tape to secure your packages.",
    image: "https://i.pinimg.com/736x/1b/e8/07/1be8070f91b0fd117586c55cfa6715fd.jpg",
  },
];

export default function Products() {
  const previewProducts = products.slice(0, 3); // Show only 3 products as preview

  return (
    <section className="products">
      <h3>Our Products</h3>
      <div className="product-grid">
        {previewProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      <Link to="/products" className="view-all-btn">
        View All Products
      </Link>
    </section>
  );
}
