import React from "react";
import SectionsHeadins from "./SectionHeadings";

export default function About() {
  return (
    <div className="about">
      <SectionsHeadins title="About me" />
      <div className="about-content">
        <p className="about-content-tag tag-top">{`<me>`}</p>
        <p className="about-content-text">
          “ I am a pre-final year Mechanical Engineering student in BITS Goa.
          <br></br> I have interest in Web Development, design,{" "}
          <span style={{ color: "rgba(96, 158, 162, 1)", fontWeight: "700" }}>
            anime
          </span>{" "}
          &{" "}
          <span style={{ color: "rgba(96, 158, 162, 1)", fontWeight: "700" }}>
            football
          </span>
          .<br></br> I also enjoying reading non-fiction, with “Can’t Hurt ME!”
          by David Goggi’s being my favourite (what a freaking life he has
          lived!!).<br></br>
          <br></br> I started my coding / development journey in first year and
          then explored UI/UX design.”
        </p>
        <p className="about-content-tag tag-bottom">{`</me>`}</p>
      </div>
    </div>
  );
}
