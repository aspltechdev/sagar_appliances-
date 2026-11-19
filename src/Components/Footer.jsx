import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#0a2a3a", color: "#fff", padding: "30px 16px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>

        {/* ✅ CORRECT LOGO IN FOOTER TOO */}
        <div style={{ maxWidth: "320px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/logo.jpeg" alt="SAGAR" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #d4af37" }} />
            <span style={{ lineHeight: 1 }}>
              <span style={{ display: "block", fontSize: "32px", fontWeight: "900", color: "#fff" }}>SAGAR</span>
              <span style={{ display: "block", background: "#f5c242", color: "#111", fontSize: "10px", fontWeight: "700", padding: "3px 5px", marginTop: "2px" }}>HOME APPLIANCES & MOBILES</span>
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "#ccc", marginTop: "10px" }}>
            Smart Living Starts Here. Puducherry's trusted electronics store for TV, AC, Fridge & more. 100% Genuine • Best Price • Same Day Delivery.
          </p>
          <p style={{ color: "#ff9900", fontWeight: "700", fontSize: "13px" }}>⭐ 4.8 Rating • 10,000+ Happy Customers</p>
        </div>

        <div>
          <b>Quick Links</b><br />
          <Link to="/" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "8px" }}>• Home</Link>
          <Link to="/Bestdeals" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "6px" }}>Festival Deals</Link>
          <Link to="/tv" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "6px" }}>TV</Link>
          <Link to="/ac" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "6px" }}>AC</Link>
          <Link to="/fridge" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "6px" }}>Fridge</Link>
          <Link to="/contact" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", marginTop: "6px" }}>Contact</Link>
        </div>

        <div>
          <b>Contact Us</b>
          <p style={{ fontSize: "14px", color: "#ccc" }}>📍 120, Kamaraj Salai, Puducherry - 605 013<br />📞 86080 90719<br />🕙 Open: 10 AM - 9 PM (All Days)<br />🚚 Free Delivery in Puducherry</p>
          <Link to="/Bestdeals" style={{ background: "#ff6b00", color: "#fff", padding: "10px 18px", borderRadius: "20px", textDecoration: "none", fontWeight: "800", fontSize: "14px" }}>Shop Now →</Link>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#888", marginTop: "24px", borderTop: "1px solid #333", paddingTop: "14px" }}>
        © 2026 SAGAR Home Appliances & Mobiles, Puducherry | Privacy Policy | Terms
      </div>
    </footer>
  );
}