
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  House,
} from "lucide-react";
import "./FinalCTA.css";
import fta from "../assets/ft.png";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg-circle"></div>
      <div className="final-cta-bg-glow"></div>

      <div className="final-cta-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="final-cta-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="final-cta-eyebrow">
            <Sparkles size={17} />
            <span>YOUR HOME. YOUR CHOICE. OUR PROMISE.</span>
            <i></i>
          </div>

          <h2>
            Let's Make Your
            <br />
            Home <span>Extraordinary.</span>
          </h2>

          <p className="final-cta-description">
            Discover the right appliances for your home with
            trusted brands, expert guidance and a shopping
            experience you can count on.
          </p>

          {/* ACTION BUTTONS */}
          <div className="final-cta-actions">
            <a
              href="tel:+918608090719"
              className="final-cta-primary"
            >
              <Phone size={19} />
              <span>Call Our Store</span>
              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://wa.me/918608090719"
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-secondary"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* STORE ADDRESS */}
          <div className="final-cta-location">
            <div className="final-cta-location-icon">
              <MapPin size={23} fill="currentColor" />
            </div>

            <p>
              120, Kamaraj Salai, Next to Balaji Theatre,
              <br />
              Puducherry - 605 013
            </p>
          </div>
        </motion.div>

        {/* RIGHT PRODUCT SHOWCASE */}
        <motion.div
          className="final-cta-visual"
          initial={{ opacity: 0, scale: 0.85, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="final-cta-orbit orbit-one"></div>
          <div className="final-cta-orbit orbit-two"></div>

          <div className="final-cta-product-glow"></div>

          <div className="final-cta-products">
            <img
              src={fta}
              alt="SAGAR home appliances collection"
            />
          </div>

          {/* FLOATING BRAND CARD */}
          <motion.div
            className="final-cta-floating-card"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="final-cta-card-icon">
              <House size={25} />
            </div>

            <div>
              <span>THE SAGAR EXPERIENCE</span>
              <strong>
                Everything
                <br />
                Your Home Needs.
              </strong>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
