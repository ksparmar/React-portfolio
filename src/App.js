import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-250974973-1"; 
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <main className="text-gray-400 bg-green-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
