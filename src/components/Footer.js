import React from "react";
import "./styles/Footer.css";
import Github from "../assets/github2.png";
import stackOver from "../assets/stackoverflow.png";
import linkedIn from "../assets/linkedin.png";

export function Footer() {
  return (
    <footer className="footer">
        
      <a href="https://github.com/ZackHuston" 
      target="_blank" 
      rel="noreferrer">
        <img className="github" src={Github} alt="Github Link Logo" />
      </a>

      <a href="https://stackoverflow.com/users/21215060/zackhuston" 
        target="_blank"
        rel="noreferrer">
        <img className="stack" src={stackOver} alt="Stackoverflow Link Logo" />
      </a>

      <a
        href="https://www.linkedin.com/in/zack-huston-774454266/"
        target="_blank"
        rel="noreferrer">
        <img className="linkedin" src={linkedIn} alt="example" />
      </a>
    </footer>
  );
}
