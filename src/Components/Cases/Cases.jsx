import React, { useRef } from "react";
import "./Cases.css";
import real_cases from "../../assets/real_cases.png";
import riddle from "../../assets/riddle.png";
import difficult from "../../assets/difficult.png";
import ARROW from "../../assets/ARROW.png";
import next_icon from "../../assets/next_icon.png";
import left_icon from "../../assets/left_icon.png";

const Cases = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 30;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 30;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="cases-folder">
      <img
        src={next_icon}
        alt="next"
        className="next-button"
        onClick={slideForward}
      />
      <img
        src={left_icon}
        alt="back"
        className="back-button"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="case-info">
                <img src={real_cases} alt="real-case" className="folders" />
              </div>
              <h3>Gruesome Sisters</h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="case-info">
                <img src={riddle} alt="real-case" className="folders" />
              </div>
              <h3>Riddle 01</h3>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="case-info">
                <img src={difficult} alt="real-case" className="folders" />
              </div>
              <h3>Difficult 01</h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="case-info">
                <img src={riddle} alt="real-case" className="folders" />
              </div>
              <h3>Puzzle 01</h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="case-info">
                <img src={real_cases} alt="real-case" className="folders" />
              </div>
              <h3>the brothers</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Cases;
