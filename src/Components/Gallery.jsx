
// import { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   FaStore,
//   FaPlug,
//   FaMobileAlt,
//   FaTv,
//   FaCamera,
//   FaTimes,
//   FaChevronLeft,
//   FaChevronRight,
//   FaArrowRight,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import "./Gallery.css";

// const galleryItems = [
//   {
//     id: 1,
//     title: "Our Showroom",
//     subtitle: "Visit our spacious and modern showroom",
//     category: "Showroom",
//     image: "/gallery/showroom-1.jpg",
//     size: "large",
//     icon: FaStore,
//   },
//   {
//     id: 2,
//     title: "Home Appliances",
//     subtitle: "Wide range of trusted brands",
//     category: "Appliances",
//     image: "/gallery/appliances-1.jpg",
//     size: "medium",
//     icon: FaPlug,
//   },
//   {
//     id: 3,
//     title: "Mobiles",
//     subtitle: "Latest smartphones and accessories",
//     category: "Mobiles",
//     image: "/gallery/mobiles-1.jpg",
//     size: "medium",
//     icon: FaMobileAlt,
//   },
//   {
//     id: 4,
//     title: "Showroom Experience",
//     subtitle: "Explore our thoughtfully arranged product displays",
//     category: "Showroom",
//     image: "/gallery/showroom-2.jpg",
//     size: "medium",
//     icon: FaStore,
//   },
//   {
//     id: 5,
//     title: "Product Displays",
//     subtitle: "Experience before you buy",
//     category: "Products",
//     image: "/gallery/products-1.jpg",
//     size: "medium",
//     icon: FaTv,
//   },
//   {
//     id: 6,
//     title: "Store Interiors",
//     subtitle: "A closer look inside SAGAR",
//     category: "Showroom",
//     image: "/gallery/showroom-3.jpg",
//     size: "medium",
//     icon: FaCamera,
//   },
//   {
//     id: 7,
//     title: "Latest Collections",
//     subtitle: "Discover products for every home",
//     category: "Appliances",
//     image: "/gallery/appliances-2.jpg",
//     size: "medium",
//     icon: FaPlug,
//   },
//   {
//     id: 8,
//     title: "Store Highlights",
//     subtitle: "Discover the SAGAR shopping experience",
//     category: "Showroom",
//     image: "/gallery/showroom-4.jpg",
//     size: "wide",
//     icon: FaStore,
//   },
// ];

// const filters = [
//   { label: "All", value: "All", icon: null },
//   { label: "Showroom", value: "Showroom", icon: FaStore },
//   { label: "Appliances", value: "Appliances", icon: FaPlug },
//   { label: "Mobiles", value: "Mobiles", icon: FaMobileAlt },
//   { label: "Products", value: "Products", icon: FaTv },
//   { label: "Events", value: "Events", icon: FaCalendarAlt },
// ];

// const reveal = {
//   hidden: { opacity: 0, y: 35 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredItems = useMemo(() => {
//     if (activeFilter === "All") return galleryItems;
//     return galleryItems.filter(
//       (item) => item.category === activeFilter
//     );
//   }, [activeFilter]);

//   const openLightbox = (item) => setSelectedImage(item);

//   const closeLightbox = () => setSelectedImage(null);

//   const navigateImage = (direction) => {
//     if (!selectedImage) return;

//     const currentIndex = filteredItems.findIndex(
//       (item) => item.id === selectedImage.id
//     );

//     const nextIndex =
//       (currentIndex + direction + filteredItems.length) %
//       filteredItems.length;

//     setSelectedImage(filteredItems[nextIndex]);
//   };

//   return (
//     <section className="sagar-gallery" id="gallery">
//       <div className="sagar-gallery-decoration sagar-gallery-decoration-left" />
//       <div className="sagar-gallery-decoration sagar-gallery-decoration-right" />

//       <div className="sagar-gallery-container">
//         {/* INTRO */}
//         <motion.div
//           className="sagar-gallery-intro"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={reveal}
//         >
//           <div className="sagar-gallery-eyebrow">
//             <span />
//             A GLIMPSE INTO SAGAR
//             <span />
//           </div>

