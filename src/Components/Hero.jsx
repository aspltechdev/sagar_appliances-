
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";
// import "./Hero.css";

// const slides = [
//   {
//     eyebrow: "PUDUCHERRY'S TRUSTED ELECTRONICS STORE",
//     title: "Upgrade Your",
//     highlight: "Home & Lifestyle",
//     description:
//       "Latest home appliances, mobiles and more — discover quality products at great prices.",
//     badge: "Best Deals\nAlways",
//     button: "Explore Our Range",
//     background: "slide-one",
//     products: [
//       {
//         name: "Refrigerator",
//         image:
//           "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=650&q=90",
//         className: "product-fridge",
//       },
//       {
//         name: "Washing Machine",
//         image:
//           "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=650&q=90",
//         className: "product-washer",
//       },
//       {
//         name: "Air Conditioner",
//         image:
//           "https://images.unsplash.com/photo-1631545806609-6d6c8e6f4e5c?auto=format&fit=crop&w=650&q=90",
//         className: "product-ac",
//       },
//       {
//         name: "Television",
//         image:
//           "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=650&q=90",
//         className: "product-tv",
//       },
//     ],
//   },
//   {
//     eyebrow: "SMART TECHNOLOGY. BETTER LIVING.",
//     title: "Bring Home",
//     highlight: "Smart Technology",
//     description:
//       "Explore the latest televisions, entertainment systems and smart home essentials.",
//     badge: "Smart\nChoices",
//     button: "Discover Electronics",
//     background: "slide-two",
//     products: [
//       {
//         name: "Television",
//         image:
//           "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=650&q=90",
//         className: "product-tv",
//       },
//       {
//         name: "Home Entertainment",
//         image:
//           "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=650&q=90",
//         className: "product-speaker",
//       },
//       {
//         name: "Mobile",
//         image:
//           "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=650&q=90",
//         className: "product-mobile",
//       },
//     ],
//   },
//   {
//     eyebrow: "MAKE EVERYDAY MORE COMFORTABLE",
//     title: "Everyday Comfort,",
//     highlight: "Made Better.",
//     description:
//       "From kitchen essentials to modern appliances, find everything your home needs.",
//     badge: "Home\nEssentials",
//     button: "View All Categories",
//     background: "slide-three",
//     products: [
//       {
//         name: "Kitchen Appliances",
//         image:
//           "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=650&q=90",
//         className: "product-kitchen",
//       },
//       {
//         name: "Coffee Machine",
//         image:
//           "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=650&q=90",
//         className: "product-coffee",
//       },
//       {
//         name: "Home Appliances",
//         image:
//           "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=650&q=90",
//         className: "product-home",
//       },
//     ],
//   },
// ];

// const textVariants = {
//   hidden: { opacity: 0, y: 35 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: { duration: 0.25 },
//   },
// };

// const productVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.65,
//     y: 90,
//     x: 35,
//     rotate: 8,
//   },
//   visible: (index) => ({
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     x: 0,
//     rotate: 0,
//     transition: {
//       delay: 0.2 + index * 0.13,
//       duration: 0.9,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
//   exit: {
//     opacity: 0,
//     scale: 0.8,
//     y: 45,
//     x: -35,
//     transition: { duration: 0.3 },
//   },
// };

// export default function Hero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const currentSlide = slides[activeSlide];

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       nextSlide();
//     }, 6000);

//     return () => clearInterval(timer);
//   }, [isPaused, activeSlide]);

//   return (
//     <section
//       className={`sagar-slider ${currentSlide.background}`}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Background effects */}
//       <div className="slider-background-glow" />
//       <div className="slider-light-trail trail-one" />
//       <div className="slider-light-trail trail-two" />
//       <div className="slider-grain" />
//       <div className="slider-orbit orbit-one" />
//       <div className="slider-orbit orbit-two" />

