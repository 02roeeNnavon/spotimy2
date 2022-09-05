import React from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SongPage from "./pages/SongPage";
import LikesPages from "./pages/LikesPages";

function App() {
  return (
    <div className="bg-spotimy">
      <SiteHeader page="Home" />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element = {<Home />} />
        <Route path="/Song/:id" element = {<SongPage/>}/>
        <Route path="/SongLiked" element = {<LikesPages/>}/>
      </Routes>
      
      <SiteFooter />
    </div>
  );
}

export default App;
