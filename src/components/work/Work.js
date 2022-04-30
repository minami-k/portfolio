import React from "react";
import "./work.css";
import Data from "../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Work = () => {
  const data = Data;

  return (
    <div className="has-text-centered projects">
      <h2 className="is-size-1 my-6">Projects</h2>

      {data.map((i) => {
        return (
          <div key={i.id} className="project-desc">
            <h3 className="is-size-4">{i.title}</h3>
            <div className="is-flex-tablet is-justify-content-center is-align-content-center ">
              <div className="project-img mr-1">
                <img src={i.img} style={{ width: "100%" }} alt={i.title} />
              </div>
              <div className="project-right">
                <p>{i.desc}</p>
                <p className="mt-2">Skill used: <span className="language-used">{i.language}</span></p>
              </div>
            </div>
            <div className="is-flex is-justify-content-center project-link has-text-centered">
                  <button className="mr-4 link-button"><a href={i.url} target="_blank" rel="noreferrer">View this project</a></button>
                  <button className="link-button">
                    <a href={i.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="mr-1"/>GitHub</a>
                  </button>
                </div>

          </div>
        );
      })}
    </div>
  );
};

export default Work;
