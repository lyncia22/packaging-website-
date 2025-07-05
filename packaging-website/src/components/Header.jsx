import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Packaging Co. Logo" className="logo" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>

        <div className="dropdown">
          <span>Products</span>
          <div className="dropdown-content">
            <Link to="/packagingproducts">Packaging Products</Link>
           <Link to="/electrical-products">Electrical Products</Link>

          </div>
        </div>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
