import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categorypage from "./components/Categorypage";
import "./App.css";
import EnquiryForm from "./components/EnquiryForm";

// ===== REAL IMAGES - FIXED =====
const IMG = {
  tv: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
  ac: "/ac.jpg",
  fridge: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
  washer: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80",
  kitchen: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80",
  tv2: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",
  hero: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&q=80",
};

// ===== CART HELPER - KEPT FOR CART PAGE =====
function addToCart(product) {
  const oldCart = JSON.parse(localStorage.getItem("sagar_cart") || "[]");
  const found = oldCart.find((i) => i.id === product.id);
  if (found) {
    found.qty += 1;
  } else {
    oldCart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("sagar_cart", JSON.stringify(oldCart));
  window.dispatchEvent(new Event("cartUpdated"));
  alert(`${product.name} Added to Cart!`);
}

// ===== CORRECT LOGO - YOUR logo.jpeg FROM public/ =====
function SagarLogo({ size = 30 }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", verticalAlign: "middle" }}>
      <img src="/logo.jpeg" alt="SAGAR" style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", border: "2px solid #d4af37" }} />
      <span style={{ lineHeight: 1 }}>
        <span style={{ display: "block", fontSize: size * 0.6, fontWeight: "900", color: "#7a0c1e", letterSpacing: "1px" }}>SAGAR</span>
        <span style={{ display: "block", background: "#7a0c1e", color: "#fff", fontSize: size * 0.22, fontWeight: "700", padding: "2px 4px", marginTop: "2px" }}>HOME APPLIANCES & MOBILES</span>
      </span>
    </span>
  );
}

