

import React from 'react';

import Project from '../../Components/Project/Project.js';

import calculatorImg from '../../resources/images/projects/calculator/calculator.jpg';
import fourCardImg   from '../../resources/images/projects/four-card/four-card.jpg';
import sot           from '../../resources/images/projects/sot/sot.png';
import portfolio     from '../../resources/images/projects/portfolio/portfolio.png';


const ProjectsPage = () => {

    const descriptionFourCard = (
        <>
            <p>
                <strong>Description:</strong> Custom solution for a
                Front-End Mentor challenge.
            </p>
            <p>
                <strong>Highlights:</strong> Mobile-first development, Grid,
                Flexbox, BEM.
            </p>
        </>
    );

    const descriptionCalculator = (
        <>
            <p>
                <strong>Description:</strong> Custom solution for a
                Front-End Mentor challenge.
            </p>
            <p>
                <strong>Highlights:</strong> State design pattern, event
                delegation pattern, local storage, SASS lists,
                theme-switcher, customized slider.
            </p>
        </>
    );

    const descriptionSOT = (
        <>
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
        </>
    );
    
    const descriptionPortfolio = (
        <>
            <p>
                <strong>Description:</strong> A very minimalistic portfolio.
            </p>
            <p>
                <strong>Highlights:</strong> React, Routing, Tiny Tweaks.
            </p>
        </>
    );


    const projectsData = [
        {
            id          : 1,
            name        : 'FEM Four-Card Section',
            image       : fourCardImg,
            links       : [
                {
                    id     : 1,
                    name   : 'Live Website',
                    target : 'https://ayminahmedpk.github.io/display-fem-four_card/',
                },
                {
                    id     : 2,
                    name   : 'Github Repository',
                    target : 'https://github.com/ayminahmedpk/display-fem-four_card/',
                },
                {
                    id     : 3,
                    name   : 'Compare site to desktop design',
                    target : 'https://www.frontendmentor.io/solutions/figma-grid-areas-and-autofit-flex-and-auto-margins-bem-sass-mVn4Kes-9',
                },
            ],
            description : descriptionFourCard,
        },
        {
            id          : 2,
            name        : 'FEM Calculator',
            image       : calculatorImg,
            links       : [
                {
                    id     : 1,
                    name   : 'Live Website',
                    target : 'https://ayminahmedpk.github.io/display-fem-calculator_app/',
                },
                {
                    id     : 2,
                    name   : 'Github Repository',
                    target : 'https://github.com/ayminahmedpk/display-fem-calculator_app/',
                },
                {
                    id     : 3,
                    name   : 'Compare site to desktop design',
                    target : 'https://www.frontendmentor.io/solutions/sass-lists-for-themes-local-storage-custom-slider-oop-calculator-4zp1kBWp8',
                },
            ],
            description : descriptionCalculator,
        },
        {
            id         : 3,
            name       : 'Stamps Of Time',
            image      : sot,
            links       : [
                {
                    id     : 1,
                    name   : 'Live Website',
                    target : 'https://sot3.netlify.app',
                },
                {
                    id     : 2,
                    name   : 'Github Repository',
                    target : 'https://github.com/ayminahmedpk/display_sot',
                },
            ],
            description : descriptionSOT,
        },
        {
            id         : 4,
            name       : 'This Portfolio',
            image      : portfolio,
            links       : [
                {
                    id     : 1,
                    name   : 'Github Repository',
                    target : 'https://github.com/ayminahmedpk/display_portfolio',
                },
            ],
            description : descriptionPortfolio,
        },
    ];


    const projects = projectsData.map(({id, name, image, links, description}) => (
        <Project
            key         = {id}
            name        = {name}
            image       = {image}
            links       = {links}
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