
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Store,
  MonitorSmartphone,
  Tag,
  Gift,
} from "lucide-react";
import "./VisitStore.css";
import visit from "../assets/pp.png";

const storeAddress =
  "120, Kamaraj Salai, Next to Balaji Theatre, Puducherry - 605 013";

const phoneNumber = "8608090719";
const whatsappNumber = "918608090719";

const benefits = [
  { icon: Store, label: "Visit & Explore" },
  { icon: MonitorSmartphone, label: "See Products Live" },
  { icon: Tag, label: "Get Expert Advice" },
  { icon: Gift, label: "Best Offers In-Store" },
];

const VisitStore = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "SAGAR Home Appliances & Mobiles, " + storeAddress
  )}`;

  return (
    <section className="sagar-visit-section" id="visit-store">
      <div className="sagar-visit-container">

        <div className="sagar-visit-main">

          {/* SHOWROOM IMAGE */}
          <motion.div
            className="sagar-visit-image"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={visit}
              alt="SAGAR Home Appliances and Mobiles showroom"
              loading="lazy"
            />

            <div className="sagar-visit-image-overlay" />

            <div className="sagar-visit-image-caption">
              <span className="sagar-visit-caption-dot" />
              YOUR LOCAL ELECTRONICS DESTINATION
            </div>
          </motion.div>

          {/* STORE DETAILS */}
          <motion.div
            className="sagar-visit-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sagar-visit-kicker">
              <span />
              VISIT US IN PUDUCHERRY
              <span />
            </div>

            <h2>
              Visit SAGAR
              <br />
              <em>Showroom</em>
            </h2>

            <p className="sagar-visit-description">
              Explore a wide range of home appliances, electronics
              and mobiles at our store.
            </p>

            {/* ADDRESS CARD */}
            <div className="sagar-visit-address">
              <div className="sagar-visit-map-icon">
                <MapPin size={27} strokeWidth={2} />
              </div>

              <div>
                <h3>SAGAR Home Appliances &amp; Mobiles</h3>
                <p>{storeAddress}</p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="sagar-visit-actions">
              <a
                href={`tel:${phoneNumber}`}
                className="sagar-visit-btn sagar-call-btn"
              >
                <Phone size={17} />
                Call Now
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi Sagar, I would like to know more about your products."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sagar-visit-btn sagar-whatsapp-btn"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sagar-visit-btn sagar-directions-btn"
              >
                <Navigation size={17} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BENEFITS BAR */}
        <motion.div
          className="sagar-visit-benefits"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="sagar-visit-benefit" key={item.label}>
                <Icon size={28} strokeWidth={1.6} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default VisitStore;
