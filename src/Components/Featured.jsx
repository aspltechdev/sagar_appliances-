import React from "react";
import "./Featured.css";
const deals = [
  {icon:"📺",name:"Samsung 55\" 4K Smart TV",old:"₹79,999",price:"₹39,999",save:"Save ₹40,000",emi:"EMI ₹1,999/mo"},
  {icon:"❄️",name:"LG 320L Double Door Fridge",old:"₹42,990",price:"₹29,990",save:"Save ₹13,000",emi:"EMI ₹1,499/mo"},
  {icon:"👕",name:"Whirlpool 7kg Front Load",old:"₹34,990",price:"₹22,990",save:"Save ₹12,000",emi:"EMI ₹1,199/mo"},
  {icon:"🌬️",name:"Daikin 1.5 Ton Inverter AC",old:"₹49,990",price:"₹34,990",save:"Save ₹15,000",emi:"EMI ₹1,799/mo"},
];
export default function Featured(){
  return (
    <section className="sagar-sec" id="deals">
      <h2>Best <span>Deals</span> Today 🔥</h2>
      <div className="sagar-deal-grid">{deals.map(d=>(
        <article className="sagar-deal-card" key={d.name}>
          <span className="sagar-save">{d.save}</span>
          <div className="sagar-deal-icon">{d.icon}</div>
          <h3>{d.name}</h3>
          <p className="sagar-price"><s>{d.old}</s> <b>{d.price}</b></p>
          <p className="sagar-emi">{d.emi} • No Cost EMI</p>
          <button>View Product ↗</button>
        </article>
      ))}</div>
    </section>
  );
}