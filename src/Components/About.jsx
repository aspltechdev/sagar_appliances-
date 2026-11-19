import React from "react";
import "./CategoryPage.css";

const About = () => {
  return (
    <div className="category-page">
      <section className="category-banner">
        <span className="category-tag">WELCOME TO SAGAR</span>
        <h1>More Than Just <span>Electronics</span></h1>
        <p>Your trusted destination for smarter living.</p>
      </section>

      <section className="category-products">
        <div className="category-heading">
          <div>
            <h2>About Sagar Electronics</h2>
            <p>Technology, trust and customer satisfaction.</p>
          </div>
        </div>

        <div className="category-product-card" style={{ padding: "35px" }}>
          <h2 style={{ color: "#103c60" }}>Welcome to Sagar Electronics</h2>

          <p style={{ lineHeight: 2, color: "#666", fontSize: "17px" }}>
            Discover a wide range of home appliances and electronics designed
            to make your everyday life easier and more comfortable. From
            entertainment and cooling to kitchen essentials, we bring quality
            products, value and friendly service together under one roof.
          </p>

          <p style={{ lineHeight: 2, color: "#666", fontSize: "17px" }}>
            We believe in helping every customer find the right product,
            the right price and the right solution for their home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;