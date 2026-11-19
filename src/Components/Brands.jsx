import React from "react";
import "./CategoryPage.css";

const brands = [
  // Row 1 - Big Appliances / AC / TV
  "Samsung",
  "Sony",
  "LG",
  "Whirlpool",
  "IFB",
  "Bosch",
  "O'General",
  "Blue Star",
  "Lloyd",
  "Voltas",
  "Haier",
  "Godrej",
  "Carrier",
  "Daikin",
  "TCL",
  "VU",
  "Acer",
  "Wybor",
  // Row 2 - Kitchen / Home
  "Crompton",
  "Prestige",
  "Preethi",
  "Bajaj",
  "Kenstar",
  "Vidiem",
  "V-Guard",
  "Butterfly",
  "Impex",
  "Panasonic",
  "Philips",
  "Venus",
  "Havells",
  "Orient Electric",
  "Luker",
  "Milton",
  // Row 3 - Mobiles
  "Vivo",
  "Oppo",
  "Lava",
  "Poco",
  "iPhone",
];

const Brands = () => {
  return (
    <div className="category-page">
      <section className="category-banner">
        <span className="category-tag">TOP BRANDS</span>
        <h1>Trusted <span>Brands</span></h1>
        <p>Discover leading brands for every home.</p>
      </section>

      <section className="category-products">
        <div className="category-heading">
          <div>
            <h2>Explore Our Brands</h2>
            <p>Quality, innovation and reliability — {brands.length} brands in store</p>
          </div>
        </div>

        <div className="category-product-grid">
          {brands.map((brand) => (
            <div className="category-product-card" key={brand}>
              <div className="product-visual">
                <span style={{ fontSize: "30px", fontWeight: 900, textAlign: "center", lineHeight: 1.1 }}>
                  {brand.toUpperCase()}
                </span>
              </div>

              <div className="product-info">
                <h3>{brand}</h3>
                <p>Explore products and latest offers</p>
                <a href="/#products" className="product-shop-btn">
                  Explore Products →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;