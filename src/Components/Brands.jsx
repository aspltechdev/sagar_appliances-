// // import React from "react";
// // import "./CategoryPage.css";

// // const brands = [
// //   // Row 1 - Big Appliances / AC / TV
// //   "Samsung",
// //   "Sony",
// //   "LG",
// //   "Whirlpool",
// //   "IFB",
// //   "Bosch",
// //   "O'General",
// //   "Blue Star",
// //   "Lloyd",
// //   "Voltas",
// //   "Haier",
// //   "Godrej",
// //   "Carrier",
// //   "Daikin",
// //   "TCL",
// //   "VU",
// //   "Acer",
// //   "Wybor",
// //   // Row 2 - Kitchen / Home
// //   "Crompton",
// //   "Prestige",
// //   "Preethi",
// //   "Bajaj",
// //   "Kenstar",
// //   "Vidiem",
// //   "V-Guard",
// //   "Butterfly",
// //   "Impex",
// //   "Panasonic",
// //   "Philips",
// //   "Venus",
// //   "Havells",
// //   "Orient Electric",
// //   "Luker",
// //   "Milton",
// //   // Row 3 - Mobiles
// //   "Vivo",
// //   "Oppo",
// //   "Lava",
// //   "Poco",
// //   "iPhone",
// // ];

// // const Brands = () => {
// //   return (
// //     <div className="category-page">
// //       <section className="category-banner">
// //         <span className="category-tag">TOP BRANDS</span>
// //         <h1>Trusted <span>Brands</span></h1>
// //         <p>Discover leading brands for every home.</p>
// //       </section>

// //       <section className="category-products">
// //         <div className="category-heading">
// //           <div>
// //             <h2>Explore Our Brands</h2>
// //             <p>Quality, innovation and reliability — {brands.length} brands in store</p>
// //           </div>
// //         </div>

// //         <div className="category-product-grid">
// //           {brands.map((brand) => (
// //             <div className="category-product-card" key={brand}>
// //               <div className="product-visual">
// //                 <span style={{ fontSize: "30px", fontWeight: 900, textAlign: "center", lineHeight: 1.1 }}>
// //                   {brand.toUpperCase()}
// //                 </span>
// //               </div>

// //               <div className="product-info">
// //                 <h3>{brand}</h3>
// //                 <p>Explore products and latest offers</p>
// //                 <a href="/#products" className="product-shop-btn">
// //                   Explore Products →
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Brands;


// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import "./Brands.css";

// const brands = [
//   { name: "SAMSUNG", category: "Electronics" },
//   { name: "LG", category: "Home Appliances" },
//   { name: "SONY", category: "Entertainment" },
//   { name: "BOSCH", category: "Home Appliances" },
//   { name: "WHIRLPOOL", category: "Kitchen & Home" },
//   { name: "IFB", category: "Home Appliances" },
//   { name: "HAIER", category: "Electronics" },
//   { name: "PANASONIC", category: "Electronics" },
//   { name: "VOLTAS", category: "Air Conditioning" },
//   { name: "GODREJ", category: "Home Appliances" },
//   { name: "VIVO", category: "Mobiles" },
//   { name: "OPPO", category: "Mobiles" },
// ];

// const Brands = () => {
//   const duplicatedBrands = [...brands, ...brands];

//   return (
//     <section className="sagar-brands-section" id="brands">
//       <div className="sagar-brands-container">

//         <motion.div
//           className="sagar-brands-heading"
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="sagar-brands-kicker">
//             <span />
//             OUR BRAND PARTNERS
//             <span />
//           </div>

//           <h2>
//             Brands You <em>Trust</em>
//           </h2>

//           <p>
//             Explore leading brands in home appliances, electronics
//             and mobile technology.
//           </p>
//         </motion.div>

//         <div className="sagar-brands-marquee">
//           <div className="sagar-brands-track">
//             {duplicatedBrands.map((brand, index) => (
//               <div
//                 className="sagar-brand-item"
//                 key={`${brand.name}-${index}`}
//               >
//                 <span className={`sagar-brand-logo brand-${brand.name.toLowerCase()}`}>
//                   {brand.name}
//                 </span>
//                 <span className="sagar-brand-category">
//                   {brand.category}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="sagar-brands-bottom">
//           <span className="sagar-brands-line" />
//           <p>Quality products. Trusted brands. Better choices.</p>
//           <span className="sagar-brands-line" />
//         </div>

//         <motion.a
//           href="#our-range"
//           className="sagar-brands-link"
//           whileHover={{ y: -3 }}
//           whileTap={{ scale: 0.97 }}
//         >
//           Explore Our Products
//           <ArrowUpRight size={16} />
//         </motion.a>

//       </div>
//     </section>
//   );
// };

// export default Brands;


import React from "react";
import { motion } from "framer-motion";
import "./Brands.css";

const brands = [
  { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung" },
  { name: "LG", logo: "https://cdn.simpleicons.org/lg" },
  { name: "Sony", logo: "https://cdn.simpleicons.org/sony" },
  { name: "Bosch", logo: "https://cdn.simpleicons.org/bosch" },
  { name: "Whirlpool", logo: "https://cdn.simpleicons.org/whirlpool" },
  { name: "Haier", logo: "https://cdn.simpleicons.org/haier" },
  { name: "Panasonic", logo: "https://cdn.simpleicons.org/panasonic" },
  { name: "Voltas", logo: "https://cdn.simpleicons.org/voltas" },
  { name: "Godrej", logo: "https://cdn.simpleicons.org/godrej" },
  { name: "Vivo", logo: "https://cdn.simpleicons.org/vivo" },
  { name: "Oppo", logo: "https://cdn.simpleicons.org/oppo" },
  { name: "Philips", logo: "https://cdn.simpleicons.org/philips" },
  { name: "Havells", logo: "https://cdn.simpleicons.org/havells" },
  { name: "OnePlus", logo: "https://cdn.simpleicons.org/oneplus" },
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
            {repeatedBrands.map((brand, index) => (
              <div
                className="sagar-brand-card"
                key={`${brand.name}-${index}`}
                title={brand.name}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
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
