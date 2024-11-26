import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Home from "./Pages/Home";
import  "./App.css"
import Profile from "./Components/Profile";
import Service from "./Components/Service";
import Datenschutz from "./Components/Datenschutz";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/service" element={<Service/> } />
      </Routes>
      <Footer  path="/datenschutz" element={<Datenschutz/>} />
    </Router>
  );
};

export default App;