
// import { Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// import "./App.css";
// import Home from "./Components/Pages/Home";


// export default function App() {
//   const location = useLocation();

//   // Homepage: Navbar only
//   const isHome = location.pathname === "/";

//   return (
//     <>
//       <Navbar />

//       <Routes>
       

//         <Route path="/" element={<Home/>} />

//       </Routes>

//       {/* Footer only on internal pages */}
//       {!isHome && <Footer />}
//     </>
//   );
// }


import { Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar";

import Home from "./Components/Pages/Home";

import "./App.css";
import Footer from "./Components/Footer";

export default function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const whatsappNumber = "918608090719";
  const whatsappMessage = encodeURIComponent(
    "Hi SAGAR Home Appliances! I would like to know more about your products."
  );

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer only on internal pages */}
      {!isHome && <Footer />}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SAGAR on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">
          Chat with us
        </span>
      </a>
    </>
  );
}
