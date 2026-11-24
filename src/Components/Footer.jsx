
// import { motion } from "framer-motion";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaChevronRight,
//   FaArrowUp,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// import { FiClock } from "react-icons/fi";

// import "./Footer.css";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", link: "#home" },
//     { name: "About Us", link: "#about" },
//     { name: "Our Categories", link: "#our-range" },
//     { name: "Our Brands", link: "#brands" },
//     { name: "Customer Reviews", link: "#testimonials" },
//     { name: "Contact Us", link: "#contact" },
//   ];

//   const categories = [
//     "Televisions",
//     "Refrigerators",
//     "Washing Machines",
//     "Air Conditioners",
//     "Mobile Phones",
//     "Kitchen Appliances",
//     "Home Appliances",
//   ];

//   const socialLinks = [
//     {
//       icon: FaInstagram,
//       link: "https://www.instagram.com/",
//       label: "Instagram",
//     },
//     {
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/",
//       label: "Facebook",
//     },
//     {
//       icon: FaYoutube,
//       link: "https://www.youtube.com/",
//       label: "YouTube",
//     },
//   ];

//   return (
//     <footer className="sagar-footer">
//       <div className="footer-gold-line" />

//       <div className="footer-container">

//         {/* MAIN FOOTER */}
//         <div className="footer-main">

//           {/* BRAND COLUMN */}
//           <motion.div
//             className="footer-brand-column"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <a href="#home" className="footer-logo">
//               <img
//                 src="/logo.jpeg"
//                 alt="SAGAR Home Appliances and Mobiles"
//               />
//             </a>

//             <h3>
//               SAGAR
//               <span>HOME APPLIANCES & MOBILES</span>
//             </h3>

//             <p className="footer-brand-description">
//               Bringing comfort, convenience and happiness
//               to every home. Discover trusted brands and
//               quality appliances with the SAGAR experience.
//             </p>

//             <div className="footer-socials">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <a
//                     key={social.label}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                   >
//                     <Icon />
//                   </a>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* QUICK LINKS */}
//           <div className="footer-links-column">
//             <h4>Quick Links</h4>

//             <ul>
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <a href={item.link}>
//                     <FaChevronRight />
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CATEGORIES */}
//           <div className="footer-links-column">
//             <h4>Our Categories</h4>

//             <ul>
//               {categories.map((category) => (
//                 <li key={category}>
//                   <a href="#our-range">
//                     <FaChevronRight />
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT COLUMN */}
//           <div className="footer-contact-column">
//             <h4>Get In Touch</h4>

//             <div className="footer-contact-item">
//               <div className="footer-contact-icon">
//                 <FaMapMarkerAlt />
//               </div>

//               <p>
//                 120, Kamaraj Salai,
//                 <br />
//                 Next to Balaji Theatre,
//                 <br />
//                 Puducherry - 605 013
//               </p>
//             </div>

//             <a
//               href="tel:+918608090719"
//               className="footer-contact-item"
//             >
//               <div className="footer-contact-icon">
//                 <FaPhoneAlt />
//               </div>
//               <p>+91 86080 90719</p>
//             </a>

//             <a
//               href="tel:+916369424781"
//               className="footer-contact-item"
//             >
//               <div className="footer-contact-icon">
//                 <FaPhoneAlt />
//               </div>
//               <p>+91 63694 24781</p>
//             </a>

//             <a
//               href="mailto:sagarhomeappliancesandmobiles@gmail.com"
//               className="footer-contact-item"
//             >
//               <div className="footer-contact-icon">
//                 <FaEnvelope />
//               </div>
//               <p>sagarhomeappliancesandmobiles@gmail.com</p>
//             </a>

//             <div className="footer-contact-item">
//               <div className="footer-contact-icon">
//                 <FiClock />
//               </div>
//               <p>Contact us for store timings</p>
//             </div>
//           </div>

//         </div>

//         {/* WHATSAPP CTA */}
//         <motion.div
//           className="footer-cta"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div>
//             <span>NEED HELP CHOOSING THE RIGHT PRODUCT?</span>
//             <h3>We're Just a Message Away.</h3>
//           </div>

//           <a
//             href="https://wa.me/918608090719"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaWhatsapp />
//             Chat With Us
//             <FaExternalLinkAlt />
//           </a>
//         </motion.div>

//         {/* FOOTER BOTTOM */}
//         <div className="footer-bottom">
//           <p>
//             © {new Date().getFullYear()} SAGAR Home Appliances & Mobiles.
//             All Rights Reserved.
//           </p>

//           <div className="footer-bottom-links">
//             <a href="/privacy-policy">Privacy Policy</a>
//             <span />
//             <a href="/terms-and-conditions">
//               Terms & Conditions
//             </a>
//           </div>

//           <a href="#home" className="footer-back-top">
//             Back to Top
//             <FaArrowUp />
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";

import { FiClock } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Our Categories", link: "#our-range" },
    { name: "Our Brands", link: "#brands" },
    { name: "Customer Reviews", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  const categories = [
    "Televisions",
    "Refrigerators",
    "Washing Machines",
    "Air Conditioners",
    "Mobile Phones",
    "Kitchen Appliances",
    "Home Appliances",
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/",
      label: "YouTube",
    },
  ];

  return (
    <footer className="sagar-footer">
      <div className="footer-gold-line" />

      <div className="footer-container">
        <div className="footer-main">

          {/* BRAND */}
          <motion.div
            className="footer-brand-column"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="footer-logo">
              <img
                src="/logo.jpeg"
                alt="SAGAR Home Appliances and Mobiles"
              />
            </a>

            <h3>
              SAGAR
              <span>HOME APPLIANCES & MOBILES</span>
            </h3>

            <p className="footer-brand-description">
              Bringing comfort, convenience and happiness
              to every home. Discover trusted brands and
              quality appliances with the SAGAR experience.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div className="footer-links-column">
            <h4>Quick Links</h4>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>
                    <FaChevronRight />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="footer-links-column">
            <h4>Our Categories</h4>

            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <a href="#our-range">
                    <FaChevronRight />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact-column">
            <h4>Get In Touch</h4>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <p>
                120, Kamaraj Salai,
                <br />
                Next to Balaji Theatre,
                <br />
                Puducherry - 605 013
              </p>
            </div>

            <a
              href="tel:+918608090719"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <FaPhoneAlt />
              </div>
              <p>+91 86080 90719</p>
            </a>

            <a
              href="tel:+916369424781"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <FaPhoneAlt />
              </div>
              <p>+91 63694 24781</p>
            </a>

            <a
              href="mailto:sagarhomeappliancesandmobiles@gmail.com"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>
              <p>sagarhomeappliancesandmobiles@gmail.com</p>
            </a>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FiClock />
              </div>
              <p>Contact us for store timings</p>
            </div>
          </div>
        </div>

        {/* WHATSAPP CTA */}
        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>NEED HELP CHOOSING THE RIGHT PRODUCT?</span>
            <h3>We're Just a Message Away.</h3>
          </div>

          <a
            href="https://wa.me/918608090719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Chat With Us
            <FaArrowUp />
          </a>
        </motion.div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SAGAR Home Appliances & Mobiles.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span />
            <a href="/terms-and-conditions">
              Terms & Conditions
            </a>
          </div>

          <a href="#home" className="footer-back-top">
            Back to Top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
