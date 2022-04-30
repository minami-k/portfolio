import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="has-text-centered mt-5">
      <a
        href="https://github.com/minami-k"
        target="_blank"
        rel="noreferrer"
        className="sns-link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/minami-koma/"
        target="_blank"
        rel="noreferrer"
        className="sns-link"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="mailto: minamikoma24@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="sns-link"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <footer className="footer-info">
        <small>
          Created by Minami Koma
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>
            <FontAwesomeIcon icon={faPaw} />
          </span>
          2022
        </small>
      </footer>
    </div>
  );
};

export default Footer;
