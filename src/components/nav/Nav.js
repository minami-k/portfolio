import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <navbar>
        <ul className="is-flex-tablet is-justify-content-space-between nav-bar">
          <div className="is-flex-tablet">
            <li className="navbar-item">
              <Link to="/mysite">HOME</Link>
            </li>
            <li className="navbar-item">
              <Link to="/aboutMe">ABOUT ME</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects">PROJECTS</Link>
            </li>
          </div>
          <div>
            <li className="navbar-item">
              <a
                href="mailto: minamikoma24@gmail.com"
                rel="noreferrer"
                className="email"
              >
                EMAIL<FontAwesomeIcon icon={faFaceSmile} className="ml-2"/>
              </a>
            </li>
          </div>
        </ul>
      </navbar>
    </>
  );
};

export default Nav;
