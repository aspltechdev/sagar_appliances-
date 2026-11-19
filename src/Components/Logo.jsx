// Reusable SAGAR Logo - use in Navbar, Footer, Login, all pages
export default function Logo({ size = 44, showText = true }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src="/logo.png"
        alt="SAGAR Electronics"
        style={{
          width: size, height: size,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #d4af37", // gold border
          background: "#111",
        }}
      />
      {showText && (
        <span style={{ lineHeight: "1" }}>
          <span style={{ display: "block", fontSize: size * 0.55, fontWeight: "900", letterSpacing: "1px" }}>
            <span style={{ color: "#1a5cff" }}>S</span>
            <span style={{ color: "#ffb800" }}>A</span>
            <span style={{ color: "#00b050" }}>G</span>
            <span style={{ color: "#7030a0" }}>A</span>
            <span style={{ color: "#e60023" }}>R</span>
          </span>
          <span style={{ fontSize: size * 0.28, fontWeight: "600", color: "#333" }}>Electronics</span>
        </span>
      )}
    </span>
  );
}