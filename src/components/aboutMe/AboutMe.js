import React from "react";
import "./aboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../../pdf/resume.pdf"

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
        <a href={resume} without rel="noreferrer noopener" target="_blank">Resume &#8594;</a>
      </div>
    </div>
    </div>
    <div className='has-text-centered'>
      <h2 className='is-size-3 my-5'>About me</h2>
      <p className="me-desc">Hello my name is Minami and I just started my journey as a front-end developer. 

I am always open to learn new skills and frameworks. So far I especially enjoy building web apps with React.

For the last couple of years, I have built websites for multiple companies mainly using WordPress and I have always been responsible and dedicated to my works. And what is more, I've been loving what I do.
</p>
    </div>
    </>
  );
};

export default AboutMe;
