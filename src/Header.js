import React from 'react';
import './Header.css';
import me from './selfie.jpg';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

function Name() {
    return (
        <div className="NameContainer">
            <h1>Bradley Maness</h1>
            <hr></hr>
            <h4>Software Engineering | Machine Learning | Cybersecurity </h4>
        </div>
    );
}

function Portrait() {
    return (
        <div className="PortraitContainer">
            <img src={me} alt="selfie" />
        </div>
    );
}

function Icons() {
    return (
        <div className="IconContainer">
            <a href='mailto:bradmaness40@gmail.com'>
                <h1><SiGmail /></h1>
            </a>
            <a href='https://www.linkedin.com/in/bradley-maness/'>
                <h1><SiLinkedin /></h1>
            </a>
            <a href='https://github.com/Hiroden-651/'>
                <h1><SiGithub /></h1>
            </a>
        </div>

    );
}

function Header() {
    return (
        <div className="Header">
            <div className="contentWrapper">
                <Name />
                <Portrait />
                <Icons />
            </div>
        </div> 
    );
}

export default Header