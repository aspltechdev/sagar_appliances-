import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const cats = [
  { name: "Mobiles &\nAccessories", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", link: "/tv" },
  { name: "Televisions\n& Entertainment", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200", link: "/tv" },
  { name: "Refrigerators", img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=200", link: "/fridge" },
  { name: "Washing\nMachines", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200", link: "/washing-machine" },
  { name: "Air Conditioners", img: "https://images.unsplash.com/photo-1631545806609-24040d63f93c?w=200", link: "/ac" },
  { name: "Kitchen\nAppliances", img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=200", link: "/kitchen" },
  { name: "Home\nAppliances", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=200", link: "/kitchen" },
  { name: "Small\nAppliances", img: "https://images.unsplash.com/photo-1565151443833-29bf49a1f4c7?w=200", link: "/kitchen" },
];

const brands = ["SAMSUNG", "SONY", "LG", "Whirlpool", "IFB", "BOSCH", "O'GENERAL", "BLUE STAR", "DAIKIN"];

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // ✅ WORKING SEARCH
  const doSearch = () => {
    const q = search.toLowerCase();
    if (q.includes("tv") || q.includes("television") || q.includes("samsung") || q.includes("sony") || q.includes("mobile")) navigate("/tv");
    else if (q.includes("fridge") || q.includes("refrigerator")) navigate("/fridge");
    else if (q.includes("ac") || q.includes("cooler") || q.includes("air")) navigate("/ac");
    else if (q.includes("wash") || q.includes("washing")) navigate("/washing-machine");
    else if (q.includes("kitchen") || q.includes("mixer") || q.includes("grinder")) navigate("/kitchen");
    else if (q === "") alert("Type something to search - e.g. TV, Fridge, AC");
    else navigate("/Bestdeals");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>

      {/* TOP MAROON BAR */}
      <div style={{ background: "#7a0c1e", color: "#fff", fontSize: "12.5px", padding: "8px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <span>📍 120, Kamaraj Salai, (Next to Balaji Theatre), Puducherry - 605 013.</span>
          <span>📞 86080 90719 &nbsp;|&nbsp; 63694 24781 &nbsp;&nbsp;&nbsp; ✉️ sagarhomeappliancesandmobiles@gmail.com</span>
        </div>
      </div>

      {/* HEADER - CORRECT LOGO.JPEG */}
      <header style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "22px", padding: "12px 16px", flexWrap: "wrap" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src="/logo.jpeg" alt="SAGAR" style={{ width: "62px", height: "62px", borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ lineHeight: 1 }}>
            <span style={{ fontSize: "38px", fontWeight: "900", color: "#7a0c1e", letterSpacing: "1px" }}>SAGAR</span>
            <span style={{ display: "block", background: "#7a0c1e", color: "#fff", fontSize: "11px", fontWeight: "700", padding: "3px 6px", marginTop: "2px" }}>HOME APPLIANCES & MOBILES</span>
          </span>
        </Link>
        {/* ✅ SEARCH NOW WORKS - Type + Enter */}
        <form onSubmit={(e) => { e.preventDefault(); doSearch(); }} style={{ flex: 1, minWidth: "260px", display: "flex", border: "1px solid #ddd", borderRadius: "20px", overflow: "hidden" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for Mobiles, TVs, Refrigerators, ACs and more..." style={{ flex: 1, border: "none", outline: "none", padding: "11px 16px", fontSize: "14px" }} />
          <button type="submit" style={{ background: "#7a0c1e", color: "#fff", border: "none", padding: "0 22px", fontSize: "18px", cursor: "pointer" }}>🔍</button>
        </form>
        <div style={{ display: "flex", gap: "26px", textAlign: "center", fontSize: "12px", fontWeight: "600", color: "#333" }}>
          <Link to="/Bestdeals" style={{ textDecoration: "none", color: "#333" }}>🎁<br/>Offers<br/>& Deals</Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>👤<br/>My<br/>Account</Link>
          <span>♡<br/>Wishlist</span>
          <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>🛒<sup style={{ background: "#ff9900", color: "#fff", padding: "1px 6px", borderRadius: "50%" }}>0</sup><br/>&nbsp;</Link>
        </div>
      </header>

      {/* NAV - NOW CLICKABLE */}
      <nav style={{ background: "#7a0c1e", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "18px", padding: "0 16px", flexWrap: "wrap", fontSize: "14px", fontWeight: "600" }}>
          <Link to="/Bestdeals" style={{ background: "#f5c242", color: "#111", padding: "10px 18px", borderRadius: "8px", margin: "8px 0", textDecoration: "none" }}>☰ All Categories ⌄</Link>
          <Link to="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "2px solid #fff", paddingBottom: "4px" }}>Home</Link>
          <Link to="/tv" style={{ color: "#fff", textDecoration: "none" }}>Mobiles ⌄</Link>
          <Link to="/tv" style={{ color: "#fff", textDecoration: "none" }}>TV & Entertainment ⌄</Link>
          <Link to="/kitchen" style={{ color: "#fff", textDecoration: "none" }}>Home Appliances ⌄</Link>
          <Link to="/kitchen" style={{ color: "#fff", textDecoration: "none" }}>Kitchen Appliances ⌄</Link>
          <Link to="/ac" style={{ color: "#fff", textDecoration: "none" }}>Cooling ⌄</Link>
          <Link to="/Bestdeals" style={{ color: "#fff", textDecoration: "none" }}>Brands</Link>
          <Link to="/Bestdeals" style={{ color: "#f5c242", textDecoration: "none" }}>🏷️ Offers</Link>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </div>
      </nav>

      {/* HERO - FIXED IMAGE + BADGE */}
      <section style={{ background: "linear-gradient(90deg,#4a0510,#7a0c1e 55%,#2a0a0a)", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", padding: "36px 16px 30px", gap: "20px" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div style={{ color: "#f5c242", fontWeight: "800", fontSize: "14px", letterSpacing: "1px" }}>PUDUCHERRY'S TRUSTED ELECTRONICS STORE</div>
            <h1 style={{ fontSize: "48px", lineHeight: "1.05", margin: "10px 0" }}>Upgrade Your<br/>Home & Lifestyle</h1>
            <p style={{ fontSize: "16px", opacity: 0.9 }}>Latest Home Appliances, Mobiles & More<br/>at the Best Prices</p>
            <Link to="/Bestdeals" style={{ display: "inline-block", background: "#f5c242", color: "#111", padding: "12px 26px", borderRadius: "20px", fontWeight: "800", fontSize: "15px", cursor: "pointer", marginTop: "12px", textDecoration: "none" }}>Shop Now →</Link>
            <Link to="/tv" style={{ display: "inline-block", background: "#fff", color: "#7a0c1e", padding: "12px 26px", borderRadius: "20px", fontWeight: "800", fontSize: "15px", marginTop: "12px", marginLeft: "10px", textDecoration: "none" }}>Explore TV</Link>
          </div>
          <div style={{ flex: 1, minWidth: "300px", textAlign: "center", position: "relative" }}>
            {/* ✅ BADGE FIXED - Inside image, not cut */}
            <div style={{ position: "absolute", left: "14px", top: "14px", background: "gold", color: "#7a0c1e", borderRadius: "50%", width: "88px", height: "88px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", zIndex: 2, border: "3px solid #fff" }}>Best<br/>Deals<br/>Always</div>
            {/* ✅ HERO IMAGE FIXED - Now TV, not Kitchen */}
            <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&q=80" alt="TV Appliances" style={{ width: "100%", maxWidth: "620px", borderRadius: "16px", objectFit: "cover", height: "280px" }} />
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "space-between", padding: "18px 16px", fontSize: "13px", borderBottom: "1px solid #eee" }}>
        {[["🚚","Free Delivery","within Puducherry*"],["🔧","Professional","Installation"],["🛡️","Authorized","Warranty"],["💳","Easy EMI","Options"],["🔄","Exchange","Your Old Device"],["🎧","After Sales","Support"]].map(([icon,a,b]) => (
          <span key={a} style={{ display: "flex", gap: "10px", alignItems: "center" }}><span style={{ fontSize: "26px", color: "#7a0c1e" }}>{icon}</span><span><b>{a}</b><br/>{b}</span></span>
        ))}
      </div>

      {/* SHOP BY CATEGORY - NOW CLICKABLE */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 16px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#7a0c1e", margin: 0 }}>— Shop by Category</h2>
        <Link to="/Bestdeals" style={{ color: "#7a0c1e", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>View All Categories →</Link>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "12px", padding: "0 16px", overflowX: "auto" }}>
        {cats.map(c => (
          <Link key={c.name} to={c.link} style={{ minWidth: "130px", flex: 1, background: "#fff", borderRadius: "14px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", padding: "14px 8px", textAlign: "center", textDecoration: "none", color: "#111" }}>
            <img src={c.img} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "10px" }} alt={c.name} />
            <div style={{ fontSize: "12px", fontWeight: "700", marginTop: "8px", whiteSpace: "pre-line" }}>{c.name}</div>
          </Link>
        ))}
      </div>

      {/* 3 OFFER BANNERS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "14px", padding: "20px 16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "260px", background: "#5b0a1a", color: "#fff", borderRadius: "12px", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><div style={{ color: "#ffd700", fontSize: "20px", fontFamily: "serif" }}>🪔 Diwali Special<br/>Offers</div></div>
          <div style={{ textAlign: "right" }}><b>Up to<br/>40% OFF</b><br/><Link to="/Bestdeals" style={{ display: "inline-block", background: "#f5c242", color: "#111", padding: "5px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "800", textDecoration: "none", marginTop: "6px" }}>Shop Now →</Link></div>
        </div>
        <Link to="/enquiry" style={{ flex: 1, minWidth: "260px", background: "#0a4a7a", color: "#fff", borderRadius: "12px", padding: "18px", textDecoration: "none" }}>
          <b>Exchange & Upgrade</b><br/><span style={{ fontSize: "13px" }}>Get Best Value for<br/>Your Old Appliances →</span>
        </Link>
        <Link to="/enquiry" style={{ flex: 1, minWidth: "260px", background: "#fff3d6", borderRadius: "12px", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: "#111" }}>
          <div><b style={{ color: "#7a0c1e", fontSize: "18px" }}>Easy<br/>EMI Options</b><br/><span style={{ fontSize: "13px" }}>on All Major Brands</span></div>
          <div style={{ background: "#7a0c1e", color: "#fff", padding: "10px", borderRadius: "12px", fontWeight: "900", textAlign: "center", fontSize: "14px" }}>0%<br/>Interest*</div>
        </Link>
      </div>

      {/* OUR TOP BRANDS - SLIDING */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6px 16px 28px" }}>
        <h2 style={{ color: "#7a0c1e", margin: "0 0 14px" }}>— Our Top Brands</h2>
        <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "6px" }}>
          {brands.map(b => (
            <Link key={b} to="/Bestdeals" style={{ border: "1px solid #eee", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", padding: "12px 18px", borderRadius: "10px", fontWeight: "900", whiteSpace: "nowrap", color: b === "LG" ? "#a50034" : b === "BOSCH" ? "#e30613" : b === "DAIKIN" ? "#0090da" : "#0f2a6b", fontSize: "15px", textDecoration: "none", background: "#fff" }}>{b}</Link>
          ))}
          <Link to="/Bestdeals" style={{ border: "1px solid #7a0c1e", color: "#7a0c1e", padding: "12px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap", textDecoration: "none" }}>View All Brands →</Link>
        </div>
      </div>
    </div>
  );
}