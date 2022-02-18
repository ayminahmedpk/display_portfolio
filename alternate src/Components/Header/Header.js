

import React from 'react';

import PageLink from '../PageLink/PageLink.js';

import './Header.scss';


const Header = ({carouselLinkHandler, getCarouselLinkClasses}) => {

    const linksData = [
        { id: 1, to:"1", text:"Home"     },
        { id: 2, to:"2", text:"About"    },
        { id: 3, to:"3", text:"Projects" },
        { id: 4, to:"4", text:"Contact"  },
    ]

    const links = linksData.map( ({id, to, text}) => {
        const classes = getCarouselLinkClasses(to);
        return (
            <PageLink
                key     = {id}
                handler = {carouselLinkHandler}
                classes = {classes}
                to      = {to}
                text    = {text}
            />
        )
    });
    
    return (
        <div className="header">
            {links}
        </div>

    );
}


export default Header;