import React from "react";
import "./CategoryPage.css";

const VisitStore = () => {
  return (
    <div className="category-page">
      <section className="category-banner">
        <span className="category-tag">WE'D LOVE TO SEE YOU</span>
        <h1>Visit Our <span>Store</span></h1>
        <p>Experience our products in person.</p>
      </section>

      <section className="category-products">
        <div className="category-product-card" style={{ padding: "35px" }}>
          <h2 style={{ color: "#103c60" }}>Visit Sagar Electronics</h2>

          <p style={{ color: "#666", lineHeight: 2 }}>
            Visit our store to explore the latest electronics, compare products
            and get assistance from our team.
          </p>

          <h3 style={{ color: "#103c60" }}>Contact Our Store</h3>

          <p>📞 080-4000 1234</p>

          <a
            href="https://www.google.com/maps/search/electronics+store+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="product-shop-btn"
            style={{ maxWidth: "250px" }}
          >
            Find Us on Google Maps →
          </a>
        </div>
      </section>
    </div>
  );
};

export default VisitStore;