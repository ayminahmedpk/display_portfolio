

import React from 'react';

import './Header.scss';


const Header = ({carouselLinkHandler, getCarouselLinkClasses}) => {
    
    return (
        <div className="header">
            <p>Header</p>
            <button
                data-carousel__link-target={">"}
                onClick={carouselLinkHandler}
            >
                x
            </button>
        </div>

    );
}


export default Header;