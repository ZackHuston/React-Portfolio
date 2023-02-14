import React from 'react';
import './styles/AboutMe.css';
import Portrait from '../assets/portrait.jpeg'


export default function AboutMe() {
    return (
        <div className='section'> 
        <p className='about-me'>
        Hello my name is Zackary Cordell Kincaid Huston, I am an aspiring software developer. I chose this 
        path for a simple reason, I absolutley love to create things. Im very big on learning
        as well. At the momment I am enrolled in Butlers Executive Education bootcamp. This
        bootcamp has taught me very important and useful information. Once I graduate this
        bootcamp I do plan to get my associates degree in applied science in information technology
        for software programing later this year!
        </p>
        <img className='portrait' src={Portrait} alt="Github logo" />
        </div>
    )
}