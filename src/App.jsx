
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import "./App.css";
import Home from "./Components/Pages/Home";


export default function App() {
  const location = useLocation();

  // Homepage: Navbar only
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

      <Routes>
       

        <Route path="/" element={<Home/>} />

      </Routes>

      {/* Footer only on internal pages */}
      {!isHome && <Footer />}
    </>
  );
}
