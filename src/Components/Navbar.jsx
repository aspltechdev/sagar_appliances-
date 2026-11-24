
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   ChevronDown,
//   ArrowUpRight,
//   Menu,
//   X,
// } from "lucide-react";
// import "./Navbar.css";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [rangeOpen, setRangeOpen] = useState(false);

//   const categories = [
//     { name: "Mobiles & Accessories", path: "/tv" },
//     { name: "Televisions & Entertainment", path: "/tv" },
//     { name: "Refrigerators", path: "/fridge" },
//     { name: "Washing Machines", path: "/washing-machine" },
//     { name: "Air Conditioners", path: "/ac" },
//     { name: "Kitchen Appliances", path: "/kitchen" },
//     { name: "Home Appliances", path: "/kitchen" },
//     { name: "Small Appliances", path: "/kitchen" },
//   ];

//   const closeMenu = () => {
//     setMobileOpen(false);
//     setRangeOpen(false);
//   };

//   return (
//     <header className="sagar-header">
//       <div className="sagar-navbar">

//         {/* BRAND LOGO */}
//         <Link to="/" className="sagar-brand" onClick={closeMenu}>
//           <img
//             src="/logo.jpeg"
//             alt="Sagar Logo"
//             className="sagar-brand-logo"
//           />

//           <span className="sagar-brand-content">
//             <span className="sagar-brand-name">SAGAR</span>
//             <span className="sagar-brand-tagline">
//               HOME APPLIANCES & MOBILES
//             </span>
//           </span>
//         </Link>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="sagar-navigation">

//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `sagar-nav-item ${isActive ? "active" : ""}`
//             }
//           >
//             Home
//           </NavLink>

//           <a href="/#our-story" className="sagar-nav-item">
//             Our Story
//           </a>

//           {/* CATEGORY DROPDOWN */}
//           <div className="sagar-range-wrapper">
//             <a href="/#our-range" className="sagar-nav-item sagar-range-link">
//               Our Range
//               <ChevronDown size={15} />
//             </a>

//             <div className="sagar-range-dropdown">
//               <div className="sagar-range-header">
//                 <span>EXPLORE OUR RANGE</span>
//                 <p>Everything for your modern lifestyle.</p>
//               </div>

//               <div className="sagar-range-grid">
//                 {categories.map((category) => (
//                   <Link
//                     key={category.name}
//                     to={category.path}
//                     className="sagar-range-option"
//                   >
//                     {category.name}
//                     <ArrowUpRight size={14} />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <a href="/#brands" className="sagar-nav-item">
//             Brands
//           </a>

//           <a href="/#visit-store" className="sagar-nav-item">
//             Visit Store
//           </a>

//           <Link to="/contact" className="sagar-nav-item">
//             Contact
//           </Link>

//         </nav>

//         {/* PHONE CTA */}
//         <a href="tel:8608090719" className="sagar-phone-button">
//           <Phone size={17} />
//           <span>86080 90719</span>
//         </a>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="sagar-menu-toggle"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle navigation"
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>

//       </div>

//       {/* MOBILE NAVIGATION */}
//       <div className={`sagar-mobile-menu ${mobileOpen ? "show" : ""}`}>

//         <NavLink to="/" end onClick={closeMenu}>
//           Home
//         </NavLink>

//         <a href="/#our-story" onClick={closeMenu}>
//           Our Story
//         </a>

//         <button
//           className="sagar-mobile-range"
//           onClick={() => setRangeOpen(!rangeOpen)}
//         >
//           Our Range
//           <ChevronDown
//             size={17}
//             className={rangeOpen ? "rotated" : ""}
//           />
//         </button>

//         {rangeOpen && (
//           <div className="sagar-mobile-submenu">
//             {categories.map((category) => (
//               <Link
//                 key={category.name}
//                 to={category.path}
//                 onClick={closeMenu}
//               >
//                 {category.name}
//                 <ArrowUpRight size={14} />
//               </Link>
//             ))}
//           </div>
//         )}

//         <a href="/#brands" onClick={closeMenu}>
//           Brands
//         </a>

//         <a href="/#visit-store" onClick={closeMenu}>
//           Visit Store
//         </a>

