import React from 'react';
import "./styles/Portfolio.css"
import dineWine from '../assets/Dine&Wine.png'
import Github from "../assets/github2.png";


export default function Portfolio() {
    return (
        <div className='portfolio'> 
      <a href="https://terryboufis.github.io/Dine-and-Wine-App/" 
      target="_blank" 
      rel="noreferrer">
        <img className="app" src={dineWine} alt="Dine&Wine app screenshot" />
      </a>
      <ul className='GitHub-Link'>
        <li><a href="https://github.com/TerryBoufis/Dine-and-Wine-App" 
      target="_blank" 
      rel="noreferrer">
        <img className="github2" src={Github} alt="Github Link Logo" />
      </a>
      </li>
      </ul>
        </div>
    )
}