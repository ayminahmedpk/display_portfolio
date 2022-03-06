

import React from 'react';

import { Link } from 'react-router-dom';

// import './HomePage.scss';


const HomePage = () => {

    const upworkLink = 'https://www.upwork.com/freelancers/~0199f64fd0caef6e9c';

    return (
        <div className="content">
            <div className="cta">
                <h1 className='cta__name'> Aymin Ahmed </h1>
                <p className="cta__description">Front-End Web Developer</p>
                <a className="cta__button" target="_blank" href={upworkLink}><h2>Hire Now</h2></a>
            </div>
            <div className="learn-more">or <Link to='/about'>learn more</Link></div>
        </div>
    );
};


export default HomePage;