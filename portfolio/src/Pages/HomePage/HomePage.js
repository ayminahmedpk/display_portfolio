

import React from 'react';

import { Link } from 'react-router-dom';

// import './HomePage.scss';


const HomePage = () => {
    return (
        <div className="content">
            <div className="main-content">
                <h1 className='name'> AYMIN AHMED </h1>
                <div className="occupation">FRONT-END DEVELOPER</div>
                <button className="cta"><h2>HIRE NOW</h2></button>
            </div>
            <div className="learn-more">or <Link to='/about'>learn more</Link></div>
        </div>
    );
};


export default HomePage;