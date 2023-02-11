import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h2 className="nav-title">
        Shlok <span style={{ color: "black" }}>Sinha</span>
      </h2>
      <div className="nav-links">
        <p className="nav-link-item">About me</p>
        <p className="nav-link-item">Skills</p>
        <p className="nav-link-item">Projects</p>
        <p className="nav-link-item">Contact</p>
      </div>
    </nav>
  );
}
