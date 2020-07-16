import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/intro";
import "../css/fixed.css";

const Landing = () => {
    return (
      <div className="landing">
        <Home />
        <About />
        <Intro/>
        <Contact />
      </div>
    );
};

export default Landing;
