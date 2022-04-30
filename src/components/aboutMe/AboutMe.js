import React from "react";
import "./aboutMe.css";
import profile from "../../img/profile_minami.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNode,
  faGithub,
  faBootstrap,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <>
      <h2 className="is-size-1 my-6 has-text-centered">About me</h2>

      <div className="about-me-flex">
        <div className="has-text-centered about-me-exp">
          <p className="me-desc">
            Hello, my name is Minami,{" "}
            <span className="font-b">an inquisitive front-end developer.</span>{" "}
            <br />I enjoy building things for the web, including creating
            websites with excellent user experience.{" "}
          </p>

          <p className="me-desc">
            My interest in web development began back in 2019 when one of my
            friends taught me how to make boxes in different colors with HTML
            and CSS. I clearly remember how fascinated I was and decided to
            <span className="font-b"> pursue a career in web development.</span>
          </p>

          <p className="me-desc">
            In the past years, I had the privilege of working at start-ups where
            I was responsible for creating websites for multiple small
            businesses. One thing I realize is that the more I work in the IT
            field,{" "}
            <span className="font-b">
              {" "}
              the more I get passionate about coding.
            </span>{" "}
            That is why I{" "}
            <span className="font-b">
              {" "}
              never stop learning new skills and keep challenging my potential.
            </span>{" "}
          </p>

          <p className="me-desc">
            I am now looking for a{" "}
            <span className="font-b"> junior web developer </span> position and
            am excited about the opportunity to{" "}
            <span className="font-b">
              {" "}
              learn among professional developers.
            </span>{" "}
          </p>
        </div>
        <div className="about-me-img">
          <img src={profile} width="100%" alt="profile" />
        </div>
      </div>
      <div className="has-text-centered ">
        <h2 className="is-size-1 my-6">My skill</h2>
        <div className="skill-category is-flex-tablet is-justify-content-space-around ">
          <div className="skill-category-child">
            <h3 className="is-size-4">Languages</h3>
            <ul className="is-flex is-flex-wrap-wrap is-justify-content-center skill ">
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <br />
                HTML
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faCss3} size="3x" />
                <br />
                CSS
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faSass} size="3x" />
                <br />
                SASS
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <br />
                JavaScript
              </li>
            </ul>
          </div>
          <div className="skill-category-child">
            <h3 className="is-size-4">Frameworks &amp; Libraries</h3>
            <ul className="is-flex is-flex-wrap-wrap is-justify-content-center skill ">
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <br />
                Bootstrap
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <br />
                React.js
              </li>
            </ul>
          </div>
          <div className="skill-category-child">
            <h3 className="is-size-4">Others</h3>
            <ul className="is-flex is-flex-wrap-wrap is-justify-content-center skill ">
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faNode} size="3x" /> <br />
                Node.js
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <br />
                GitHub
              </li>
              <li className="py-2 px-4">
                <FontAwesomeIcon icon={faWordpress} size="3x" />
                <br />
                WordPress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