//       <div className="slider-inner">
//         {/* LEFT CONTENT */}
//         <div className="slider-copy">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSlide}
//               className="slider-text-content"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <motion.div
//                 className="slider-eyebrow"
//                 variants={textVariants}
//               >
//                 <span className="eyebrow-star">
//                   <Sparkles size={13} />
//                 </span>
//                 {currentSlide.eyebrow}
//               </motion.div>

//               <motion.h1 variants={textVariants}>
//                 {currentSlide.title}
//                 <span>{currentSlide.highlight}</span>
//               </motion.h1>

//               <motion.p variants={textVariants}>
//                 {currentSlide.description}
//               </motion.p>

//               <motion.a
//                 href="#our-range"
//                 className="slider-cta"
//                 variants={textVariants}
//                 whileHover={{ scale: 1.06, x: 5 }}
//                 whileTap={{ scale: 0.96 }}
//               >
//                 {currentSlide.button}
//                 <ArrowRight size={17} />
//               </motion.a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* RIGHT PRODUCT SHOWCASE */}
//         <div className="slider-showcase">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSlide}
//               className="slider-products"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="showcase-platform">
//                 <div className="platform-top" />
//                 <div className="platform-front" />
//                 <div className="platform-light" />
//               </div>

//               {currentSlide.products.map((product, index) => (
//                 <motion.div
//                   key={`${activeSlide}-${product.name}`}
//                   className={`showcase-product ${product.className}`}
//                   custom={index}
//                   variants={productVariants}
//                 >
//                   <motion.img
//                     src={product.image}
//                     alt={product.name}
//                     draggable="false"
//                     animate={{
//                       y: [0, -7, 0],
//                     }}
//                     transition={{
//                       duration: 4 + index * 0.5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: index * 0.2,
//                     }}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* DEAL BADGE */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`badge-${activeSlide}`}
//               className="slider-deal-badge"
//               initial={{ opacity: 0, scale: 0, rotate: -35 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               exit={{ opacity: 0, scale: 0.5 }}
//               transition={{ delay: 0.65, duration: 0.6, type: "spring" }}
//             >
//               <span>✦</span>
//               {currentSlide.badge.split("\n").map((line) => (
//                 <strong key={line}>{line}</strong>
//               ))}
//               <span>✦</span>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* SLIDER CONTROLS */}
//       <div className="slider-controls">
//         <button
//           type="button"
//           className="slider-arrow"
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={19} />
//         </button>

//         <div className="slider-pagination">
//           {slides.map((slide, index) => (
//             <button
//               type="button"
//               key={slide.background}
//               className={`pagination-dot ${
//                 activeSlide === index ? "active" : ""
//               }`}
//               onClick={() => setActiveSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         <button
//           type="button"
//           className="slider-arrow"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           <ChevronRight size={19} />
//         </button>
//       </div>

//       <div className="slider-counter">
//         0{activeSlide + 1} <span>/</span> 0{slides.length}
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Speaker,
} from "lucide-react";
import "./Hero.css";
import washing from "../assets/washing-machine.png";
import fridge from "../assets/refrigerator.png";
import air from "../assets/air-conditioner.png";
import mixer from "../assets/mixer.png";
import mobile from "../assets/mobile.png";
import television from "../assets/television.png";
import speaker from "../assets/speaker.png";
import micro from "../assets/micro.png";


