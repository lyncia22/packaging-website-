import React, { useState } from "react";
import "./AboutPage.css";

export default function AboutPage() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "John M.",
      message: "Their packaging products are top-notch. Always reliable and delivered on time!",
    },
    {
      name: "Sarah T.",
      message: "We’ve been using their stand-alone pouches for 2 years now — great quality & price.",
    },
    {
      name: "Kwame N.",
      message: "Fantastic service and packaging that meets our eco-friendly standards. Highly recommend!",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const newReview = { name, message };
    setTestimonials([...testimonials, newReview]); // add new review to the list
    setName("");
    setMessage("");
  };

  return (
    <section className="about-page">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are a trusted packaging supplier committed to providing high-quality, sustainable, and affordable packaging solutions for businesses of all sizes.
        </p>
        <p>
          Our product range includes stand-alone pouches, ziplocks, cake packaging, food containers, cardboard boxes, and bin liners.
        </p>
        <p>
          With years of experience in the industry, we understand the importance of quality packaging in protecting and presenting your products. Partner with us for solutions that work.
        </p>
      </div>

      <div className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="message">"{t.message}"</p>
              <p className="name">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Review"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </section>
  );
}
