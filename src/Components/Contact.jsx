
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello SAGAR Home Appliances & Mobiles!

Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/918608090719?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      value: "120, Kamaraj Salai, Next to Balaji Theatre, Puducherry - 605 013",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 86080 90719",
      link: "tel:+918608090719",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "sagarhomeappliancesandmobiles@gmail.com",
      link: "mailto:sagarhomeappliancesandmobiles@gmail.com",
    },
    {
      icon: Clock,
      title: "Store Hours",
      value: "Contact us for today's store timings",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">WE'RE HERE TO HELP</span>

          <h2>
            Let's Start a <span>Conversation.</span>
          </h2>

          <p>
            Looking for the perfect appliance for your home?
            Have a question? Our team is happy to help you.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="contact-panel-label">GET IN TOUCH</span>

            <h3>
              We'd Love to
              <br />
              Hear From You.
            </h3>

            <p className="contact-info-description">
              Visit our showroom or connect with our team.
              We're here to help you find the right products
              for your home.
            </p>

            <div className="contact-details">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail-item" key={index}>
                    <div className="contact-detail-icon">
                      <Icon size={21} />
                    </div>

                    <div className="contact-detail-text">
                      <span>{item.title}</span>

                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/918608090719"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-link"
            >
              <MessageCircle size={19} />
              Chat with us on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-form-heading">
              <span>HAVE AN ENQUIRY?</span>
              <h3>Send Us a Message</h3>
              <p>Fill in your details and our team will connect with you.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9+\-\s()]{10,18}"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">What are you looking for?</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Television">Television</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                  <option value="Mobile Phones">Mobile Phones</option>
                  <option value="Kitchen Appliances">Kitchen Appliances</option>
                  <option value="Other Enquiry">Other Enquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Enquiry
                <Send size={17} />
              </button>

              <p className="contact-form-note">
                <MessageCircle size={14} />
                Your enquiry will be sent directly to our WhatsApp.
              </p>
            </form>
          </motion.div>

        </div>

        {/* MAP */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="SAGAR Home Appliances and Mobiles Location"
            src="https://maps.google.com/maps?q=120%20Kamaraj%20Salai%2C%20Puducherry%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