const slides = [
  {
    eyebrow: "PUDUCHERRY'S TRUSTED ELECTRONICS STORE",
    title: "Upgrade Your",
    highlight: "Home & Lifestyle",
    description:
      "Latest Home Appliances, Mobiles & More at the Best Prices.",
    badge: "Best Deals",
    button: "Shop Now",
    background: "slide-one",
    products: [
      { name: "Washing Machine", image: washing, className: "washer" },
      { name: "Refrigerator", image: fridge, className: "fridge" },
      { name: "Air Conditioner", image: air, className: "ac" },
      { name: "Television", image: television, className: "tv" },
      { name: "Mobile", image: mobile, className: "mobile" },
      { name: "Kitchen Appliances", image: mixer, className: "mixer" },
    ],
  },
  {
    eyebrow: "SMART TECHNOLOGY. BETTER LIVING.",
    title: "Bring Home",
    highlight: "Smart Technology",
    description:
      "Discover stunning televisions, smart entertainment and the latest mobile technology.",
    badge: "Smart Choices",
    button: "Explore Electronics",
    background: "slide-two",
    products: [
      { name: "Television", image: television, className: "tv" },
      { name: "Refrigerator", image: fridge, className: "fridge" },
      { name: "Mobile", image: mobile, className: "mobile" },
      { name: "Speaker", image: speaker, className: "speaker" },
      { name: "Air Conditioner", image: air, className: "ac" },
    ],
  },
  {
    eyebrow: "MAKE YOUR HOME MORE BEAUTIFUL",
    title: "Everything Your",
    highlight: "Home Deserves",
    description:
      "Explore kitchen essentials and everyday appliances from trusted brands.",
    badge: "Home Essentials",
    button: "View Our Range",
    background: "slide-three",
    products: [
      { name: "Refrigerator", image: fridge, className: "fridge" },
      { name: "Washing Machine", image: washing, className: "washer" },
      { name: "Mixer", image: mixer, className: "mixer" },
      { name: "Microwave", image: micro, className: "microwave" },
      { name: "Television", image:television, className: "tv" },
    ],
  },
];

const textVariants = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -35,
    transition: { duration: 0.3 },
  },
};

const productVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.7,
    rotate: 5,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.2 + index * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 60,
    scale: 0.85,
    transition: { duration: 0.25 },
  },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPaused, activeSlide]);

  return (
    <section
      className={`sagar-slider ${currentSlide.background}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-background-shine" />
      <div className="hero-light-trail hero-trail-one" />
      <div className="hero-light-trail hero-trail-two" />

      <div className="hero-retail-container">

        {/* BRAND HEADER */}
        <motion.div
          className="hero-brand"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hero-brand-name">SAGAR</div>
          <div className="hero-brand-divider" />
          <div className="hero-brand-description">
            HOME APPLIANCES & MOBILES
          </div>
        </motion.div>

        <div className="hero-retail-content">

          {/* LEFT PROMOTIONAL CONTENT */}
          <div className="hero-retail-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="hero-copy-inner"
              >
                <motion.div
                  className="hero-eyebrow"
                  variants={textVariants}
                >
                  <span className="hero-eyebrow-line" />
                  {currentSlide.eyebrow}
                </motion.div>

                <motion.h1 variants={textVariants}>
                  {currentSlide.title}
                  <span>{currentSlide.highlight}</span>
                </motion.h1>

                <motion.p variants={textVariants}>
                  {currentSlide.description}
                </motion.p>

                <motion.a
                  href="#our-range"
                  className="hero-shop-button"
                  variants={textVariants}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {currentSlide.button}
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PRODUCT DISPLAY */}
          <div className="hero-retail-visual">

            {/* DEAL STICKER */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${activeSlide}`}
                className="hero-deal-sticker"
                initial={{ opacity: 0, scale: 0, rotate: -25 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", delay: 0.4 }}
              >
                <span className="sticker-star">✦</span>
                <strong>{currentSlide.badge}</strong>
                <span>Always</span>
                <span className="sticker-star">✦</span>
              </motion.div>
            </AnimatePresence>

            {/* PRODUCT SLIDE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="hero-product-stage"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {currentSlide.products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    className={`hero-product hero-product-${product.className}`}
                    custom={index}
                    variants={productVariants}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      draggable="false"
                      loading={index > 2 ? "lazy" : "eager"}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* DISPLAY PLATFORM */}
            <div className="hero-retail-platform">
              <div className="hero-platform-top" />
              <div className="hero-platform-front" />
              <div className="hero-platform-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER NAVIGATION */}
      <div className="hero-slider-navigation">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={21} />
        </button>

        <div className="hero-slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.background}
              type="button"
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={21} />
        </button>
      </div>

      <div className="hero-slide-count">
        0{activeSlide + 1}
        <span>/</span>
        0{slides.length}
      </div>
    </section>
  );
}
