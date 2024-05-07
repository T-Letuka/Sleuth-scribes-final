import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Cases from "../Components/Cases/Cases";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Cases />
      <Contact />
    </div>
  );
};

export default Home;
