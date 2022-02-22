

import React from "react";

import './PageLink.scss';


const PageLink = ({handler, classes, to, text}) => {

    const additionalClasses = 'page-link';
    classes = `${additionalClasses} ${classes}`;


    return (
        <div
            className={classes}
            onClick={handler}
            data-carousel__link-target={to}
        >
            {text}
        </div>
    );
}


export default PageLink;