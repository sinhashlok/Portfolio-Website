import React from "react";
import SectionsHeadins from "./SectionHeadings";
import Card from "./Card";

export default function Projects() {
  return (
    <div className="projects">
      <SectionsHeadins className="projects-title" title="Projects" />
      <h1 className="projects-web-title">WEB DEVELOPMENT</h1>
      <div className="card-container">
        <Card
          img="Sign-up"
          title="Intro component with sign up form"
          tools="HTML, CSS, Javascirpt"
          gitHub="https://github.com/sinhashlok/Intro-Component-with-Signup-Form"
          available={true}
          live="https://sinhashlok.github.io/Intro-Component-with-Signup-Form/"
        />
        <Card
          img="e-card"
          title="Contact e-Card"
          tools="HTML, CSS, Javascript, React js
Material UI"
          gitHub="https://github.com/sinhashlok/Contact-e-card"
          available={false}
        />
        <Card
          img="food-blogging"
          title="Food Blogging Website"
          tools="HTML, CSS, Javascript, React js
Material UI"
          gitHub="https://github.com/sinhashlok/Food-Blogging-Website"
          available={false}
        />
        <Card
          img="meme-generator"
          title="Meme Generator"
          tools="HTML, CSS, Javascript, React js,
Imgflip API"
          gitHub="https://github.com/sinhashlok/Meme-Generator"
          available={false}
        />
        <Card
          img=""
          title="User Data Storage"
          tools="Node js, Express js, MongoDB, Mongoose Postman"
          gitHub="https://github.com/sinhashlok/User-Data-Storage"
          available={false}
        />
      </div>
    </div>
  );
}