//           <h2>
//             Our <em>Gallery</em>
//           </h2>

//           <p>
//             Explore our showroom, product collections and the
//             shopping experience we create for every customer.
//           </p>

//           <div className="sagar-gallery-filters">
//             {filters.map((filter) => {
//               const FilterIcon = filter.icon;

//               return (
//                 <button
//                   key={filter.value}
//                   type="button"
//                   className={`sagar-filter ${
//                     activeFilter === filter.value ? "active" : ""
//                   }`}
//                   onClick={() => setActiveFilter(filter.value)}
//                 >
//                   {FilterIcon && <FilterIcon />}
//                   {filter.label}
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* GALLERY GRID */}
//         <motion.div
//           layout
//           className="sagar-gallery-grid"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredItems.map((item, index) => {
//               const ItemIcon = item.icon;

//               return (
//                 <motion.button
//                   layout
//                   key={item.id}
//                   type="button"
//                   className={`sagar-gallery-card ${item.size}`}
//                   onClick={() => openLightbox(item)}
//                   initial={{ opacity: 0, y: 30, scale: 0.97 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.94 }}
//                   transition={{
//                     duration: 0.45,
//                     delay: index * 0.045,
//                   }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     loading="lazy"
//                   />

//                   <span className="sagar-gallery-image-shade" />

//                   <span className="sagar-gallery-card-content">
//                     <span className="sagar-gallery-card-icon">
//                       <ItemIcon />
//                     </span>

//                     <span className="sagar-gallery-card-text">
//                       <strong>{item.title}</strong>
//                       <small>{item.subtitle}</small>
//                     </span>

//                     <span className="sagar-gallery-card-arrow">
//                       <FaArrowRight />
//                     </span>
//                   </span>
//                 </motion.button>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         {/* GALLERY HIGHLIGHTS */}
//         <motion.div
//           className="sagar-gallery-highlights"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={reveal}
//         >
//           <div className="sagar-highlight-heading">
//             <FaCamera />
//             <strong>
//               Gallery
//               <br />
//               Highlights
//             </strong>
//           </div>

//           <div className="sagar-highlight-stat">
//             <strong>500+</strong>
//             <span>Products on Display</span>
//           </div>

//           <div className="sagar-highlight-stat">
//             <strong>50+</strong>
//             <span>Leading Brands</span>
//           </div>

//           <div className="sagar-highlight-stat">
//             <strong>1</strong>
//             <span>Trusted Destination</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* LIGHTBOX */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="sagar-lightbox"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeLightbox}
//           >
//             <button
//               type="button"
//               className="sagar-lightbox-close"
//               onClick={closeLightbox}
//               aria-label="Close gallery"
//             >
//               <FaTimes />
//             </button>

//             <button
//               type="button"
//               className="sagar-lightbox-nav previous"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 navigateImage(-1);
//               }}
//               aria-label="Previous image"
//             >
//               <FaChevronLeft />
//             </button>

//             <motion.div
//               className="sagar-lightbox-content"
//               key={selectedImage.id}
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.96 }}
//               onClick={(event) => event.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//               />
//               <div className="sagar-lightbox-caption">
//                 <span>{selectedImage.category}</span>
//                 <h3>{selectedImage.title}</h3>
//                 <p>{selectedImage.subtitle}</p>
//               </div>
//             </motion.div>

//             <button
//               type="button"
//               className="sagar-lightbox-nav next"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 navigateImage(1);
//               }}
//               aria-label="Next image"
//             >
//               <FaChevronRight />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaStore,
  FaPlug,
  FaMobileAlt,
  FaTv,
  FaCamera,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import "./Gallery.css";
import g1 from "../assets/g6.png";
import g2 from "../assets/g7.png";
import g3 from "../assets/g8.png";
import g4 from "../assets/g9.png";
import g5 from "../assets/g10.png";

