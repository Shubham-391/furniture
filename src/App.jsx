import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Top from "./Components/Top";
import Preloader from "./Components/Preloader";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Top />
    </>
  );
}

export default App;
