import React from 'react';
import './Content.css';
import  tf from './tficon.png';

let customData = require('./data.json')


function IntroContentBlock() {
    return (
        <div className="IntroContainer">
            <h2 className="BlockTitle">About Me</h2>
            <p>{customData[0].intro.text}</p>
        </div>
    )
}

function EducationBlock() {
    return (
        <div className="EducationContainer">
            <h2 className="BlockTitle">Education</h2>
            <div>
                {
                    customData[1].education.map(Block =>
                            <div>
                                <h4>{Block.Degree}</h4>
                                <p>{Block.School}({Block.YearStart}-{Block.YearEnd})</p>
                            </div>
                    )
                }
            </div>
        </div>
    )
}

function SkillsBlock() {
    return (
        <div className="SkillsContainer">
            <h2 className="BlockTitle">Skills</h2>
            <div>
                {
                    customData[2].skills.map(Block =>
                        <div>
                            <p>{Block.SkillName}</p>
                            <div className="SkillBarOuter">
                                <div className="SkillBarInner" style={{width:Block.Percentage}}>{Block.Label}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function ProjectsBlock() {
    return (
        <div className="ProjectContainer">
            <h2 className="BlockTitle">Projects</h2>
            <p>Source code for all projects is available on my GitHub.</p>
            {
                customData[3].projects.map(Block =>
                    <div className="ProjectBlock">
                        <h3>{Block.Name}</h3>
                        <p>{Block.Desc}</p>
                    </div>   
                    
                )
            }
        </div>
    )
}

function ContentContainer () {
    return (
        <div className="ContentBlockContainer">
            <div className="LeftColumn">
                <IntroContentBlock />
                <ProjectsBlock />
            </div>
            <div className="RightColumn">
                <EducationBlock />
                <SkillsBlock />
            </div>
        </div>
    )
}


export default ContentContainer