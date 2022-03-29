import React from "react";
import "./aboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <>
    <div className="about-me">
      <div className="about-me-child">
      <div className="top-words">
        <h1>
          Hello.
          I'm Minami
        </h1>
        <p className="top-intro">I create webisites and build things for web</p>
        <a href="" rel="noreferrer">Resume &#8594;</a>
      </div>
    </div>
    </div>
    <div className='has-text-centered'>
      <h2 className='is-size-3 my-5'>About me</h2>
      <p className="me-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
    </>
  );
};

export default AboutMe;