//         <Link to="/contact" onClick={closeMenu}>
//           Contact
//         </Link>

//         <a href="tel:8608090719" className="sagar-mobile-phone">
//           <Phone size={17} />
//           Call 86080 90719
//         </a>

//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setRangeOpen(false);
  }, [location.pathname, location.hash]);

  const categories = [
    { name: "Mobiles & Accessories", path: "/mobiles" },
    { name: "Televisions & Entertainment", path: "/tv" },
    { name: "Refrigerators", path: "/fridge" },
    { name: "Washing Machines", path: "/washing-machine" },
    { name: "Air Conditioners", path: "/ac" },
    { name: "Kitchen Appliances", path: "/kitchen" },
    { name: "Home Appliances", path: "/home-appliances" },
    { name: "Small Appliances", path: "/small-appliances" },
  ];

  const closeMenu = () => {
    setMobileOpen(false);
    setRangeOpen(false);
  };

  const sectionLinks = [
    { label: "Our Story", href: "/#our-story" },
    { label: "Brands", href: "/#brands" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Visit Store", href: "/#visit-store" },
  ];

  return (
    <header className="sagar-header">
      <div className="sagar-navbar">

        {/* BRAND */}
        <Link to="/" className="sagar-brand" onClick={closeMenu}>
          <img
            src="/logo.jpeg"
            alt="Sagar Home Appliances and Mobiles"
            className="sagar-brand-logo"
          />

          <span className="sagar-brand-content">
            <span className="sagar-brand-name">SAGAR</span>
            <span className="sagar-brand-tagline">
              HOME APPLIANCES & MOBILES
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="sagar-navigation">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sagar-nav-item ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          {sectionLinks.slice(0, 1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="sagar-nav-item"
            >
              {item.label}
            </a>
          ))}

          {/* RANGE DROPDOWN */}
          <div className="sagar-range-wrapper">
            <Link
              to="/#our-range"
              className="sagar-nav-item sagar-range-link"
            >
              Our Range
              <FaChevronDown className="sagar-dropdown-icon" />
            </Link>

            <div className="sagar-range-dropdown">
              <div className="sagar-range-header">
                <span className="sagar-dropdown-eyebrow">
                  DISCOVER SAGAR
                </span>
                <h3>Explore Our Range</h3>
                <p>
                  Everything you need for your modern lifestyle.
                </p>
              </div>

              <div className="sagar-range-grid">
                {categories.map((category, index) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="sagar-range-option"
                  >
                    <span className="sagar-category-number">
                      0{index + 1}
                    </span>
                    <span>{category.name}</span>
                    <FaArrowRight className="sagar-option-arrow" />
                  </Link>
                ))}
              </div>

              <Link
                to="/#our-range"
                className="sagar-view-all"
              >
                Explore all collections
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {sectionLinks.slice(1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="sagar-nav-item"
            >
              {item.label}
            </a>
          ))}

          <Link to="/contact" className="sagar-nav-item">
            Contact
          </Link>
        </nav>

        {/* PHONE CTA */}
        <a href="tel:+918608090719" className="sagar-phone-button">
          <span className="sagar-phone-icon">
            <FaPhoneAlt />
          </span>
          <span>86080 90719</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="sagar-menu-toggle"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setRangeOpen(false);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`sagar-mobile-menu ${mobileOpen ? "show" : ""}`}>

        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <a href="/#our-story" onClick={closeMenu}>
          Our Story
        </a>

        <button
          className="sagar-mobile-range"
          onClick={() => setRangeOpen(!rangeOpen)}
          aria-expanded={rangeOpen}
        >
          Our Range
          <FaChevronDown
            className={rangeOpen ? "rotated" : ""}
          />
        </button>

        {rangeOpen && (
          <div className="sagar-mobile-submenu">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                onClick={closeMenu}
              >
                {category.name}
                <FaArrowRight />
              </Link>
            ))}
          </div>
        )}

        {sectionLinks.slice(1).map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <a
          href="tel:+918608090719"
          className="sagar-mobile-phone"
          onClick={closeMenu}
        >
          <FaPhoneAlt />
          Call 86080 90719
        </a>
      </div>
    </header>
  );
}
