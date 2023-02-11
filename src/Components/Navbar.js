import React from "react";
import About from "./About";

export default function Navbar() {
  return (
    <nav>
      <h2 className="nav-title">Shlok Sinha</h2>
      <div className="nav-links">
        <a href={<About />} className="nav-link-item">
          About me
        </a>
        <a href={<About />} className="nav-link-item">
          Skills
        </a>
        <a href={<About />} className="nav-link-item">
          Projects
        </a>
        <a href={<About />} className="nav-link-item">
          Contact
        </a>
      </div>
    </nav>
  );
}
