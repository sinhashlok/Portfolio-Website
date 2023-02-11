import React from "react";
import SectionsHeadins from "./SectionHeadings";
import Card from "./Card";

export default function Projects() {
  return (
    <div className="projects">
      <SectionsHeadins title="Projects" />
      <h1 className="projects-title">WEB DEVELOPMENT</h1>
      <div className="card-container">
        <Card
          img="Sign-up"
          title="Intro component with sign up form"
          tools="HTML, CSS, Javascirpt"
          availableGit={true}
          availableLink={true}
          gitHub="https://github.com/sinhashlok/Intro-Component-with-Signup-Form"
          live="https://sinhashlok.github.io/Intro-Component-with-Signup-Form/"
        />
        <Card
          img="e-card"
          title="Contact e-Card"
          tools="HTML, CSS, Javascript, React js
Material UI"
          availableGit={true}
          availableLink={false}
          gitHub="https://github.com/sinhashlok/Contact-e-card"
        />
        <Card
          img="food-blogging"
          title="Food Blogging Website"
          tools="HTML, CSS, Javascript, React js
Material UI"
          availableGit={true}
          availableLink={false}
          gitHub="https://github.com/sinhashlok/Food-Blogging-Website"
          available={false}
        />
        <Card
          img="meme-generator"
          title="Meme Generator"
          tools="HTML, CSS, Javascript, React js,
Imgflip API"
          availableGit={true}
          availableLink={false}
          gitHub="https://github.com/sinhashlok/Meme-Generator"
        />
        <Card
          img=""
          title="User Data Storage"
          tools="Node js, Express js, MongoDB, Mongoose Postman"
          availableGit={true}
          availableLink={false}
          gitHub="https://github.com/sinhashlok/User-Data-Storage"
          available={false}
        />
      </div>

      <h1 className="projects-title ui">UI / UX</h1>
      <div className="card-container">
        <Card
          img="shoe"
          title="Landing Page - Shoe"
          tools="Figma, Photoshop"
          availableLink={true}
          availableGit={false}
          live="https://www.behance.net/gallery/144609103/Landing-Page-Shoe"
        />
        <Card
          img="spong"
          title="Spong - Music Player UI"
          tools="Figma, Photoshop"
          availableLink={true}
          availableGit={false}
          live="https://www.behance.net/gallery/144886059/Spong-Music-Player-UI"
        />
        <Card
          img="user-profile"
          title="User Profile"
          tools="Figma, Photoshop"
          availableLink={true}
          availableGit={false}
          live="https://www.behance.net/gallery/144717867/User-Profile"
        />
      </div>
    </div>
  );
}