// ===== CART PAGE =====
function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("sagar_cart") || "[]"));
  const [promo, setPromo] = useState("");
  const [promoOff, setPromoOff] = useState(0);

  const save = (newCart) => {
    setCart(newCart);
    localStorage.setItem("sagar_cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQty = (id, change) => {
    save(cart.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + change) } : i));
  };

  const removeItem = (id) => {
    if (window.confirm("Remove this item from cart?")) {
      save(cart.filter(i => i.id !== id));
    }
  };

  const applyPromo = () => {
    if (promo.toUpperCase() === "SAGAR500") { setPromoOff(500); alert("Promo Applied! ₹500 OFF"); }
    else { setPromoOff(0); alert("Invalid Code. Try: SAGAR500"); }
  };

  const totalMrp = cart.reduce((s, i) => s + i.mrp * i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = totalMrp - subtotal;
  const total = subtotal - promoOff;

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><SagarLogo size={50} /></div>
        <h2 style={{ fontSize: 30 }}>🛒 Your Cart is Empty</h2>
        <p style={{ color: "#666" }}>Add some products from Best Deals</p>
        <Link to="/" style={{ background: "#7a0c1e", color: "#fff", padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontWeight: "bold", display: "inline-block", marginTop: 10 }}>Continue Shopping →</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, fontFamily: "Arial" }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>Shopping Cart ({cart.length} items) <SagarLogo size={28} /></h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: 2, minWidth: 300 }}>
          {cart.map(item => (
            <div key={item.id} style={{ display: "flex", gap: 16, background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: 16, marginBottom: 14 }}>
              <img src={item.img} alt={item.name} style={{ width: 110, height: 110, objectFit: "cover", borderRadius: 8 }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 16, margin: 0 }}>{item.name}</h3>
                <p style={{ margin: "8px 0" }}><b style={{ fontSize: 18 }}>₹{item.price.toLocaleString("en-IN")}</b> <s style={{ color: "#999" }}>₹{item.mrp.toLocaleString("en-IN")}</s> <span style={{ color: "green", fontWeight: "bold" }}>{Math.round((1 - item.price / item.mrp) * 100)}% off</span></p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: 20 }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ padding: "4px 12px", border: "none", background: "none", fontSize: 18, cursor: "pointer" }}>−</button>
                    <b>{item.qty}</b>
                    <button onClick={() => updateQty(item.id, 1)} style={{ padding: "4px 12px", border: "none", background: "none", fontSize: 18, cursor: "pointer" }}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", color: "red", cursor: "pointer", fontWeight: "bold" }}>REMOVE 🗑️</button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => { if (window.confirm("Clear all?")) save([]); }} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", textDecoration: "underline" }}>Clear All Cart</button>
        </div>

        <div style={{ flex: 1, minWidth: 280, background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: 20 }}>
          <h3 style={{ marginTop: 0, borderBottom: "1px solid #eee", paddingBottom: 10 }}>PRICE DETAILS</h3>
          <p style={{ display: "flex", justifyContent: "space-between" }}><span>Price ({cart.length} items)</span><span>₹{totalMrp.toLocaleString("en-IN")}</span></p>
          <p style={{ display: "flex", justifyContent: "space-between", color: "green" }}><span>Discount</span><span>− ₹{discount.toLocaleString("en-IN")}</span></p>
          <p style={{ display: "flex", justifyContent: "space-between" }}><span>Delivery</span><span style={{ color: "green" }}>FREE</span></p>
          {promoOff > 0 && <p style={{ display: "flex", justifyContent: "space-between", color: "green" }}><span>Promo SAGAR500</span><span>− ₹500</span></p>}
          <hr />
          <h3 style={{ display: "flex", justifyContent: "space-between" }}><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></h3>
          <p style={{ color: "green", fontWeight: "bold" }}>You save ₹{(discount + promoOff).toLocaleString("en-IN")}</p>
          <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
            <input value={promo} onChange={e => setPromo(e.target.value)} placeholder="Promo: SAGAR500" style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
            <button onClick={applyPromo} style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#222", color: "#fff", cursor: "pointer" }}>Apply</button>
          </div>
          <Link to="/contact" style={{ display: "block", textAlign: "center", background: "#7a0c1e", color: "#fff", padding: "14px", borderRadius: 10, textDecoration: "none", fontWeight: "bold" }}>Proceed to Checkout →</Link>
          <Link to="/" style={{ display: "block", textAlign: "center", marginTop: 12, color: "#333" }}>← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const cats = [
    { name: "Mobiles &\nAccessories", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", link: "/tv", offer: "Up to 45% OFF" },
    { name: "Televisions\n& Entertainment", img: IMG.tv, link: "/tv", offer: "Up to 45% OFF" },
    { name: "Refrigerators", img: IMG.fridge, link: "/fridge", offer: "Up to 35% OFF" },
    { name: "Washing\nMachines", img: IMG.washer, link: "/washing-machine", offer: "Up to 30% OFF" },
    { name: "Air Conditioners", img: IMG.ac, link: "/ac", offer: "Up to 40% OFF" },
    { name: "Kitchen\nAppliances", img: IMG.kitchen, link: "/kitchen", offer: "Up to 50% OFF" },
    { name: "Home\nAppliances", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=200", link: "/kitchen", offer: "Up to 40% OFF" },
    { name: "Small\nAppliances", img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=200", link: "/kitchen", offer: "Up to 50% OFF" },
  ];

  const deals = [
    { id: 101, brand: "SAMSUNG", img: IMG.tv, name: '55" 4K QLED Smart TV', price: 52999, mrp: 89990, priceText: "₹52,999", old: "₹89,990", off: "41% OFF", emi: "EMI Available" },
    { id: 102, brand: "LG", img: IMG.ac, name: "1.5 Ton 5 Star Inverter AC", price: 38990, mrp: 58990, priceText: "₹38,990", old: "₹58,990", off: "34% OFF", emi: "EMI Available" },
    { id: 103, brand: "SAMSUNG", img: IMG.fridge, name: "320L Double Door Fridge", price: 29990, mrp: 42990, priceText: "₹29,990", old: "₹42,990", off: "30% OFF", emi: "EMI Available" },
    { id: 104, brand: "WHIRLPOOL", img: IMG.washer, name: "8 Kg Front Load Washer", price: 32990, mrp: 45990, priceText: "₹32,990", old: "₹45,990", off: "28% OFF", emi: "No Cost EMI" },
  ];

  const brands = ["SAMSUNG", "SONY", "LG", "Whirlpool", "IFB", "BOSCH", "O'GENERAL", "BLUE STAR", "DAIKIN"];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>

      {/* ===== HERO - CODE ONLY - LIKE SCREENSHOT - CENTERED ===== */}
      <section style={{ background: "linear-gradient(90deg,#2a050a,#5b0a1a 42%,#3a0a12)", color: "#fff", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", padding: "0 16px", minHeight: "360px" }}>

          {/* LEFT - CENTERED LIKE SCREENSHOT */}
          <div style={{ flex: "0 0 360px", padding: "30px 0", zIndex: 2, textAlign: "center" }}>
            <div style={{ color: "#f5c242", fontWeight: "800", fontSize: "13px", letterSpacing: "0.5px", lineHeight: 1.5 }}>PUDUCHERRY'S TRUSTED ELECTRONICS<br />STORE</div>
            <h1 style={{ fontSize: "52px", lineHeight: "1.05", margin: "14px 0", color: "#fff", fontWeight: "700" }}>Upgrade Your<br />Home &<br />Lifestyle</h1>
            <p style={{ fontSize: "14px", opacity: 0.9, lineHeight: 1.5 }}>Latest Home Appliances, Mobiles & More<br />at the Best Prices</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "18px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/Bestdeals" style={{ background: "#f5c242", color: "#111", padding: "11px 22px", borderRadius: "20px", textDecoration: "none", fontWeight: "800", fontSize: "14px" }}>Shop Now →</Link>
              <a href="tel:8608090719" style={{ background: "#fff", color: "#7a0c1e", padding: "11px 18px", borderRadius: "20px", textDecoration: "none", fontWeight: "800", fontSize: "14px" }}>📞 Call Now</a>
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px", fontSize: "13px", fontWeight: "700", justifyContent: "center" }}>
              <span>⭐ 4.8 Rating</span><span>• 10,000+ Happy Customers</span>
            </div>
          </div>

          {/* RIGHT - COLLAGE LIKE SCREENSHOT */}
          <div style={{ flex: 1, minWidth: "320px", position: "relative", height: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", left: "0%", top: "22%", background: "#f5c242", color: "#111", borderRadius: "50%", width: "82px", height: "82px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontWeight: "900", fontSize: "12px", lineHeight: 1.2, zIndex: 5, border: "3px solid #fff" }}>🏆 Best<br />Deals<br />Always</div>

            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", width: "100%", justifyContent: "center", paddingLeft: "70px" }}>
              <img src={IMG.washer} alt="Washing Machine" style={{ width: "17%", height: "160px", objectFit: "cover", borderRadius: "10px" }} />
              <img src={IMG.fridge} alt="Fridge" style={{ width: "19%", height: "230px", objectFit: "cover", borderRadius: "10px" }} />
              <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "8px" }}>
                {/* ✅ AC as real image /ac.jpg, not card */}
                <img src={IMG.ac} alt="AC" style={{ width: "100%", height: "60px", objectFit: "cover", borderRadius: "8px", background: "#fff" }} />
                <img src={IMG.tv} alt="TV" style={{ width: "100%", height: "115px", objectFit: "cover", borderRadius: "8px" }} />
                <img src={IMG.kitchen} alt="Microwave" style={{ width: "100%", height: "60px", objectFit: "cover", borderRadius: "8px" }} />
              </div>
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80" alt="Mobile" style={{ width: "10%", height: "95px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }} />
              <img src="https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&q=80" alt="Mixer" style={{ width: "14%", height: "130px", objectFit: "cover", borderRadius: "10px" }} />
            </div>

            <div style={{ position: "absolute", bottom: "18px", left: "8%", right: "4%", height: "3px", background: "linear-gradient(90deg,transparent,#f5c242,transparent)" }} />
            <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px" }}>
              <span style={{ width: "18px", height: "5px", background: "#fff", borderRadius: "4px", display: "block" }} />
              <span style={{ width: "6px", height: "5px", background: "rgba(255,255,255,0.5)", borderRadius: "4px", display: "block" }} />
              <span style={{ width: "6px", height: "5px", background: "rgba(255,255,255,0.5)", borderRadius: "4px", display: "block" }} />
            </div>
          </div>
        </div>
        <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}>‹</span>
        <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}>›</span>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "space-between", padding: "18px 16px", fontSize: "13px", borderBottom: "1px solid #eee" }}>
        {[["🚚", "Free Delivery", "within Puducherry*"], ["🔧", "Professional", "Installation"], ["🛡️", "Authorized", "Warranty"], ["💳", "Easy EMI", "Options"], ["🔄", "Exchange", "Your Old Device"], ["🎧", "After Sales", "Support"]].map(([icon, a, b]) => (
          <span key={a} style={{ display: "flex", gap: "10px", alignItems: "center" }}><span style={{ fontSize: "26px", color: "#7a0c1e" }}>{icon}</span><span><b>{a}</b><br />{b}</span></span>
        ))}
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 16px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#7a0c1e", margin: 0 }}>— Shop by Category</h2>
        <Link to="/Bestdeals" style={{ color: "#7a0c1e", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>View All Categories →</Link>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "12px", padding: "0 16px", overflowX: "auto" }}>
        {cats.map(c => (
          <Link key={c.name} to={c.link} style={{ minWidth: "130px", flex: 1, background: "#fff", borderRadius: "14px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", padding: "14px 8px", textAlign: "center", textDecoration: "none", color: "#111" }}>
            <img src={c.img} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "10px" }} alt={c.name} />
            <div style={{ fontSize: "12px", fontWeight: "700", marginTop: "8px", whiteSpace: "pre-line" }}>{c.name}</div>
            <div style={{ fontSize: "11px", color: "#0a7a5e", fontWeight: "700" }}>{c.offer}</div>
          </Link>
        ))}
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "14px", padding: "20px 16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "260px", background: "#5b0a1a", color: "#fff", borderRadius: "12px", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><div style={{ color: "#ffd700", fontSize: "20px", fontFamily: "serif" }}>🪔 Diwali Special<br />Offers</div></div>
          <div style={{ textAlign: "right" }}><b>Up to<br />40% OFF</b><br /><Link to="/Bestdeals" style={{ background: "#f5c242", color: "#111", padding: "5px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "800", textDecoration: "none" }}>Shop Now →</Link></div>
        </div>
        <Link to="/enquiry" style={{ flex: 1, minWidth: "260px", background: "#0a4a7a", color: "#fff", borderRadius: "12px", padding: "18px", textDecoration: "none", display: "block" }}>
          <b>Exchange & Upgrade</b><br /><span style={{ fontSize: "13px" }}>Get Best Value for<br />Your Old Appliances →</span>
        </Link>
        <Link to="/enquiry" style={{ flex: 1, minWidth: "260px", background: "#fff3d6", borderRadius: "12px", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" }}>
          <div><b style={{ color: "#7a0c1e", fontSize: "18px" }}>Easy<br />EMI Options</b><br /><span style={{ fontSize: "13px", color: "#111" }}>on All Major Brands →</span></div>
          <div style={{ background: "#7a0c1e", color: "#fff", padding: "10px", borderRadius: "12px", fontWeight: "900", textAlign: "center", fontSize: "14px" }}>0%<br />Interest*</div>
        </Link>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px 10px" }}>
        <h2 style={{ fontSize: "24px", textAlign: "center", color: "#7a0c1e" }}>🔥 Best Deals Today</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "16px", marginTop: "16px" }}>
          {deals.map(d => (
            <div key={d.name} style={{ background: "#fff", border: "1px solid #eee", borderRadius: "16px", padding: "12px", paddingBottom: "16px", boxShadow: "0 4px 14px rgba(0,0,0,0.04)", textAlign: "center" }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "12px" }} />
              <div style={{ fontSize: "11px", fontWeight: "800", color: "#0a7a5e", marginTop: "10px" }}>{d.brand}</div>
              <h3 style={{ fontSize: "15px", margin: "8px 0", minHeight: "38px" }}>{d.name}</h3>
              <div><b style={{ fontSize: "19px" }}>{d.priceText}</b> <s style={{ color: "#888", fontSize: "13px" }}>{d.old}</s></div>
              <div style={{ fontSize: "12px", marginTop: "6px" }}><span style={{ background: "#fff3e6", color: "#ff6b00", padding: "3px 8px", borderRadius: "20px", fontWeight: "800" }}>{d.off}</span> <span style={{ color: "#0a7a5e", fontWeight: "700" }}>✓ {d.emi}</span></div>
              <Link to="/enquiry" style={{ display: "block", background: "#7a0c1e", color: "#fff", padding: "10px", borderRadius: "8px", marginTop: "12px", fontWeight: "800", textDecoration: "none", fontSize: "14px" }}>Enquire Now →</Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandSlide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .brand-track { display: flex; gap: 12px; width: max-content; animation: brandSlide 22s linear infinite; }
        .brand-track:hover { animation-play-state: paused; }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 16px 28px" }}>
        <h2 style={{ color: "#7a0c1e", margin: "0 0 14px" }}>— Our Top Brands</h2>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "4px 0" }}>
          <div className="brand-track">
            {[...brands, ...brands].map((b, i) => (
              <Link key={i} to="/Bestdeals" style={{ border: "1px solid #eee", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", padding: "12px 18px", borderRadius: "10px", fontWeight: "900", whiteSpace: "nowrap", background: "#fff", color: b === "LG" ? "#a50034" : b === "BOSCH" ? "#e30613" : b === "DAIKIN" ? "#0090da" : "#0f2a6b", fontSize: "15px", flexShrink: 0, textDecoration: "none" }}>{b}</Link>
            ))}
            <Link to="/Bestdeals" style={{ border: "1px solid #7a0c1e", color: "#7a0c1e", padding: "12px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap", background: "#fff", flexShrink: 0, textDecoration: "none" }}>View All Brands →</Link>
          </div>
        </div>
      </div>

      <div style={{ background: "#f8fafc", padding: "30px 20px", textAlign: "center" }}>
        <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap", fontSize: "26px", margin: "0" }}>
          Why Puducherry Trusts <SagarLogo size={30} /> ?
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "16px" }}>
          <div style={{ background: "#fff", padding: "18px", borderRadius: "14px", width: "220px" }}><b>🏪 Visit Store</b><p style={{ fontSize: "13px", color: "#555" }}>120, Kamaraj Salai, Puducherry — See live demo before you buy</p></div>
          <div style={{ background: "#fff", padding: "18px", borderRadius: "14px", width: "220px" }}><b>💰 Best Price Promise</b><p style={{ fontSize: "13px", color: "#555" }}>Found cheaper? We will match the price</p></div>
          <div style={{ background: "#fff", padding: "18px", borderRadius: "14px", width: "220px" }}><b>⚡ Same Day Delivery</b><p style={{ fontSize: "13px", color: "#555" }}>Order before 4 PM, get it today in Puducherry</p></div>
        </div>
      </div>
    </div>
  );
}

