import React from "react";
import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import SocialIcons from "./Components/SocialIcons";

export default function App() {
  return (
    <div>
      <SocialIcons />
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
