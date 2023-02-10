import React from "react";
import SectionsHeadins from "./SectionHeadings";

export default function Skills() {
  return (
    <div className="skills">
      <SectionsHeadins className="skills-title" title="Skills" />

      {/* Tech */}
      <div className="skills-item skill-tech">
        <div className="skill-box">
          <h3 className="skill-box-title">Tech</h3>
          <div className="skill-item">
            <h4 className="skill-item-head">Programming Language</h4>
            <p className="skill-item-list">Java</p>
          </div>
          <div className="skill-item">
            <h4 className="skill-item-head">Frontend</h4>
            <p className="skill-item-list">
              HTML, CSS, Bootstrap<br></br> JavaScript, React
            </p>
          </div>
          <div className="skill-item">
            <h4 className="skill-item-head">Backend</h4>
            <p className="skill-item-list">
              Node, Express<br></br> MongoDb, Mongoose
            </p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="skills-item skill-tool">
        <div className="skill-box">
          <h3 className="skill-box-title">Tools</h3>
          <div className="skill-item">
            <h4 className="skill-item-head">Editor</h4>
            <p className="skill-item-list">
              vs code <br></br>
              IntelliJ IDEA
            </p>
          </div>
          <div className="skill-item">
            <h4 className="skill-item-head">API Testing</h4>
            <p className="skill-item-list">Postman</p>
          </div>
          <div className="skill-item">
            <h4 className="skill-item-head">Version Control</h4>
            <p className="skill-item-list">Git, GitHub</p>
          </div>
          <div className="skill-item">
            <h4 className="skill-item-head">UI/UX</h4>
            <p className="skill-item-list">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
