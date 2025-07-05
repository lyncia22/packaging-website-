import React from "react";
import "./ProductsPage.css";

const standAloneProducts = [
  {
    name: "Plastic Stand Alone Pouches",
    description: "Strong self-standing pouches ideal for retail packaging.",
    image: "https://i.pinimg.com/736x/f6/b8/77/f6b877377ad445a884cafc7a24df1a07.jpg",
  },
  {
    name: "Kraft Stand Alone Pouches",
    description: "Eco-friendly kraft paper pouches with clear windows.",
    image: "https://i.pinimg.com/736x/d0/e0/a9/d0e0a9ec76c6a6619e85c5ff5266d95e.jpg",
  },
];

const ziplockProducts = [
  {
    name: "Plastic Ziplocks",
    description: "Clear resealable plastic ziplock bags for storage.",
    image: "https://i.pinimg.com/736x/36/d8/62/36d86239b62d171d8c0db5a25fa151c7.jpg",
  },
  {
    name: "Kraft Ziplocks",
    description: "Brown kraft ziplock pouches with resealable closures.",
    image: "https://i.pinimg.com/736x/12/97/96/1297964a4af5b594cd70f631cac887c4.jpg",
  },
];

const cakePackages = [
  {
    name: "Cake Boxes",
    description: "Sturdy cake boxes with windows for presentation.",
    image: "https://i.pinimg.com/736x/c4/4f/de/c44fdeb96327237bad3a15059c9b056f.jpg",
  },
  {
    name: "Cupcake Holders",
    description: "Secure holders for cupcakes and muffins.",
    image: "https://i.pinimg.com/736x/d4/7d/cd/d47dcd1e1d4ae1c1d9e8b6a05e8198d3.jpg",
  },
];

const foodPackages = [
  {
    name: "Takeaway Containers",
    description: "Microwave-safe containers for takeaway meals.",
    image: "https://i.pinimg.com/736x/4d/27/79/4d2779182f73afa5230f5e18f1c2760e.jpg",
  },
  {
    name: "Paper Food Wrappers",
    description: "Greaseproof wrappers for burgers, fries, and wraps.",
    image: "https://i.pinimg.com/736x/cf/24/64/cf2464bc8b35aab610bbce5e77cec76d.jpg",
  },
];

const cardboardBoxes = [
  {
    name: "Shipping Boxes",
    description: "Durable cardboard boxes for packaging and shipping goods.",
    image: "https://i.pinimg.com/736x/9f/05/26/9f0526bced70c340c521ab05763c1732.jpg",
  },
  {
    name: "Gift Boxes",
    description: "Stylish cardboard boxes perfect for gift packaging.",
    image: "https://i.pinimg.com/736x/d7/29/6a/d7296ac8323b33bf5e2fdc432d810bc7.jpg",
  },
];

const binLiners = [
  {
    name: "Black Bin Liners",
    description: "Heavy-duty black bin liners for industrial use.",
    image: "https://i.pinimg.com/736x/ea/e9/4b/eae94b62d5372572a1ba8200eec242fe.jpg",
  },
  {
    name: "Clear Bin Liners",
    description: "Transparent bin liners for light waste.",
    image: "https://i.pinimg.com/736x/c3/c8/0c/c3c80cc097dd062f12f1cf1b2bdee061.jpg",
  },
];

function ProductCategory({ title, products }) {
  return (
    <div className="product-category">
      <h3>{title}</h3>
      <div className="products-grid">
        {products.map((product, i) => (
          <div key={i} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <section className="products-page">
      <h2>All Products</h2>

      <ProductCategory title="Stand Alone Pouches" products={standAloneProducts} />
      <ProductCategory title="Ziplocks" products={ziplockProducts} />
      <ProductCategory title="Cake Packaging" products={cakePackages} />
      <ProductCategory title="Food Packaging" products={foodPackages} />
      <ProductCategory title="Cardboard Boxes" products={cardboardBoxes} />
      <ProductCategory title="Bin Liners" products={binLiners} />
    </section>
  );
}
