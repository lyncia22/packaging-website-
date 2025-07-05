import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Plastic Bags",
      description: "Durable, customizable plastic bags for all your packaging needs.",
    },
    {
      title: "Cardboard Boxes",
      description: "Sturdy and eco-friendly boxes for safe transportation and storage.",
    },
    {
      title: "Custom Printed Packaging",
      description: "Add your brand’s unique touch with our printing services.",
    },
  ];

  return (
    <section id="services" className="services">
      <h3>Our Services</h3>
      <div className="services-list">
        {services.map((service, idx) => (
          <div key={idx} className="service-item">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
