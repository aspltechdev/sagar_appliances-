import React from "react";
import { motion } from "framer-motion";
import "./Brands.css";

// ✅ Images from src/assets/
const files = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

function getBrandImage(name) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = clean(name);

  // ✅ Alias - file name is different from brand name
  const ALIAS = {
    ogeneral: 'general', // your file is general.png
    bluestar: 'bluestar',
    vguard: 'vguard',
    orientelectric: 'orientelectric',
    orient: 'orientelectric',
  };

  const targets = [target, clean(ALIAS[target] || '')].filter(Boolean);
  const entries = Object.entries(files);

  for (const t of targets) {
    const exact = entries.find(([p]) => {
      const base = (p.split('/').pop() || '').split('.')[0];
      return clean(base) === t;
    });
    if (exact) return exact[1];
  }
  return '';
}

// ✅ ALL 39 BRANDS - Same order as your photo
const brands = [
  // Row 1
  { name: "Samsung" },
  { name: "Sony" },
  { name: "LG" },
  { name: "Whirlpool" },
  { name: "IFB" },
  { name: "Bosch" },
  { name: "OGeneral" },
  { name: "Blue Star" },
  // Row 2
  { name: "Lloyd" },
  { name: "Voltas" },
  { name: "Haier" },
  { name: "Godrej" },
  { name: "Carrier" },
  { name: "Daikin" },
  { name: "TCL" },
  { name: "VU" },
  { name: "Acer" },
  { name: "Wybor" },
  // Row 3
  { name: "Crompton" },
  { name: "Prestige" },
  { name: "Preeti" },
  { name: "Bajaj" },
  { name: "Kenstar" },
  { name: "Vidiem" },
  { name: "V-Guard" },
  { name: "Butterfly" },
  { name: "Impex" },
  { name: "Panasonic" },
  // Row 4
  { name: "Philips" },
  { name: "Venus" },
  { name: "Havells" },
  { name: "Orient Electric" },
  { name: "Luker" },
  { name: "Milton" },
  { name: "Vivo" },
  { name: "Oppo" },
  { name: "Lava" },
  { name: "Poco" },
  { name: "iPhone" },
];

const Brands = () => {
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="sagar-brands-section" id="brands">
      <div className="sagar-brands-container">

        <motion.div
          className="sagar-brands-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="sagar-brands-kicker">
            <span />
            OUR TRUSTED BRANDS
            <span />
          </div>

          <h2>
            Shop Your Favourite <em>Brands</em>
          </h2>

          <p>
            Discover quality and innovation from leading
            electronics and home appliance brands.
          </p>
        </motion.div>

        <div className="sagar-brands-marquee">
          <div className="sagar-brands-track">
            {repeatedBrands.map((brand, index) => {
              const img = getBrandImage(brand.name);
              return (
                <div
                  className="sagar-brand-card"
                  key={`${brand.name}-${index}`}
                  title={brand.name}
                >
                  {img ? (
                    <img src={img} alt={`${brand.name} logo`} loading="lazy" />
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sagar-brands-caption">
          <span />
          <p>Bringing trusted brands closer to your home</p>
          <span />
        </div>

      </div>
    </section>
  );
};

export default Brands;