
import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Tv,
  Refrigerator,
  WashingMachine,
  Snowflake,
  CookingPot,
  House,
  Fan,
  ArrowUpRight,
} from "lucide-react";
import "./Categories.css";
import catm from "../assets/catm.png";
import cattv from "../assets/cattv.png";
import catref from "../assets/catref.png";
import catw from "../assets/catw.png";
import catair from "../assets/catair.png";
import catkit from "../assets/catkit.png";
import cathom from "../assets/cathom.png";
import catsm from "../assets/catsm.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";

const categories = [
  {
    name: "Mobiles & Accessories",
    icon: Smartphone,
    image: catm,
    className: "mobile",
  },
  {
    name: "Televisions & Entertainment",
    icon: Tv,
    image: cattv,
    className: "television",
  },
  {
    name: "Refrigerators",
    icon: Refrigerator,
    image: catref,
    className: "refrigerator",
  },
  {
    name: "Washing Machines",
    icon: WashingMachine,
    image: catw,
    className: "washing",
  },
  {
    name: "Air Conditioners",
    icon: Snowflake,
    image: catair,
    className: "ac",
  },
  {
    name: "Kitchen Appliances",
    icon: CookingPot,
    image: catkit,
    className: "kitchen",
  },
  {
    name: "Home Appliances",
    icon: House,
    image: cathom,
    className: "home",
  },
  {
    name: "Small Appliances",
    icon: Fan,
    image: catsm,
    className: "small",
  },
];

const collections = [
  {
    eyebrow: "COMFORT YOUR HOME",
    title: "Stay Cool\nAll Year",
    description: "Air Conditioners\nFrom Top Brands",
    image: c1,
    className: "collection-cool",
    link: "#air-conditioners",
  },
  {
    eyebrow: "FRESHNESS REDEFINED",
    title: "Freshness\nfor Your Family",
    description: "Refrigerators\nwith Advanced Cooling",
    image: c2,
    className: "collection-fresh",
    link: "#refrigerators",
  },
  {
    eyebrow: "ENTERTAINMENT",
    title: "Bigger\nEntertainment",
    description: "Smart TVs for\n a Cinematic Experience",
    image: c3,
    className: "collection-tv",
    link: "#televisions",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Category() {
  return (
    <section className="sagar-category-section" id="categories">
      <div className="sagar-category-container">

        {/* SECTION HEADING */}
        <motion.div
          className="sagar-category-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <div className="sagar-section-kicker">
            <span />
            OUR PRODUCT CATEGORIES
            <span />
          </div>

          <h2>
            Explore Our <em>Complete Range</em>
          </h2>

          <p>
            A wide selection of home appliances, mobiles and electronics
            for every modern lifestyle.
          </p>
        </motion.div>

        {/* CATEGORY GRID */}
        <motion.div
          className="sagar-category-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.a
                href={`#${category.className}`}
                className={`sagar-category-card ${category.className}`}
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="sagar-category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                </div>

                <div className="sagar-category-shade" />

                <div className="sagar-category-info">
                  <div className="sagar-category-icon">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3>{category.name}</h3>

                  <span className="sagar-category-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* FEATURED COLLECTIONS */}
        <motion.div
          className="sagar-featured-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sagar-featured-heading">
            <span />
            <h3>FEATURED COLLECTIONS</h3>
            <span />
          </div>

          <div className="sagar-featured-grid">
            {collections.map((item, index) => (
              <motion.a
                href={item.link}
                className={`sagar-featured-card ${item.className}`}
                key={item.title}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <div className="sagar-featured-copy">
                  <span className="sagar-featured-eyebrow">
                    {item.eyebrow}
                  </span>

                  <h4>
                    {item.title.split("\n").map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h4>

                  <p>
                    {item.description.split("\n").map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="sagar-featured-image">
                  <img src={item.image} alt={item.title.replace("\n", " ")} />
                </div>

                <span className="sagar-featured-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Category;
