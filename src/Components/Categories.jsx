import React from "react";
import "./Categories.css";
const cats = [
  {icon:"📺",name:"LED TV",offer:"From ₹9,999"},
  {icon:"❄️",name:"Refrigerator",offer:"From ₹13,490"},
  {icon:"👕",name:"Washing Machine",offer:"From ₹12,990"},
  {icon:"🌬️",name:"Air Conditioner",offer:"From ₹24,990"},
  {icon:"🍳",name:"Kitchen Appliances",offer:"Up to 40% Off"},
  {icon:"📱",name:"Mobile & Accessories",offer:"Best Price"},
];
export default function Categories(){
  return (
    <section className="sagar-sec" id="categories">
      <h2>Shop By <span>Category</span></h2>
      <p className="sagar-sub">Everything for your home, at lowest price.</p>
      <div className="sagar-cat-grid">{cats.map(c=>(
        <div className="sagar-cat-card" key={c.name}>
          <div className="sagar-cat-icon">{c.icon}</div><h3>{c.name}</h3><p>{c.offer}</p><a href="#deals">Shop Now →</a>
        </div>
      ))}</div>
    </section>
  );
}