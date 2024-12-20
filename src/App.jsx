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
import AGB from "./Components/Agb";
import Impressum from "./Components/Impressum";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/service" element={<Service/> } />
        <Route path="/datenschutz" element={<Datenschutz/>} />
        <Route path="/agb" element={<AGB/>} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer /> 
        
    </Router>
  );
};

export default App;