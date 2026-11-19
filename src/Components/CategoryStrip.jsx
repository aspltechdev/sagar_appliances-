import React from "react";
import "./CategoryStrip.css";
const items = ["📺 TV","❄️ Fridge","👕 Washing Machine","🌬️ AC","🍳 Kitchen","📱 Mobile","💨 Fan","🔊 Soundbar"];
export default function CategoryStrip(){
  return <div className="sagar-strip">{items.map((i)=><span key={i}>{i}</span>)}</div>;
}