function Bestdeals() {
  const [time, setTime] = useState({ d: 2, h: 14, m: 36, s: 22 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        let { d, h, m, s } = p;
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

  const items = [
    { id: 201, brand: "SAMSUNG", name: "SAMSUNG 55 inch 4K UHD Smart LED TV", price: 29999, mrp: 59999, priceText: "₹29,999", oldPrice: "₹59,999", img: IMG.tv },
    { id: 202, brand: "LG", name: "LG 1.5 Ton 5-Star Inverter Split AC", price: 34499, mrp: 68999, priceText: "₹34,499", oldPrice: "₹68,999", img: IMG.ac },
    { id: 203, brand: "SAMSUNG", name: "SAMSUNG 260L Double Door Fridge", price: 24999, mrp: 49999, priceText: "₹24,999", oldPrice: "₹49,999", img: IMG.fridge },
  ];

  return (
    <div style={{ background: "#f2f2f2", fontFamily: "Arial" }}>
      <div style={{ background: "linear-gradient(90deg,#1a0a6e,#4a1ab5,#ff8a00)", color: "#fff", display: "flex", padding: "30px", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1 style={{ fontSize: "48px", margin: "0", lineHeight: "1" }}>Festival Deals</h1>
          <h1 style={{ fontSize: "48px", margin: "0", color: "#ffd700" }}>Up to 50% OFF</h1>
          <div style={{ background: "#ff6b00", display: "inline-block", padding: "6px 14px", borderRadius: "4px", margin: "12px 0", fontWeight: "700" }}>Limited Time Offer — Ends Soon!</div>
          <div style={{ display: "flex", gap: "10px" }}>
            {[[pad(time.d), "DAYS"], [pad(time.h), "HOURS"], [pad(time.m), "MINS"], [pad(time.s), "SECS"]].map(([v, l], i) => (
              <div key={i} style={{ background: "#0a4a9e", padding: "10px 18px", borderRadius: "8px", textAlign: "center" }}>
                <div style={{ fontSize: "26px", fontWeight: "900" }}>{v}</div><div style={{ fontSize: "11px" }}>{l}</div>
              </div>
            ))}
          </div>
          <Link to="/tv" style={{ display: "inline-block", background: "#ff6b00", color: "#fff", padding: "10px 22px", borderRadius: "6px", marginTop: "16px", fontWeight: "800", textDecoration: "none" }}>Shop Now →</Link>
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <img src={IMG.tv} alt="Festival TV" style={{ width: "100%", borderRadius: "10px", height: "260px", objectFit: "cover" }} />
        </div>
      </div>
      <h2 style={{ textAlign: "center", margin: "28px 0 18px", fontSize: "26px" }}>Top Festival Deals — Shop & Save 50%</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px", padding: "0 24px 30px" }}>
        {items.map((d, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "16px", paddingBottom: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ background: "#ff6b00", color: "#fff", fontWeight: "800", padding: "6px 10px", borderRadius: "6px" }}>50%<br />OFF</span>
              <span style={{ color: "#c62828", fontWeight: "900", fontSize: "22px", letterSpacing: "1px" }}>{d.brand}</span>
            </div>
            <img src={d.img} alt={d.name} style={{ width: "100%", height: "180px", objectFit: "cover", margin: "14px 0", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "16px", margin: "0" }}>{d.name}</h3>
            <div style={{ margin: "10px 0 4px" }}><span style={{ fontSize: "28px", fontWeight: "900" }}>{d.priceText}</span><span style={{ color: "#888", textDecoration: "line-through", marginLeft: "8px" }}>{d.oldPrice}</span></div>
            <div style={{ color: "green", fontSize: "13px", fontWeight: "600" }}>✓ Free Delivery</div>
            <Link to="/enquiry" style={{ display: "block", background: "#ff6b00", color: "#fff", textDecoration: "none", padding: "11px", borderRadius: "8px", marginTop: "12px", fontWeight: "800" }}>Enquire Now</Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "12px", fontSize: "13px", background: "#e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
        <SagarLogo size={16} /> Electronics • Trusted • Secure Payments • Easy Returns • Customer Care: 86080 90719
      </div>
    </div>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    const c = JSON.parse(localStorage.getItem("sagar_cart") || "[]");
    return c.reduce((s, i) => s + i.qty, 0);
  });

  useEffect(() => {
    const update = () => {
      const c = JSON.parse(localStorage.getItem("sagar_cart") || "[]");
      setCartCount(c.reduce((s, i) => s + i.qty, 0));
    };
    window.addEventListener("cartUpdated", update);
    window.addEventListener("storage", update);
    return () => { window.removeEventListener("cartUpdated", update); window.removeEventListener("storage", update); };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bestdeals" element={<Bestdeals />} />
        <Route path="/deals" element={<Bestdeals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tv" element={<Categorypage category="TV" />} />
        <Route path="/fridge" element={<Categorypage category="Fridge" />} />
        <Route path="/ac" element={<Categorypage category="Air Conditioner" />} />
        <Route path="/washing-machine" element={<Categorypage category="Washing Machine" />} />
        <Route path="/kitchen" element={<Categorypage category="Kitchen Appliances" />} />
        <Route path="/contact" element={<EnquiryForm />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/visit-store" element={<EnquiryForm />} />
      </Routes>
      <Footer />
      <a href="https://wa.me/918608090719?text=Hi%20SAGAR%2C%20I%20want%20to%20enquire" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: "20px", right: "20px", background: "#25D366", color: "#fff", width: "56px", height: "56px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", zIndex: 999 }}>💬</a>
    </>
  );
}