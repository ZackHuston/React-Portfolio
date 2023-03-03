import React from "react";
import "./styles/Portfolio.css";
import dineWine from "../assets/Dine&Wine.png";
import reviewApp from "../assets/ReviewsForDays.png";
import Github from "../assets/github2.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <a
        href="https://terryboufis.github.io/Dine-and-Wine-App/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="app" src={dineWine} alt="Dine&Wine App Screenshot" />
      </a>
      <ul className="GitHub-Link">
        <li>
          <a
            href="https://github.com/TerryBoufis/Dine-and-Wine-App"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github2" src={Github} alt="Github Link Logo" />
          </a>
        </li>
      </ul>
      <a 
        href="https://reviews-for-days.herokuapp.com/Links to an external site." 
        target="_blank"
        rel="noreferrer"
        >
          <img className="app2" src={reviewApp} alt="Review App Screenshot"/>
      </a>
      <ul className="GitHub-Link2">
        <li>
          <a 
            href="https://github.com/Hayek23/Reviews-For-Days"
            target="_blank"
            rel="noreferrer">
              <img className="github3" src={Github} alt="Github Link Logo"></img>

          </a>
        </li>
      </ul>
    </div>
  );
}
