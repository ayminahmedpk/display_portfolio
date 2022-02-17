

import React from 'react';

import './Content.scss';


const Content = ({getCarouselClasses}) => {
    {/* <div className={`content ${CarouselClasses }`}> */}
    const CarouselClasses = getCarouselClasses();
    return (
        <div className="content-container">
            <div className={`content ${CarouselClasses }`}>
                <div className="content__page"> <p>PAGE 1</p> </div>
                <div className="content__page"> <p>PAGE 2</p> </div>
                <div className="content__page"> <p>PAGE 3</p> </div>
                <div className="content__page"> <p>PAGE 4</p> </div>
            </div>
        </div>
    );
}


export default Content;