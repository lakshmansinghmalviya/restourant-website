import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./components/about/About";
import Special from "./components/special/Special";
import Events from "./components/private-events/Index"
import MenuItemDetails from "./components/menu-details/MenuItemDetails"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItemDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/pages" element={<Blogs />} /> */}
        {/* <Route path="/user" element={<Forms />} /> */}
        <Route path="/special" element={<Special />} />
        <Route path="/menu/:id" element={<MenuItemDetails />} />
      </Routes>
    </>
  );
}
