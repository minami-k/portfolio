import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <div className="has-text-centered contact">
      <h2 className="is-size-3 my-5">Get in touch with me</h2>
      <p>
        <a
          href="mailto: minamikoma24@gmail.com"
          rel="noreferrer"
          className="email"
        >
          <FontAwesomeIcon icon={faEnvelope} className="env-icon" /> : <span className="email-address">minamikoma24@gmail.com</span>
        </a>
      </p>
    </div>
  );
};

export default Contact;
