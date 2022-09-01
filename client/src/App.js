import React from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div>
      <SiteHeader page="Home" />
      <Routes>
        <Route to="About" element={<About />} />
      </Routes>
      
      <SiteFooter />
    </div>
  );
}

export default App;
