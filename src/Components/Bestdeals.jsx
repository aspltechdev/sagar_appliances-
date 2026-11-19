import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DealsPage.css";

const deals = [
  {
    brand: "SAMSUNG",
    name: "SAMSUNG 55 inch 4K UHD Smart LED TV",
    price: "₹29,999",
    oldPrice: "₹59,999",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    tag: "50% OFF",
  },
  {
    brand: "LG",
    name: "LG 1.5 Ton 5-Star Inverter Split AC",
    price: "₹34,499",
    oldPrice: "₹68,999",
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80",
    tag: "50% OFF",
  },
  {
    brand: "SAMSUNG",
    name: "SAMSUNG 260L Double Door Fridge",
    price: "₹24,999",
    oldPrice: "₹49,999",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
    tag: "50% OFF",
  },
];

function DealsPage() {
  const [time, setTime] = useState({ d: 2, h: 14, m: 36, s: 22 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { d, h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; d -= 1; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div style={{ fontFamily: "Arial", background: "#f2f2f2" }}>
      {/* HEADER */}
      <div style={{ background: "#0b6fd6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 30px" }}>
        <div style={{ fontSize: "30px", fontWeight: "900", lineHeight: "1" }}>⚡ SAGAR <span style={{ fontSize: "18px", fontWeight: "400" }}><br />Electronics</span></div>
        <input placeholder="Search for products, brands and more" style={{ width: "45%", padding: "10px 14px", borderRadius: "6px", border: "none" }} />
        <div style={{ display: "flex", gap: "25px", fontSize: "14px" }}>
          <span>👤 Login</span><span>♡ Wishlist</span><span>🛒 Cart</span>
        </div>
      </div>

      {/* HERO - FESTIVAL DEALS */}
      <div style={{ background: "linear-gradient(90deg,#1a0a6e,#4a1ab5,#ff8a00)", color: "#fff", display: "flex", padding: "30px", alignItems: "center", gap: "20px", position: "relative", overflow: "hidden" }}>
        <div style={{ flex: 1.2 }}>
          <h1 style={{ fontSize: "52px", margin: "0", lineHeight: "1" }}>Festival Deals</h1>
          <h1 style={{ fontSize: "52px", margin: "0", color: "#ffd700" }}>Up to 50% OFF</h1>
          <div style={{ background: "#ff6b00", display: "inline-block", padding: "6px 14px", borderRadius: "4px", margin: "12px 0", fontWeight: "700" }}>Limited Time Offer — Ends Soon!</div>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {[
              [pad(time.d), "DAYS"],
              [pad(time.h), "HOURS"],
              [pad(time.m), "MINS"],
              [pad(time.s), "SECS"],
            ].map(([v, l], i) => (
              <div key={i} style={{ background: "#0a4a9e", padding: "10px 18px", borderRadius: "8px", textAlign: "center" }}>
                <div style={{ fontSize: "28px", fontWeight: "900" }}>{v}</div>
                <div style={{ fontSize: "11px" }}>{l}</div>
              </div>
            ))}
          </div>
          <button style={{ background: "#ff6b00", color: "#fff", border: "none", padding: "10px 22px", borderRadius: "6px", marginTop: "16px", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>Shop Now →</button>
        </div>
        <div style={{ flex: 1 }}>
          <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80" alt="Festival TV" style={{ width: "100%", borderRadius: "10px", height: "260px", objectFit: "cover" }} />
        </div>
      </div>

      {/* DEALS GRID */}
      <h2 style={{ textAlign: "center", margin: "28px 0 18px", fontSize: "26px" }}>Top Festival Deals — Shop & Save 50%</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px", padding: "0 24px 30px" }}>
        {deals.map((d, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", position: "relative", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ background: "#ff6b00", color: "#fff", fontWeight: "800", padding: "6px 10px", borderRadius: "6px", lineHeight: "1.1" }}>{d.tag}</span>
              {/* COMPANY NAME ON TOP */}
              <span style={{ color: "#c62828", fontWeight: "900", fontSize: "22px", letterSpacing: "1px" }}>{d.brand}</span>
            </div>
            <img src={d.img} alt={d.name} style={{ width: "100%", height: "180px", objectFit: "contain", margin: "14px 0" }} />
            {/* COMPANY NAME + PRODUCT NAME */}
            <h3 style={{ fontSize: "16px", margin: "0" }}>{d.name}</h3>
            <div style={{ margin: "10px 0 4px" }}>
              <span style={{ fontSize: "28px", fontWeight: "900" }}>{d.price}</span>
              <span style={{ color: "#888", textDecoration: "line-through", marginLeft: "8px" }}>{d.oldPrice}</span>
            </div>
            <div style={{ color: "green", fontSize: "13px", fontWeight: "600" }}>✓ Free Delivery</div>
            <Link to="/visit-store" style={{ display: "block", background: "#ff6b00", color: "#fff", textDecoration: "none", padding: "11px", borderRadius: "8px", marginTop: "12px", fontWeight: "800" }}>Enquire Now</Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "12px", fontSize: "13px", background: "#e8e8e8" }}>
        SAGAR Electronics • Trusted • Secure Payments • Easy Returns • Customer Care: 1800-123-4567
      </div>
    </div>
  );
}

export default DealsPage;