import React from "react";
import Photo from "../Components/Photo";
import Profile from "../Components/Profile";
import Service from "../Components/Service";
import ContactForm from "../Components/ContactForm";
import Banner from "../Components/Banner";
import Extras from "../Components/Extras";


const Home = () => {
  return (
    <div>
      <Photo />
      <Profile />
      <Service />
      <ContactForm />
      <Banner />
      <Extras />

    </div>
  );
};

export default Home;
