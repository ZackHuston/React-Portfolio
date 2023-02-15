import React from "react";
import "./styles/Resume.css";

export default function Resume() {
  return (
    <div>
      <h1 className="res">
        View resume 
        <a className='resume'href="https://docs.google.com/document/d/1RTiKwdAEaG0D0rhGoIah_0qtU8zoCwdHO7IEWc1h8yE/edit?usp=sharing"
        target="_blank" 
        rel="noreferrer"> here
        </a>
      </h1>
      <br></br>
      <h2>Front-end Proficiencies</h2>
      <ul className="prof">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Boostrap</li>
        <li>Material UI</li>
        <li>Responsive Design</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul className="prof2">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequalize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