const galleryItems = [
  {
    id: 1,
    title: "Our Showroom",
    subtitle: "Visit our spacious and modern showroom",
    category: "Showroom",
    image: g2,
    size: "large",
    icon: FaStore,
  },
  {
    id: 2,
    title: "Home Appliances",
    subtitle: "Wide range of trusted brands",
    category: "Appliances",
    image: g1,
    size: "medium",
    icon: FaPlug,
  },
  {
    id: 3,
    title: "Mobiles",
    subtitle: "Latest smartphones and accessories",
    category: "Mobiles",
    image: g3,
    size: "medium",
    icon: FaMobileAlt,
  },
  {
    id: 4,
    title: "Showroom Experience",
    subtitle: "Explore our thoughtfully arranged product displays",
    category: "Showroom",
    image: g4,
    size: "medium",
    icon: FaStore,
  },
  {
    id: 5,
    title: "Product Displays",
    subtitle: "Experience before you buy",
    category: "Products",
    image: g5,
    size: "medium",
    icon: FaTv,
  },
//   {
//     id: 6,
//     title: "Store Interiors",
//     subtitle: "A closer look inside SAGAR",
//     category: "Showroom",
//     image: "/gallery/showroom-3.jpg",
//     size: "medium",
//     icon: FaCamera,
//   },
//   {
//     id: 7,
//     title: "Latest Collections",
//     subtitle: "Discover products for every home",
//     category: "Appliances",
//     image: "/gallery/appliances-2.jpg",
//     size: "medium",
//     icon: FaPlug,
//   },
//   {
//     id: 8,
//     title: "Store Highlights",
//     subtitle: "Discover the SAGAR shopping experience",
//     category: "Showroom",
//     image: "/gallery/showroom-4.jpg",
//     size: "wide",
//     icon: FaStore,
//   },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + direction + galleryItems.length) %
      galleryItems.length;

    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <section className="sagar-gallery" id="gallery">

      <div className="sagar-gallery-decoration sagar-gallery-decoration-left" />
      <div className="sagar-gallery-decoration sagar-gallery-decoration-right" />

      <div className="sagar-gallery-container">

        {/* GALLERY INTRO */}

        <motion.div
          className="sagar-gallery-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="sagar-gallery-eyebrow">
            <span />
            A GLIMPSE INTO SAGAR
            <span />
          </div>

          <h2>
            Our <em>Gallery</em>
          </h2>

          <p>
            Explore our showroom, product collections and the
            shopping experience we create for every home.
          </p>
        </motion.div>

        {/* GALLERY GRID */}

        <motion.div
          className="sagar-gallery-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {galleryItems.map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  className={`sagar-gallery-card ${item.size}`}
                  onClick={() => openLightbox(item)}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="sagar-gallery-image-shade" />

                  <span className="sagar-gallery-card-content">

                    <span className="sagar-gallery-card-icon">
                      <ItemIcon />
                    </span>

                    <span className="sagar-gallery-card-text">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </span>

                    <span className="sagar-gallery-card-arrow">
                      <FaArrowRight />
                    </span>

                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GALLERY HIGHLIGHTS */}

        <motion.div
          className="sagar-gallery-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >

          <div className="sagar-highlight-heading">
            <FaCamera />

            <strong>
              Gallery
              <br />
              Highlights
            </strong>
          </div>

          <div className="sagar-highlight-stat">
            <strong>500+</strong>
            <span>Products on Display</span>
          </div>

          <div className="sagar-highlight-stat">
            <strong>50+</strong>
            <span>Leading Brands</span>
          </div>

          <div className="sagar-highlight-stat">
            <strong>1</strong>
            <span>Trusted Destination</span>
          </div>

        </motion.div>

      </div>

      {/* IMAGE LIGHTBOX */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="sagar-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >

            <button
              type="button"
              className="sagar-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              className="sagar-lightbox-nav previous"
              onClick={(event) => {
                event.stopPropagation();
                navigateImage(-1);
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <motion.div
              key={selectedImage.id}
              className="sagar-lightbox-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

              <div className="sagar-lightbox-caption">
                <span>{selectedImage.category}</span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.subtitle}</p>
              </div>
            </motion.div>

            <button
              type="button"
              className="sagar-lightbox-nav next"
              onClick={(event) => {
                event.stopPropagation();
                navigateImage(1);
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
