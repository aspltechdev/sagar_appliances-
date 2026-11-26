
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Award,
//   BadgeCheck,
//   Headphones,
//   ShoppingBag,
//   ShieldCheck,
//   Sparkles,
//   ArrowUpRight,
// } from "lucide-react";
// import "./WhyChooseSagar.css";

// const benefits = [
//   {
//     icon: BadgeCheck,
//     number: "01",
//     title: "Trusted Brands",
//     description:
//       "Explore products from leading electronics and home appliance brands.",
//   },
//   {
//     icon: ShoppingBag,
//     number: "02",
//     title: "Wide Product Range",
//     description:
//       "Discover appliances, mobiles and electronics for your everyday needs.",
//   },
//   {
//     icon: Headphones,
//     number: "03",
//     title: "Personal Assistance",
//     description:
//       "Get help choosing products that suit your needs and preferences.",
//   },
//   {
//     icon: ShieldCheck,
//     number: "04",
//     title: "Customer-Focused Service",
//     description:
//       "We aim to make your shopping experience simple and comfortable.",
//   },
// ];

// const WhyChooseSagar = () => {
//   return (
//     <section className="sagar-why-section" id="why-sagar">
//       <div className="sagar-why-container">

//         {/* SECTION HEADING */}
//         <motion.div
//           className="sagar-why-heading"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.65 }}
//         >
//           <div className="sagar-why-kicker">
//             <span />
//             THE SAGAR DIFFERENCE
//             <span />
//           </div>

//           <h2>
//             Why Shop With <em>Sagar?</em>
//           </h2>

//           <p>
//             More than products — a shopping experience built around
//             your everyday needs.
//           </p>
//         </motion.div>

//         {/* MAIN CONTENT */}
//         <div className="sagar-why-layout">

//           {/* LEFT VISUAL PANEL */}
//           <motion.div
//             className="sagar-why-visual"
//             initial={{ opacity: 0, x: -35 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="sagar-why-visual-glow" />

//             <div className="sagar-why-visual-top">
//               <span className="sagar-why-small-label">
//                 YOUR HOME. YOUR CHOICE.
//               </span>
//               <Sparkles size={20} />
//             </div>

//             <div className="sagar-why-visual-content">
//               <span className="sagar-why-brand-mark">S</span>

//               <h3>
//                 Better Choices.
//                 <br />
//                 Happier Homes.
//               </h3>

//               <p>
//                 Find the right appliances and technology
//                 for every corner of your home.
//               </p>

//               <a href="#categories" className="sagar-why-explore">
//                 Explore Our Range
//                 <ArrowUpRight size={17} />
//               </a>
//             </div>

//             <div className="sagar-why-visual-bottom">
//               <span>QUALITY</span>
//               <i />
//               <span>CHOICE</span>
//               <i />
//               <span>CARE</span>
//             </div>

//             <div className="sagar-why-decoration sagar-why-decoration-one" />
//             <div className="sagar-why-decoration sagar-why-decoration-two" />
//           </motion.div>

//           {/* RIGHT BENEFITS */}
//           <motion.div
//             className="sagar-why-benefits"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: { staggerChildren: 0.12 },
//               },
//             }}
//           >
//             {benefits.map((benefit) => {
//               const Icon = benefit.icon;

//               return (
//                 <motion.div
//                   className="sagar-why-benefit"
//                   key={benefit.number}
//                   variants={{
//                     hidden: { opacity: 0, y: 22 },
//                     visible: {
//                       opacity: 1,
//                       y: 0,
//                       transition: {
//                         duration: 0.55,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                     },
//                   }}
//                 >
//                   <div className="sagar-why-benefit-icon">
//                     <Icon size={23} strokeWidth={1.6} />
//                   </div>

//                   <div className="sagar-why-benefit-copy">
//                     <span className="sagar-why-number">
//                       {benefit.number}
//                     </span>
//                     <h3>{benefit.title}</h3>
//                     <p>{benefit.description}</p>
//                   </div>

//                   <ArrowUpRight
//                     className="sagar-why-benefit-arrow"
//                     size={19}
//                   />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseSagar;



import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Wrench,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";
import "./WhyChooseSagar.css";
import w1 from "../assets/w2.png";

const trustFeatures = [
  {
    icon: Award,
    title: "Trusted",
    subtitle: "Local Store",
  },
  {
    icon: Users,
    title: "Expert",
    subtitle: "Guidance",
  },
  {
    icon: Wrench,
    title: "Professional",
    subtitle: "Installation",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    subtitle: "with Warranty",
  },
  {
    icon: Headset,
    title: "Dedicated",
    subtitle: "After-Sales Support",
  },
];

const WhyChooseSagar = () => {
  return (
    <section className="sagar-why-section" id="why-sagar">
      <div className="sagar-why-container">

        {/* TOP TRUST FEATURES */}
        <motion.div
          className="sagar-why-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sagar-why-title">
            <h2>
              Why
              <br />
              Choose <span>Sagar?</span>
            </h2>
            <div className="sagar-why-title-line" />
          </div>

          <div className="sagar-trust-list">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="sagar-trust-item"
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Icon
                    className="sagar-trust-icon"
                    size={30}
                    strokeWidth={1.7}
                  />

                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM STORY AREA */}
        <div className="sagar-story-layout">

          {/* SHOWROOM IMAGE */}
          <motion.div
            className="sagar-story-image"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={w1}
              alt="Sagar Home Appliances and Mobiles showroom"
              loading="lazy"
            />
            <div className="sagar-story-image-overlay" />
            <span className="sagar-story-image-label">
              WELCOME TO SAGAR
            </span>
          </motion.div>

          {/* STORY CONTENT */}
          <motion.div
            className="sagar-story-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sagar-story-kicker">
              <span>OUR STORY</span>
              <i />
            </div>

            <h2>
              The Sagar <span>Journey</span>
            </h2>

            <p>
              Located in the heart of Puducherry, Sagar Home Appliances
              &amp; Mobiles brings together a wide range of home
              appliances, electronics and mobile technology.
            </p>

            <p>
              From everyday essentials to the latest technology,
              we help you explore trusted brands and find the
              right products for your home.
            </p>

            <a href="/about" className="sagar-story-button">
              Know Our Story
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSagar;
