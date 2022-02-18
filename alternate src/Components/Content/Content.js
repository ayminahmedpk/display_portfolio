

import React from 'react';

import './Content.scss';


const Content = ({getCarouselClasses}) => {
    
    {/* <div className={`content ${CarouselClasses }`}> */}
    const CarouselClasses = getCarouselClasses();
    
    return (
        <div className="content-container">
            <div className={`content ${CarouselClasses }`}>
                <div className="content__page"> <p>Home</p> </div>

                <div className="content__page">

                    <p>
                        Hello.
                    </p>

                    <p>
                        My name is Aymin Ahmed and I am an entry-level
                        <b> React</b> developer. I love to write <b>clean
                        code</b> and can implement designs in a <b>pixel
                        perfect</b> manner.
                    </p>

                    <p>
                        Holding an IT degree from the University of
                        Staffordshire (UK), I have gone through various
                        turorials and bootcamps  to gradually build up my
                        front-end skillset.
                    </p>

                    <p>
                        While you're here, please consider taking a moment to
                        inspect my projects and seeing these skills in action. I
                        greatly appreciate your time and value any feedback you
                        may be willing to provide.
                    </p>

                </div>

                <div className="content__page"> <p>Projects</p> </div>
                <div className="content__page"> <p>Contact</p> </div>
            </div>
        </div>
    );
}


export default Content;