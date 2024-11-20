import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Home from "./Pages/Home";
import About from "./Pages/About"

import  "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;