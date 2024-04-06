import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav-bar container ">
      <img src={logo} alt="logo-picture" className="logo" />
      <ul className="nav-list">
        <li>
          <Link to="home" smooth={true} offset={-260} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="cases-folder" smooth={true} offset={-260} duration={500}>
            Cases
          </Link>
        </li>
        <li>
          <Link
            to="contact-us"
            smooth={true}
            offset={-260}
            duration={500}
            className="contact-me"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
