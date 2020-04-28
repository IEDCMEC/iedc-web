import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import "../css/fixed.css";

const Landing = () => {
    return (
      <div className="landing">
        <Home />
        <About />
        <Achievements />
        <Gallery />
        <Contact />
      </div>
    );
};

export default Landing;
