import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ LIVE CART COUNT - was hardcoded 0
  const [cartCount, setCartCount] = useState(() => {
    try {
      const c = JSON.parse(localStorage.getItem("sagar_cart") || "[]");
      return c.reduce((s, i) => s + i.qty, 0);
    } catch { return 0; }
  });

  useEffect(() => {
    const update = () => {
      try {
        const c = JSON.parse(localStorage.getItem("sagar_cart") || "[]");
        setCartCount(c.reduce((s, i) => s + i.qty, 0));
      } catch {}
    };
    window.addEventListener("cartUpdated", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("cartUpdated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const doSearch = (e) => {
    if (e) e.preventDefault();
    const q = search.toLowerCase().trim();
    if (!q) return;
    if (q.includes("tv") || q.includes("television") || q.includes("mobile") || q.includes("samsung") || q.includes("sony")) navigate("/tv");
    else if (q.includes("fridge") || q.includes("refrigerator")) navigate("/fridge");
    else if (q.includes("ac") || q.includes("air") || q.includes("cooler") || q.includes("cooling")) navigate("/ac");
    else if (q.includes("wash")) navigate("/washing-machine");
    else if (q.includes("kitchen") || q.includes("mixer") || q.includes("grinder") || q.includes("kettle")) navigate("/kitchen");
    else navigate("/Bestdeals");
  };

  const navLink = {
    color: "#fff",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontSize: "13px",
    fontWeight: "600",
    padding: "4px 2px",
  };

  const iconStyle = { textDecoration: "none", color: "#333", textAlign: "center", fontSize: "11px", fontWeight: "700", lineHeight: 1.3, whiteSpace: "nowrap" };

  return (
    <header style={{ background: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
      
      {/* ===== TOP MAROON BAR - LIKE PHOTO ===== */}
      <div style={{ background: "#7a0c1e", color: "#fff", fontSize: "12px", padding: "6px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span>📍 120, Kamaraj Salai, (Next to Balaji Theatre), Puducherry - 605 013.</span>
          <span>📞 86080 90719 &nbsp;|&nbsp; 63694 24781 &nbsp;&nbsp; ✉️ sagarhomeappliancesandmobiles@gmail.com</span>
        </div>
      </div>

      {/* ===== MAIN HEADER - LOGO + SEARCH + ICONS ===== */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "20px", padding: "10px 16px", flexWrap: "wrap", borderBottom: "1px solid #eee" }}>

        {/* ✅ YOUR ORIGINAL LOGO - DO NOT CHANGE - logo.jpeg */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <img src="/logo.jpeg" alt="SAGAR" style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "2px solid #d4af37" }} />
          <span style={{ lineHeight: 1 }}>
            <span style={{ display: "block", fontSize: "30px", fontWeight: "900", color: "#7a0c1e", letterSpacing: "1px" }}>SAGAR</span>
            <span style={{ display: "block", background: "#7a0c1e", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 5px", marginTop: "2px" }}>HOME APPLIANCES & MOBILES</span>
          </span>
        </Link>

        {/* BIG SEARCH - LIKE PHOTO */}
        <form onSubmit={doSearch} style={{ flex: 1, minWidth: "240px", display: "flex", border: "1px solid #ddd", borderRadius: "20px", overflow: "hidden", background: "#fff" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Mobiles, TVs, Refrigerators, ACs and more..."
            style={{ flex: 1, border: "none", outline: "none", padding: "10px 14px", fontSize: "13px" }}
          />
          <button type="submit" style={{ background: "#7a0c1e", color: "#fff", border: "none", padding: "0 18px", cursor: "pointer", fontSize: "16px" }}>🔍</button>
        </form>

        {/* ICONS - LIKE PHOTO */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <Link to="/Bestdeals" style={iconStyle}>🎁<br />Offers<br />& Deals</Link>
          <Link to="/contact" style={iconStyle}>👤<br />My<br />Account</Link>
          <Link to="/Bestdeals" style={iconStyle}>♡<br />Wishlist</Link>
          <Link to="/cart" style={iconStyle}>
            <span style={{ position: "relative", display: "inline-block" }}>
              🛒<span style={{ position: "absolute", top: "-8px", right: "-10px", background: "#ff9900", color: "#fff", fontSize: "9px", padding: "1px 5px", borderRadius: "50%" }}>{cartCount}</span>
            </span><br />Cart
          </Link>
        </div>
      </div>

      {/* ===== MAROON NAV - LIKE PHOTO ===== */}
      <nav style={{ background: "#7a0c1e", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "16px", padding: "0 16px", flexWrap: "wrap" }}>
          <Link to="/Bestdeals" style={{ background: "#f5c242", color: "#111", padding: "8px 14px", borderRadius: "6px", margin: "7px 0", textDecoration: "none", fontSize: "13px", fontWeight: "800", whiteSpace: "nowrap" }}>☰ All Categories ⌄</Link>
          <NavLink to="/" style={({ isActive }) => ({ ...navLink, borderBottom: isActive ? "2px solid #fff" : "none" })}>Home</NavLink>
          <Link to="/tv" style={navLink}>Mobiles ⌄</Link>
          <Link to="/tv" style={navLink}>TV & Entertainment ⌄</Link>
          <Link to="/kitchen" style={navLink}>Home Appliances ⌄</Link>
          <Link to="/kitchen" style={navLink}>Kitchen Appliances ⌄</Link>
          <Link to="/ac" style={navLink}>Cooling ⌄</Link>
          <Link to="/Brands" style={{ color: "#fff", textDecoration: "none" }}>Brands</Link>
          <Link to="/Bestdeals" style={{ ...navLink, color: "#f5c242" }}>🏷️ Offers</Link>
          <Link to="/contact" style={navLink}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}