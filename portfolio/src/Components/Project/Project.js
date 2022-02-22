

import React from "react";

// import './Project.scss';


const Project = ({name, image, webLink, repoLink, femProject, femLink}) => {
    const returnFEMLink = <a
                            className='project__link'
                            target='_blank'
                            href={femLink}>
                                Compare site to desktop design
                            </a> ;
    return (
        <>
        <div className='project'>
            <h2>{name}</h2>
            <img className='project__image'   src={image} alt=""/>
            <a className='project__link'  target='_blank' href={webLink}>Live Website</a>
            <a className='project__link' target='_blank' href={repoLink}>Github Repository</a>
            {femProject ? returnFEMLink : ''}
        </div>
        </>
    )

}


export default Project;