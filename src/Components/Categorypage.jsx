import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPage.css";

// Fallback - if any AC image fails, show this AC only
const AC_FALLBACK = "https://commons.wikimedia.org/wiki/Special:FilePath/DAIKIN_AIR_CONDITIONER_INDOOR_UNIT.jpg?width=600";

const categoryData = {
  TV: {
    subtitle: "Experience entertainment like never before",
    emoji: "📺",
    bannerImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    products: [
      { brand: "SAMSUNG", name: "Smart LED TV", detail: "32 inch HD Ready", price: "₹12,990", oldPrice: "₹19,990", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80" },
      { brand: "LG", name: "4K Ultra HD TV", detail: "43 inch Smart TV", price: "₹27,990", oldPrice: "₹39,990", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80" },
      { brand: "SONY", name: "Premium QLED TV", detail: "55 inch 4K", price: "₹49,990", oldPrice: "₹69,990", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80" },
      { brand: "MI", name: "Android Smart TV", detail: "50 inch UHD", price: "₹35,990", oldPrice: "₹49,999", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80" },
    ],
  },
  Fridge: {
    subtitle: "Keep everything fresh, every day",
    emoji: "🧊",
    bannerImage: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
    products: [
      { brand: "LG", name: "Single Door Refrigerator", detail: "190 L Capacity", price: "₹15,490", oldPrice: "₹21,990", img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80" },
      { brand: "SAMSUNG", name: "Double Door Refrigerator", detail: "260 L Capacity", price: "₹26,990", oldPrice: "₹34,990", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80" },
      { brand: "WHIRLPOOL", name: "Convertible Refrigerator", detail: "300 L Capacity", price: "₹34,990", oldPrice: "₹44,990", img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80" },
      { brand: "BOSCH", name: "Side By Side Refrigerator", detail: "580 L Capacity", price: "₹69,990", oldPrice: "₹89,990", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80" },
    ],
  },
  "Washing Machine": {
    subtitle: "Make laundry smarter and easier",
    emoji: "🫧",
    bannerImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
    products: [
      { brand: "SAMSUNG", name: "Semi Automatic Washer", detail: "7 kg Capacity", price: "₹10,990", oldPrice: "₹14,990", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80" },
      { brand: "LG", name: "Top Load Washing Machine", detail: "7 kg Capacity", price: "₹17,490", oldPrice: "₹22,990", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80" },
      { brand: "BOSCH", name: "Front Load Washing Machine", detail: "8 kg Capacity", price: "₹32,990", oldPrice: "₹42,990", img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80" },
      { brand: "IFB", name: "Premium Fully Automatic", detail: "10 kg Capacity", price: "₹42,990", oldPrice: "₹54,990", img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80" },
    ],
  },
  // ============ AC - ONLY AIR CONDITIONER PICS ============
  "Air Conditioner": {
    subtitle: "Bring home cool comfort",
    emoji: "❄️",
    bannerImage: "https://commons.wikimedia.org/wiki/Special:FilePath/DAIKIN_AIR_CONDITIONER_INDOOR_UNIT.jpg?width=800",
    products: [
      { brand: "DAIKIN", name: "Split AC", detail: "1 Ton · 3 Star", price: "₹32,990", oldPrice: "₹41,990", img: "https://commons.wikimedia.org/wiki/Special:FilePath/DAIKIN_AIR_CONDITIONER_INDOOR_UNIT.jpg?width=600" },
      { brand: "LG", name: "Split Inverter AC", detail: "1.5 Ton · 5 Star", price: "₹44,990", oldPrice: "₹58,990", img: "https://commons.wikimedia.org/wiki/Special:FilePath/DAIKIN_AIR_CONDITIONER_INDOOR_UNIT_(4).jpg?width=600" },
      { brand: "SAMSUNG", name: "Smart Inverter AC", detail: "1.5 Ton · Wi-Fi", price: "₹48,990", oldPrice: "₹62,990", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Air_conditioner.jpg?width=600" },
      { brand: "OGENERAL", name: "Heavy Duty AC", detail: "2 Ton · 3 Star", price: "₹56,990", oldPrice: "₹71,990", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Air_conditioning_unit.jpg?width=600" },
    ],
  },
  "Kitchen Appliances": {
    subtitle: "Upgrade your kitchen with smart appliances",
    emoji: "🍳",
    bannerImage: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80",
    products: [
      { brand: "LG", name: "Microwave Oven", detail: "20 L Capacity", price: "₹7,990", oldPrice: "₹10,990", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80" },
      { brand: "PHILIPS", name: "Mixer Grinder", detail: "750 Watt", price: "₹3,490", oldPrice: "₹4,999", img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80" },
      { brand: "PHILIPS", name: "Air Fryer", detail: "5 L Capacity", price: "₹6,990", oldPrice: "₹9,999", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&q=80" },
      { brand: "BOSCH", name: "Dishwasher", detail: "12 Place Settings", price: "₹39,990", oldPrice: "₹52,990", img: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&q=80" },
    ],
  },
};

function CategoryPage({ category }) {
  const data = categoryData[category];
  if (!data) return <h2>Category not found</h2>;

  return (
    <div className="category-page">
      {/* ===== BANNER ===== */}
      <section style={{ background: "linear-gradient(135deg,#0a3d62 0%,#0a7a5e 100%)", borderRadius: "20px", margin: "20px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ padding: "44px 20px 44px 36px", flex: "1", textAlign: "left" }}>
          <span style={{ background: "#ff6b00", color: "#fff", padding: "7px 18px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>SAGAR ELECTRONICS</span>
          <h1 style={{ color: "#ffffff", fontWeight: "900", lineHeight: "1.1", margin: "18px 0 10px", fontSize: "52px" }}>
            Explore <span style={{ color: "#ffd700" }}>{category}</span>
          </h1>
          <p style={{ color: "#ffffff", opacity: "0.9", marginTop: "6px", lineHeight: "1.4", fontSize: "16px" }}>{data.subtitle}</p>
        </div>
        <div style={{ flex: "1", height: "280px" }}>
          <img
            src={data.bannerImage}
            alt={category}
            onError={(e) => { e.target.onerror = null; e.target.src = AC_FALLBACK; }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="category-products">
        <div className="category-heading">
          <div>
            <h2>{category} Collection</h2>
            <p>Find the perfect appliance for your home</p>
          </div>
          <span className="product-count">{data.products.length} Products</span>
        </div>

        <div className="category-product-grid">
          {data.products.map((product, index) => (
            <div className="category-product-card" key={index}>
              <div className="product-visual" style={{ padding: "0", overflow: "hidden", height: "190px", position: "relative", background: "#f8fafc" }}>
                <img
                  src={product.img}
                  alt={product.name}
                  onError={(e) => { e.target.onerror = null; e.target.src = AC_FALLBACK; }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="product-badge" style={{ position: "absolute", top: "12px", left: "12px" }}>SPECIAL OFFER</div>
              </div>
              <div className="product-info" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "11px", fontWeight: "800", color: "#ff6b00", letterSpacing: "1.5px" }}>{product.brand}</div>
                <h3 style={{ margin: "6px 0 4px" }}>{product.name}</h3>
                <p>{product.detail}</p>
                <div style={{ fontSize: "13px", color: "#999", textDecoration: "line-through" }}>{product.oldPrice}</div>
                <div className="product-price">{product.price}</div>
                <Link to="/visit-store" className="product-shop-btn">Enquire Now →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;