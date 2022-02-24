

import React from 'react';

import Project from '../../Components/Project/Project.js';

import calculatorImg from '../../resources/images/projects/calculator/calculator.jpg';
import fourCardImg   from '../../resources/images/projects/four-card/four-card.jpg';
import sot           from '../../resources/images/projects/sot/sot.png';

import arrowDown from '../../resources/images/icons/arrow-down.svg';


const ProjectsPage = () => {

    const handler = (e) => {
        (e.currentTarget.classList.toggle("accordion--expanded"));
    }

    const descriptionFourCard = (
        <>
            <a className="project__link accordion" onClick={handler}>
                <div>
                    <span> Details </span> 
                        <img src={arrowDown} alt="" className="arrow" />
                </div>
                <p>
                    <strong>Description:</strong> Custom solution for a
                    Front-End Mentor challenge.
                </p>
                <p>
                    <strong>Highlights:</strong> Mobile-first development, Grid,
                    Flexbox, BEM.
                </p>
            </a>
        </>
    );

    const descriptionCalculator = (
        <>
            <a className="project__link accordion" onClick={handler}>
                <div>
                    <span> Details </span> 
                        <img src={arrowDown} alt="" className="arrow" />
                </div>
                <p>
                    <strong>Description:</strong> Custom solution for a
                    Front-End Mentor challenge.
                </p>
                <p>
                    <strong>Highlights:</strong> State design pattern, event
                    delegation pattern, local storage, SASS lists,
                    theme-switcher, customized slider.
                </p>
            </a>
        </>
    );

    const descriptionSOT = (
        <>
            <a className="project__link accordion" onClick={handler}>
                <div>
                    <span> Details </span> 
                        <img src={arrowDown} alt="" className="arrow" />
                </div>
                <p>
                    <strong>Description:</strong> A tool for generating and
                    posting timestamps as YouTube comments.
                </p>
                <p>
                    <strong>Highlights:</strong> React, Redux, Routing, Google
                    OAuth (direct endpoints - no library), YouTube Data API v3
                    (search, posting comments), container/component
                    architecture, custom hooks.
                </p>
            </a>
        </>
    );


    const projectsData = [
        {
            id          : 1,
            name        : 'FEM Four-Card Section',
            image       : fourCardImg,
            webLink     : 'https://ayminahmedpk.github.io/display-fem-four_card/',
            repoLink    : 'https://github.com/ayminahmedpk/display-fem-four_card/',
            femProject  : true,
            femLink     : 'https://www.frontendmentor.io/solutions/figma-grid-areas-and-autofit-flex-and-auto-margins-bem-sass-mVn4Kes-9',
            description : descriptionFourCard,
        },
        {
            id          : 2,
            name        : 'FEM Calculator',
            image       : calculatorImg,
            webLink     : 'https://ayminahmedpk.github.io/display-fem-calculator_app/',
            repoLink    : 'https://github.com/ayminahmedpk/display-fem-calculator_app/',
            femProject  : true,
            femLink     : 'https://www.frontendmentor.io/solutions/sass-lists-for-themes-local-storage-custom-slider-oop-calculator-4zp1kBWp8',
            description : descriptionCalculator,
        },
        {
            id         : 3,
            name       : 'Stamps Of Time',
            image      : sot,
            webLink    : 'https://sot3.netlify.app',
            repoLink   : 'https://github.com/ayminahmedpk/display_sot',
            femProject : false,
            description : descriptionSOT,
        },
    ];


    const projects = projectsData.map(({
                                        id,
                                        name,
                                        image,
                                        webLink,
                                        repoLink,
                                        femProject = false,
                                        femLink,
                                        description,
                                    }) => (
        <Project
            key         = {id}
            name        = {name}
            image       = {image}
            webLink     = {webLink}
            repoLink    = {repoLink}
            femProject  = {femProject}
            femLink     = {femLink}
            description = {description}
        />
    ));

    return (
        <div className="content">
            {projects}
        </div>
    );
};


export default ProjectsPage;