// Contact.jsx
import React from "react";
import "./Contact.css";
export default function Contact(){
  return (
    <section className="sagar-contact" id="contact">
      <h2>Visit SAGAR Store</h2><p>KH Road, Bangalore - 560027 | Open 10 AM - 9 PM</p>
      <div className="sagar-contact-btns">
        <a href="tel:08040001234" className="btn-primary">📞 Call Now</a>
        <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-whatsapp">💬 WhatsApp Us</a>
        <a href="https://maps.google.com/?q=KH+Road+Bangalore" target="_blank" rel="noreferrer" className="btn-outline-dark">📍 Get Directions</a>
      </div>
      <form className="sagar-form" onSubmit={(e)=>{e.preventDefault();alert("Thanks! We will call you back.");}}>
        <input placeholder="Your Name" required /><input placeholder="Phone Number" required /><button>Request Callback</button>
      </form>
    </section>
  );
}