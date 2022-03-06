

import React from 'react';

import calculatorImg from '../../resources/images/projects/calculator/calculator.jpg';
import fourCardImg   from '../../resources/images/projects/four-card/four-card.jpg';
import sot           from '../../resources/images/projects/sot/sot.png';
import portfolio     from '../../resources/images/projects/portfolio/portfolio.png';

import arrowDown from '../../resources/images/icons/arrow-down.svg';


const ProjectsPage = () => {

    const descriptionHandler = (e) => {
        (e.currentTarget.classList.toggle("accordion--expanded"));
    }

    return (
        <div className="content">
            <h2 className="page-name">My Projects</h2>
            
            <div className="project">
                <h3 className="project__name">FEM Four Card Landing Section</h3>
                <div className="project__image-container">
                    <img className="project__image" src={fourCardImg} />
                </div>
                <a className="project__link" target="_blank" href='https://ayminahmedpk.github.io/display-fem-four_card/'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display-fem-four_card/'> Github Repository </a>
                <a className="project__link" target="_blank" href='https://www.frontendmentor.io/solutions/figma-grid-areas-and-autofit-flex-and-auto-margins-bem-sass-mVn4Kes-9'> Compare site to design </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    <img src={arrowDown} alt="" className="arrow" />
                    <p className="project__details-label">Details</p>
                    <p className="project__details"> <strong>Description:</strong> Custom solution for a Front-End Mentor challenge. </p>
                    <p className="project__details"> <strong>Highlights:</strong> Mobile-first development, Grid, Flexbox, BEM. </p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">FEM Calculator</h3>
                <div className="project__image-container">
                    <img className="project__image" src={calculatorImg} />
                </div>
                <a className="project__link" target="_blank" href='https://ayminahmedpk.github.io/display-fem-calculator_app/'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display-fem-calculator_app/'> Github Repository </a>
                <a className="project__link" target="_blank" href='https://www.frontendmentor.io/solutions/sass-lists-for-themes-local-storage-custom-slider-oop-calculator-4zp1kBWp8'> Compare site to design </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    <img src={arrowDown} alt="" className="arrow" />
                    <p className="project__details-label">Details</p>
                    <p className="project__details"> <strong>Description:</strong> Custom solution for a Front-End Mentor challenge. </p>
                    <p className="project__details"> <strong>Highlights:</strong> State design pattern, event delegation pattern, local storage, SASS lists, theme-switcher, customized slider. </p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">Stamps Of Time</h3>
                <div className="project__image-container">
                    <img className="project__image" src={sot} />
                </div>
                <a className="project__link" target="_blank" href='https://sot3.netlify.app'> Live Website </a>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display_sot'> Github Repository </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    <img src={arrowDown} alt="" className="arrow" />
                    <p className="project__details-label">Details</p>
                    <p className="project__details"> <strong>Description:</strong> A tool for generating and posting timestamps as YouTube comments. </p>
                    <p className="project__details"> <strong>Highlights:</strong> React, Redux, Routing, Google OAuth (direct endpoints - no library), YouTube Data API v3 (search, posting comments), container/component architecture, custom hooks. </p>
                </div>
            </div>

            <div className="project">
                <h3 className="project__name">This Portfolio</h3>
                <div className="project__image-container">
                    <img className="project__image" src={portfolio} />
                </div>
                <a className="project__link" target="_blank" href='https://github.com/ayminahmedpk/display_portfolio'> Github Repository </a>
                <div className="project__details-container accordion" onClick={descriptionHandler}>
                    <img src={arrowDown} alt="" className="arrow" />
                    <p className="project__details-label">Details</p>
                    <p className="project__details"> <strong>Description:</strong> A very minimalistic portfolio. </p>
                    <p className="project__details"> <strong>Highlights:</strong> React, Routing, Tiny Tweaks.</p>
                </div>
            </div>

        </div>
    );

};


export default ProjectsPage;