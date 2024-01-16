import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Top from './Components/Top';
import Preloader from './Components/Preloader';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Top />
    </>
  );
}

export default App
