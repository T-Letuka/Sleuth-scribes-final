import React from "react";
import "./Hero.css";
import fingerprint from "../../assets/fingerprint.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="madimi-one-regular">Sherlock's Secret Space</h1>
        <p className="para-info">
          Welcome to the thrilling world of mystery and intrigue! At our Mystery
          Club, we delve into the enigmatic realms of detective work, riddles,
          and puzzles, where every twist and turn leads to a captivating
          adventure.
        </p>
        <button className="btn">
          Explore
          <img src={fingerprint} alt="fingerpint" className="fingerprint" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
