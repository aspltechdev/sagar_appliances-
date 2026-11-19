import { Link } from "react-router-dom";

const brands = [
  { name: "SAMSUNG", logo: "https://logo.clearbit.com/samsung.com", color: "#1428a0" },
  { name: "SONY", logo: "https://logo.clearbit.com/sony.com", color: "#000000" },
  { name: "LG", logo: "https://logo.clearbit.com/lg.com", color: "#a50034" },
  { name: "Whirlpool", logo: "https://logo.clearbit.com/whirlpool.com", color: "#004b8d" },
  { name: "IFB", logo: "https://logo.clearbit.com/ifbappliances.com", color: "#e30613" },
  { name: "BOSCH", logo: "https://logo.clearbit.com/bosch.com", color: "#e30613" },
  { name: "O'GENERAL", logo: "https://logo.clearbit.com/ogeneral.in", color: "#0057b8" },
  { name: "BLUE STAR", logo: "https://logo.clearbit.com/bluestarindia.com", color: "#0057b8" },
  { name: "LLOYD", logo: "https://logo.clearbit.com/lloydindia.com", color: "#0072bc" },
  { name: "VOLTAS", logo: "https://logo.clearbit.com/voltas.com", color: "#00a651" },
  { name: "Haier", logo: "https://logo.clearbit.com/haier.com", color: "#003da5" },
  { name: "Godrej", logo: "https://logo.clearbit.com/godrej.com", color: "#e4002b" },
  { name: "Carrier", logo: "https://logo.clearbit.com/carrier.com", color: "#005da8" },
  { name: "DAIKIN", logo: "https://logo.clearbit.com/daikin.com", color: "#0090da" },
  { name: "TCL", logo: "https://logo.clearbit.com/tcl.com", color: "#e4002b" },
  { name: "VU", logo: "https://logo.clearbit.com/vutvs.com", color: "#000000" },
  { name: "acer", logo: "https://logo.clearbit.com/acer.com", color: "#83b81a" },
  { name: "wybor", logo: "https://logo.clearbit.com/wybor.in", color: "#ff6b00" },
  { name: "Crompton", logo: "https://logo.clearbit.com/crompton.co.in", color: "#e4002b" },
  { name: "Prestige", logo: "https://logo.clearbit.com/ttkprestige.com", color: "#e4002b" },
  { name: "Preethi", logo: "https://logo.clearbit.com/preethi.in", color: "#e4002b" },
  { name: "BAJAJ", logo: "https://logo.clearbit.com/bajajelectricals.com", color: "#003da5" },
  { name: "KENSTAR", logo: "https://logo.clearbit.com/kenstar.in", color: "#000000" },
  { name: "Vidiem", logo: "https://logo.clearbit.com/vidiem.in", color: "#e4002b" },
  { name: "V-GUARD", logo: "https://logo.clearbit.com/vguard.in", color: "#e4002b" },
  { name: "Butterfly", logo: "https://logo.clearbit.com/butterflyindia.com", color: "#e4002b" },
  { name: "impex", logo: "https://logo.clearbit.com/impexindia.com", color: "#0057b8" },
  { name: "Panasonic", logo: "https://logo.clearbit.com/panasonic.com", color: "#004b8d" },
  { name: "PHILIPS", logo: "https://logo.clearbit.com/philips.com", color: "#0057b8" },
  { name: "VENUS", logo: "https://logo.clearbit.com/venusindia.com", color: "#e4002b" },
  { name: "HAVELLS", logo: "https://logo.clearbit.com/havells.com", color: "#e4002b" },
  { name: "orient electric", logo: "https://logo.clearbit.com/orientelectric.com", color: "#e4002b" },
  { name: "LUKER", logo: "https://logo.clearbit.com/luker.in", color: "#000000" },
  { name: "MILTON", logo: "https://logo.clearbit.com/milton.in", color: "#0057b8" },
  { name: "vivo", logo: "https://logo.clearbit.com/vivo.com", color: "#415fff" },
  { name: "oppo", logo: "https://logo.clearbit.com/oppo.com", color: "#008758" },
  { name: "LAVA", logo: "https://logo.clearbit.com/lavamobiles.com", color: "#e4002b" },
  { name: "POCO", logo: "https://logo.clearbit.com/po.co", color: "#ffcb05" },
  { name: "iPhone", logo: "https://logo.clearbit.com/apple.com", color: "#000000" },
];

export default function Brands() {
  return (
    <div style={{ fontFamily: "Arial", background: "#fff", paddingBottom: 40 }}>
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .brand-track {
          display: flex;
          gap: 12px;
          width: max-content;
        }
        .go-left { animation: slideLeft 35s linear infinite; }
        .go-right { animation: slideRight 35s linear infinite; }
        .brand-track:hover { animation-play-state: paused; }
      `}</style>

      {/* HEADER */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 16px 10px", textAlign: "center" }}>
        <h1 style={{ color: "#7a0c1e", margin: 0, fontSize: 32 }}>— Our Top Brands ({brands.length})</h1>
        <p style={{ color: "#666", fontSize: 14 }}>Tap any brand to enquire • All 39 brands available at Sagar, Puducherry</p>
      </div>

      {/* ✅ SAME 3 ROTATING ROWS AS HOME - ROW 1 RIGHT / ROW 2 LEFT / ROW 3 RIGHT - WITH SYMBOL + LOGO */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 16px 20px" }}>
        {[
          brands.slice(0, 13),   // Row 1 -> RIGHT
          brands.slice(13, 26), // Row 2 -> LEFT
          brands.slice(26, 39), // Row 3 -> RIGHT
        ].map((row, r) => (
          <div key={r} style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "6px 0", marginBottom: 10 }}>
            <div className={`brand-track ${r === 1 ? "go-left" : "go-right"}`}>
              {[...row, ...row, ...row].map((b, i) => (
                <Link key={i} to="/enquiry" style={{ border: "1px solid #eee", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", padding: "8px 12px", borderRadius: "10px", background: "#fff", display: "flex", alignItems: "center", gap: 8, flexShrink: 0, textDecoration: "none", minWidth: 140, justifyContent: "center" }}>
                  <span style={{ width: 30, height: 30, borderRadius: "50%", background: b.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: 14, flexShrink: 0 }}>{b.name.charAt(0).toUpperCase()}</span>
                  <img src={b.logo} alt="" style={{ height: 22, maxWidth: 70, objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
                  <span style={{ fontWeight: "900", fontSize: 13, color: "#0f2a6b", whiteSpace: "nowrap" }}>{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ENQUIRE BUTTON */}
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <Link to="/enquiry" style={{ background: "#7a0c1e", color: "#fff", padding: "12px 28px", borderRadius: "20px", textDecoration: "none", fontWeight: "800" }}>Enquire Now →</Link>
        <Link to="/" style={{ display: "block", marginTop: 14, color: "#7a0c1e", fontWeight: "700", textDecoration: "none" }}>← Back to Home</Link>
      </div>
    </div>
  );
}