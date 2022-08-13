

import React from 'react';

import fourCardS from '../../resources/images/projects/four-card/four-card-small.png';
import fourCardM from '../../resources/images/projects/four-card/four-card-medium.png';
import fourCardL from '../../resources/images/projects/four-card/four-card-large.png';

import calculatorS from '../../resources/images/projects/calculator/calculator-small.png';
import calculatorM from '../../resources/images/projects/calculator/calculator-medium.png';
import calculatorL from '../../resources/images/projects/calculator/calculator-large.png';

import restConS from '../../resources/images/projects/rest-countries/rest_countries-small.jpg';
import restConM from '../../resources/images/projects/rest-countries/rest_countries-medium.jpg';
import restConL from '../../resources/images/projects/rest-countries/rest_countries-large.png';

import portfolioS from '../../resources/images/projects/portfolio/portfolio-small.png';
import portfolioM from '../../resources/images/projects/portfolio/portfolio-medium.png';
// import portfolioL     from '../../resources/images/projects/portfolio/portfolio-large.png';


const ProjectsPage = () => {

    const descriptionHandler = (e) => {
        (e.currentTarget.classList.toggle("accordion--expanded"));
    }

    const arrowIcon = (
        <svg className="project__details-arrow" viewBox="0 0 64 64">
        <polyline points="15,24 32,41 49,24"/>
    </svg>
    );

    return (

        <>
        
        <div className="content">
            <h2 className="page-name">My Projects</h2>
            
            <div className="project">
                <h3 className="project__name">FEM Four Card Landing Section</h3>
                <div className="project__image-container">
                    <img
                        className = "project__image"
                        src       = {fourCardM}
                        srcSet    = {`${fourCardS} 520w, ${fourCardM} 1040w, ${fourCardL} 2080w` }
                        sizes     = "100vw"
                        alt       = "project screenshot"
                    />
                </div>
                <a className="project__link project__link-live" target="_blank" href='https://ayminahmedpk.github.io/display-fem-four_card/'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display-fem-four_card/'> Github Repository </a>
                <a className="project__link" target="_blank" href='https://www.frontendmentor.io/solutions/figma-grid-areas-and-autofit-flex-and-auto-margins-bem-sass-mVn4Kes-9'> Compare site to design </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    {arrowIcon}
                    <p className="project__details-label">Details</p>
                    <p className="project__details-text"><strong>Description:</strong> Custom solution for a Front-End Mentor challenge.</p>
                    <p className="project__details-text"><strong>Highlights:</strong> Mobile-first development, Grid, Flexbox, BEM.</p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">FEM Calculator</h3>
                <div className="project__image-container">
                <img
                        className = "project__image"
                        src       = {calculatorM}
                        srcSet    = { `${calculatorS} 520w, ${calculatorM} 1040w, ${calculatorL} 2080w` }
                        sizes     = "100w"
                        alt       = "project screenshot"
                />
                </div>
                <a className="project__link project__link-live" target="_blank" href='https://ayminahmedpk.github.io/display-fem-calculator_app/'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display-fem-calculator_app/'> Github Repository </a>
                <a className="project__link" target="_blank" href='https://www.frontendmentor.io/solutions/sass-lists-for-themes-local-storage-custom-slider-oop-calculator-4zp1kBWp8'> Compare site to design </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    {arrowIcon}
                    <p className="project__details-label">Details</p>
                    <p className="project__details-text"><strong>Description:</strong> Custom solution for a Front-End Mentor challenge.</p>
                    <p className="project__details-text"><strong>Highlights:</strong> State design pattern, event delegation pattern, local storage, SASS lists, theme-switcher, customized slider.</p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">REST Countries</h3>
                <div className="project__image-container">
                <img
                        className = "project__image"
                        src       = {restConM}
                        srcSet    = { `${restConS} 520w, ${restConM} 1040w, ${restConL} 2080w` }
                        sizes     = "100vw"
                        alt       = "project screenshot"
                />
                </div>
                <a className="project__link project__link-live" target="_blank" href='https://restcon.netlify.app/'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display-fem-rest_countries'> Github Repository </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    {arrowIcon}
                    <p className="project__details-label">Details</p>
                    <p className="project__details-text"><strong>Description:</strong> Custom solution for a Front-End Mentor challenge.</p>
                    <p className="project__details-text"><strong>Highlights:</strong> TypeScript, React (classes), Redux (old syntax), Thunk, Axios. Testing done using Jest + RTL (React Testing Library). API call mocked via MSW (Mock Service Worker).</p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">This Portfolio</h3>
                <div className="project__image-container">
                    <img
                        className = "project__image"
                        src       = {portfolioS}
                        srcSet    = {`${portfolioS} 800w, ${portfolioM} 1040w`}
                        sizes     = "100vw"
                        alt       = "project screenshot"
                    />
                </div>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display_portfolio'> Github Repository </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    {arrowIcon}
                    <p className="project__details-label">Details</p>
                    <p className="project__details-text"><strong>Description: </strong>A very minimalistic portfolio.</p>
                    <p className="project__details-text"><strong>Highlights: </strong>React, Routing, Tiny Tweaks.</p>
                </div>
            </div>

        </div>
        </>

    );

};


export default ProjectsPage;