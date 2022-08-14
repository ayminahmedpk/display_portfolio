

import React from 'react';

import { Link } from 'react-router-dom';

import cssIcon from '../../resources/images/icons/skills-icons/css.svg';
import sassIcon from '../../resources/images/icons/skills-icons/sass.svg';
import bemIcon from '../../resources/images/icons/skills-icons/bem.svg';
import jsIcon from '../../resources/images/icons/skills-icons/js.svg';
import reactIcon from '../../resources/images/icons/skills-icons/react.svg';
import reduxIcon from '../../resources/images/icons/skills-icons/redux.svg';
import tsIcon from '../../resources/images/icons/skills-icons/ts.svg';
import jestIcon from '../../resources/images/icons/skills-icons/jest.svg';
import rtlIcon from '../../resources/images/icons/skills-icons/rtl.svg';


const AboutPage = () => {
    return (
        <div className="content">
            <h2 className="page-name"> About Me </h2>

            <p>
                Hello! My name is Aymin Ahmed and I am a front-end web developer
                with an IT degree from Staffordshire University.
            </p>

            <p>
                I can implement designs in a <strong>pixel-perfect </strong>
                manner and love to write <strong>clean code </strong>-
                especially for <strong>React.</strong>
            </p>

            <p>
                Please take a look at my <Link to='/projects'>projects</Link> to
                see these skills in action.
            </p>

            <div className="skills__section">
                <h2>Skills</h2>
                <div className="skills">
                    <div className="skills_skill">
                        <img className='skills__icon' src={cssIcon}/>
                        <p className="skills__skill-text">CSS3</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={sassIcon}/>
                        <p className="skills__skill-text">SASS</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={bemIcon}/>
                        {/* <div className="skills__skill-text">Block Element Modifier</div> */}
                        <p className="skills__skill-text">BEM</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon skills__icon--rounded' src={jsIcon}/>
                        <p className="skills__skill-text">JavaScript</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={reactIcon}/>
                        <p className="skills__skill-text">React</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={reduxIcon}/>
                        <p className="skills__skill-text">Redux</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon skills__icon--rounded' src={tsIcon}/>
                        <p className="skills__skill-text">TypeScript</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={jestIcon}/>
                        <p className="skills__skill-text">Jest</p>
                    </div>
                    <div className="skills_skill">
                        <img className='skills__icon' src={rtlIcon}/>
                        {/* <div className="skills__skill-text">React Testing Library</div> */}
                        <p className="skills__skill-text">RTL</p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default AboutPage;