

import React from "react";

import arrowDown from '../../resources/images/icons/arrow-down.svg';

// import './Project.scss';


const Project = ({name, image, links, description}) => {

    const processedLinks = links.map(({id, name, target}) => (
        <a key={id} className='project__link' target='_blank' href={target}>{name}</a>
    ));

    const descriptionHandler = (e) => {
        (e.currentTarget.classList.toggle("accordion--expanded"));
    }

    const descriptionBar = (
        <a className="project__link accordion" onClick={descriptionHandler}>
            <div>
                <span> Details </span> 
                    <img src={arrowDown} alt="" className="arrow" />
                    {description}
            </div>
        </a>
    );

    return (
        <>
        <div className='project'>
            <h2>{name}</h2>
            <img className='project__image'   src={image} alt=""/>
            {processedLinks}
            {descriptionBar}
        </div>
        </>
    );
}


export default Project;