

import React from 'react';

import Project from '../../Components/Project/Project.js';

import calculatorImg from '../../resources/images/projects/calculator/calculator.jpg';
import fourCardImg   from '../../resources/images/projects/four-card/four-card.jpg';


const ProjectsPage = () => {

    const projectsData = [
        {
            id         : 2,
            name       : 'FEM Four-Card Section',
            image      : fourCardImg,
            webLink    : 'https://ayminahmedpk.github.io/display-fem-four_card/',
            repoLink   : 'https://github.com/ayminahmedpk/display-fem-four_card/',
            femProject : true,
            femLink    : 'https://www.frontendmentor.io/solutions/figma-grid-areas-and-autofit-flex-and-auto-margins-bem-sass-mVn4Kes-9'
        },
        {
            id         : 1,
            name       : 'FEM Calculator',
            image      : calculatorImg,
            webLink    : 'https://ayminahmedpk.github.io/display-fem-calculator_app/',
            repoLink   : 'https://github.com/ayminahmedpk/display-fem-calculator_app/',
            femProject : true,
            femLink    : 'https://www.frontendmentor.io/solutions/sass-lists-for-themes-local-storage-custom-slider-oop-calculator-4zp1kBWp8'
        },
    ];


    const projects = projectsData.map(({
                                        id,
                                        name,
                                        image,
                                        webLink,
                                        repoLink,
                                        femProject = false,
                                        femLink
                                    }) => (
        <Project
            key        = {id}
            name       = {name}
            image      = {image}
            webLink    = {webLink}
            repoLink   = {repoLink}
            femProject = {femProject}
            femLink    = {femLink}
        />
    ));

    return (
        <div className="content">
            {projects}
        </div>
    );
};


export default ProjectsPage;