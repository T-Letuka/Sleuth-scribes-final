import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Cases from "./Components/Cases/Cases";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <About />
      <Cases />
      <Contact />
    </div>
  );
};

export default App;
