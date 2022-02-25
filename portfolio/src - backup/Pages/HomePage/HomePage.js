

import React from 'react';

import { Link } from 'react-router-dom';

// import './HomePage.scss';


const HomePage = () => {

    const upworkLink = 'https://www.upwork.com/freelancers/~0199f64fd0caef6e9c';

    return (
        <div className="content">
            <div className="main-content">
                <h1 className='name'> AYMIN AHMED </h1>
                <div className="occupation">FRONT-END DEVELOPER</div>
                <a target="_blank" href={upworkLink} className="cta"><h2>HIRE NOW</h2></a>
            </div>
            <div className="learn-more">or <Link to='/about'>learn more</Link></div>
        </div>
    );
};


export default HomePage;