import React from "react";

export default function Hero() {
  return (
    <section style={{maxWidth:"1280px", margin:"22px auto", padding:"0 20px", fontFamily:"Inter, system-ui, Arial"}}>
      
      <div style={{background:"linear-gradient(135deg, #071f33 0%, #0a3d62 45%, #0a7a5e 100%)", color:"#fff", borderRadius:"28px", padding:"48px 40px", textAlign:"center"}}>
        
        <span style={{background:"#ff6b00", padding:"8px 18px", borderRadius:"50px", fontSize:"12px", fontWeight:"800", letterSpacing:"1.5px", display:"inline-block"}}>★ FESTIVAL SALE LIVE</span>
        
        <h1 style={{fontSize:"58px", lineHeight:"1.05", margin:"20px 0 12px", color:"#fff", fontWeight:"900"}}>
          Smart Living <span style={{color:"#ffd166"}}>Starts Here.</span>
        </h1>
        
        <p style={{fontSize:"17px", lineHeight:"1.6", opacity:"0.92", maxWidth:"620px", margin:"0 auto"}}>
          Biggest Electronics & Home Appliances Sale in Bangalore. Lowest Price Promise + No Cost EMI + Free Delivery.
        </p>

        <div style={{display:"flex", gap:"32px", justifyContent:"center", margin:"30px 0", flexWrap:"wrap"}}>
          <div style={{background:"rgba(255,255,255,0.12)", padding:"16px 24px", borderRadius:"16px", minWidth:"150px"}}><div style={{fontSize:"13px", opacity:"0.85"}}>TV Starts</div><div style={{fontSize:"24px", fontWeight:"800", color:"#ffd166", marginTop:"4px"}}>₹9,999</div></div>
          <div style={{background:"rgba(255,255,255,0.12)", padding:"16px 24px", borderRadius:"16px", minWidth:"150px"}}><div style={{fontSize:"13px", opacity:"0.85"}}>AC Starts</div><div style={{fontSize:"24px", fontWeight:"800", color:"#ffd166", marginTop:"4px"}}>₹24,990</div></div>
          <div style={{background:"rgba(255,255,255,0.12)", padding:"16px 24px", borderRadius:"16px", minWidth:"150px"}}><div style={{fontSize:"13px", opacity:"0.85"}}>Fridge Starts</div><div style={{fontSize:"24px", fontWeight:"800", color:"#ffd166", marginTop:"4px"}}>₹13,490</div></div>
        </div>

        <div style={{display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap"}}>
          <a href="#deals" style={{background:"#ff6b00", color:"#fff", padding:"15px 30px", borderRadius:"50px", textDecoration:"none", fontWeight:"800", fontSize:"16px"}}>Shop Best Deals →</a>
          <a href="#contact" style={{border:"2px solid #fff", color:"#fff", padding:"13px 28px", borderRadius:"50px", textDecoration:"none", fontWeight:"700", fontSize:"16px"}}>Visit Store</a>
        </div>

        <div style={{marginTop:"24px", fontSize:"14px", opacity:"0.9", display:"flex", gap:"18px", justifyContent:"center", flexWrap:"wrap"}}>
          <span>✓ Free Delivery</span><span>✓ Free Installation</span><span>✓ 0% EMI</span><span>✓ 1 Year Warranty</span>
        </div>
      </div>

    </section>
  );
}