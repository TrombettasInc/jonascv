import React from "react";
import Profile from "../Components/Profile";
import Service from "../Components/Service";
import ContactForm from "../Components/ContactForm";
import Banner from "../Components/Banner";
import Extras from "../Components/Extras";


const Home = () => {
  return (
    <div>
      <div className="photo-profile">
      <Profile />
      </div>
      <Service />
      <ContactForm />
      <Banner />
      <Extras />

    </div>
  );
};

export default Home;
