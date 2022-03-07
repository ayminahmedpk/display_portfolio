

import React from 'react';

import { Link } from 'react-router-dom';


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
        </div>
    );
};


export default AboutPage;