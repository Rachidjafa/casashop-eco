import React from "react";
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Orders from "./Orders";
import Product from "./products";
import Hom from "./Hom";
import Product_d from "./product_d";
import About from "./About";
import Likes from "./likes";
import Contact from "./contact";
export default function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Like" element={<Likes />} />
          <Route path="/product_d/:id" element={<Product_d />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
