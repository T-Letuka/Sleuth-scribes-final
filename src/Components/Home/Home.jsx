import React from "react";
import "./Home.css";
import hand from "../../assets/hand.jpg";
import cartoon2 from "../../assets/cartoon2.jpg";
import IMAGE2 from "../../assets/IMAGE2.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-program">
        <img src={hand} alt="duplicate cases" />
        <div className="caption">
          <p> Detective Chronicles</p>
        </div>
      </div>

      <div className="home-program">
        <img src={IMAGE2} alt="real-like" />
        <div className="caption">
          <p> Enigma Expeditions</p>
        </div>
      </div>

      <div className="home-program">
        <img src={cartoon2} alt="riddles and puzzles" />
        <div className="caption-special-case">
          <p>Riddle Realm </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
