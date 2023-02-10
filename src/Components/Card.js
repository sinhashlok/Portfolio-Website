import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(./images/projects-img/${props.img}.png)`,
        }}
      ></div>
      <h3 className="card-title">{props.title}</h3>
      <h5 className="card-tech">Tech</h5>
      <p className="card-tools">{props.tools}</p>
      <div className="links">
        <a
          href={props.gitHub}
          target="_blank"
          rel="noreferrer"
          className="card-button github"
        >
          GitHub
        </a>
        <a
          style={{ display: props.available ? "block" : "none" }}
          rel="noreferrer"
          href={props.live}
          target="_blank"
          className="card-button live"
        >
          Live Link
        </a>
      </div>
    </div>
  );
}
