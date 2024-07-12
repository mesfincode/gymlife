import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ChoosUs from "../components/ChoosUs";
import Classes from "../components/Classes";
import Banner from "../components/Banner";
import OurPlan from "../components/OurPlan";
import Gallery from "../components/Gallery";
import OurTeam from "../components/OurTeam";
import Address from "../components/Address";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      
        <Hero />
        <ChoosUs />
        <Classes />
        <Banner />
        <OurPlan />
      <Gallery />
      <OurTeam />
      <Address />
     
    </div>
  );
};

export default HomePage;
