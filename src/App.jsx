
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categorypage from "./components/Categorypage";
import EnquiryForm from "./components/EnquiryForm";

import "./App.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Contact";

export default function App() {
  const location = useLocation();

  // Homepage: Navbar only
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

      <Routes>
        {/* Empty homepage - new design will be added separately */}

        <Route path="/" element={<Home/>} />

        {/* Product Categories */}
        <Route
          path="/tv"
          element={<Categorypage category="TV" />}
        />

        <Route
          path="/fridge"
          element={<Categorypage category="Fridge" />}
        />

        <Route
          path="/ac"
          element={<Categorypage category="Air Conditioner" />}
        />

        <Route
          path="/washing-machine"
          element={<Categorypage category="Washing Machine" />}
        />

        <Route
          path="/kitchen"
          element={<Categorypage category="Kitchen Appliances" />}
        />

        {/* Enquiry & Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/enquiry"
          element={<EnquiryForm />}
        />

        <Route
          path="/visit-store"
          element={<EnquiryForm />}
        />
      </Routes>

      {/* Footer only on internal pages */}
      {!isHome && <Footer />}
    </>
  );
}
