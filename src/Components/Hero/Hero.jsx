import React from "react";
import "./Hero.css";
import fingerprint from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>A Study in Shadows</h1>
        <p>
          The digital age has ushered in a new era of crime, one where the
          shadows of the internet conceal intricate webs of deceit. But fear
          not, for the spirit of deduction lives on!
        </p>
        <button>Learn More</button>
      </div>
      <div className="hero-image">
        <img src={fingerprint} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
