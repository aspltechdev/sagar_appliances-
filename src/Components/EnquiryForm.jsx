import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", product: "TV", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Please enter Name & Phone");

    const text = `Hi SAGAR! New Enquiry:%0AName: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918608090719?text=${text}`, "_blank");
  };

  const input = { width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "12px", fontSize: "15px", boxSizing: "border-box" };
  const label = { display: "block", fontWeight: "800", marginBottom: "6px", textAlign: "left" };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", background: "#fff", padding: "24px", borderRadius: "14px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
      <h2 style={{ color: "#7a0c1e", textAlign: "center", marginTop: 0 }}>Enquire Now</h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>Fill this form, we will call you back</p>

      <form onSubmit={submit}>
        <label style={label}>Your Name</label>
        <input style={input} name="name" placeholder="Enter your name" value={form.name} onChange={handle} />

        <label style={label}>Phone Number</label>
        <input style={input} name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handle} />

        <label style={label}>Product</label>
        <select style={input} name="product" value={form.product} onChange={handle}>
          <option>TV</option><option>Fridge</option><option>AC</option>
          <option>Washing Machine</option><option>Kitchen Appliances</option><option>Mobile</option>
        </select>

        <label style={label}>Message</label>
        <textarea style={{ ...input, height: "80px" }} name="message" placeholder="Tell us about your requirement..." value={form.message} onChange={handle} />

        <button style={{ width: "100%", background: "#16a34a", color: "#fff", border: "none", padding: "14px", borderRadius: "10px", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>
          Send on WhatsApp →
        </button>
      </form>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#333", marginTop: "14px" }}>Or Call 86080 90719</p>
    </div>
  );
}