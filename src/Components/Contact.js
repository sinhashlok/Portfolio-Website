import React, { useState } from "react";
import SectionsHeadins from "./SectionHeadings";
import { send } from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  var templateParams = {
    name: formData.name,
    email: formData.email,
    textarea: formData.textarea,
  };

  function handleClick(event) {
    event.preventDefault();
    send({ SERVICE_ID }, { TEMPLATE_ID }, templateParams, { PUBLIC_KEY })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    event.preventDefault();
  }

  return (
    <div className="contact">
      <SectionsHeadins className="contact-title" title="Contant" />
      <div className="contact-box">
        <div className="contact-data">
          <h1 className="contact-tag-line">Let's Chat</h1>
          <p className="contact-credential">shlokjp@gmail.com</p>
          <p className="contact-credential">+91 92057 19376</p>
        </div>
        <div className="form">
          <h1 className="form-message">Send me a message</h1>
          <form>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
            />
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
            />
            <p className="text-area-placeholder">Tell me about yourself!</p>
            <textarea
              onChange={handleChange}
              name="textarea"
              className="form-textarea"
              value={formData.textarea}
            ></textarea>
            <input onClick={handleClick} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
