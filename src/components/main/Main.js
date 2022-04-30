import React from "react";
import AboutMe from "../aboutMe/AboutMe.js";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import resume from "../../pdf/resume.pdf"


const Main = () => {
  return (
    <div>
            <div className="about-me">
      <div className="about-me-child">
      <div className="top-words">
        <h1>
          Hello. I'm Minami
        </h1>
        <p className="top-intro">I create webisites and build things for web</p>
        <a href={resume} without rel="noreferrer noopener" target="_blank">Resume &#8594;</a>
      </div>
    </div>
    </div>
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
};

export default Main;
