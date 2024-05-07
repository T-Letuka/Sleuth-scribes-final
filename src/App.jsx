import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Caseone from "./Components/Caseone/Caseone";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Caseone" element={<Caseone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
