import React, { useRef } from "react";
import Profile from "../Components/Profile";
import Service from "../Components/Service";
import ContactForm from "../Components/ContactForm";
import Banner from "../Components/Banner";
import Extras from "../Components/Extras";
import Navbar from "../Components/Navbar";

const Home = () => {

  const profileRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const bannerRef = useRef(null);
  const extrasRef = useRef(null);

  const refs = {
    profile: profileRef,
    service: serviceRef,
    contact: contactRef,
    banner: bannerRef,
    extras: extrasRef,
  };

  return (
    <div>
      <Navbar refs={refs} />
      <div ref={profileRef} className="photo-profile">
        <Profile />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={extrasRef}>
        <Extras />
      </div>
    </div>
  );
};

export default Home;
