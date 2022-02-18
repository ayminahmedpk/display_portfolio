

import React from 'react';

import { Link } from 'react-router-dom';


const AboutPage = () => {
    return (
        <div className="content">
            <h2>
                Hello!
            </h2>

            <p>
                My name is Aymin Ahmed and I am an entry-level
                <strong> React </strong> developer. I love to write
                <strong> clean code </strong> and can implement designs in a
                <strong> pixel perfect </strong> manner.
            </p>

            <p>
                Holding an IT degree from the University of Staffordshire (UK),
                I have worked through various turorials and bootcamps to
                gradually build up my front-end skillset.
            </p>

            <p>
                While you're here, please consider taking a moment to
                inspect my <Link to='/projects'>projects</Link> and seeing these skills in action. I
                greatly appreciate your time and value any feedback you
                may be willing to provide.
            </p>
        </div>
    );
};


export default AboutPage;