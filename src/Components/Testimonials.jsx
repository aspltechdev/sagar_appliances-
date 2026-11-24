
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="testimonials-eyebrow">
            CUSTOMER EXPERIENCES
          </span>

          <h2>
            Loved by Our <span>Customers</span>
          </h2>

          <p>
            Every happy customer is part of the SAGAR family.
            Discover what customers say about their shopping experience.
          </p>

          <div className="testimonials-rating">
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" />
              ))}
            </div>
            <span>Google Customer Reviews</span>
          </div>
        </motion.div>

        <motion.div
          className="google-reviews-widget"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="elfsight-app-a1931402-9b04-49ec-b7cd-2655ae026bae"
            data-elfsight-app-lazy
          ></div>
        </motion.div>

        <div className="testimonials-footer">
          <a
            href="https://www.google.com/search?q=SAGAR+HOME+APPLIANCES+AND+MOBILES+Pondicherry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More Google Reviews
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
