

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import homeIcon  from '../../resources/images/icons/home.svg';
import aboutIcon from '../../resources/images/icons/about.svg';
import projectsIcon from '../../resources/images/icons/projects.svg';
import contactIcon from '../../resources/images/icons/contact.svg';

// import './Header.scss';
import './Header.scss';


const Header = () => {

    const home = <>
                    <img
                        className={'header__link-icon'}
                        src={homeIcon}
                        alt=""
                    />
                    <p className={'header__link-text'}>
                        Home
                    </p>
                </>

    const about = <>
                    <img
                        className={'header__link-icon'}
                        src={aboutIcon}
                        alt=""
                    />
                    <p className={'header__link-text'}>
                        About
                    </p>
                  </>

    const projects = <>
                        <img
                            className={'header__link-icon'}
                            src={projectsIcon}
                            alt=""
                        />
                        <p className={'header__link-text'}>
                            Projects
                        </p>
                     </>

    const contact = <>
                        <img
                            className={'header__link-icon'}
                            src={contactIcon}
                            alt=""
                        />
                        <p className={'header__link-text'}>
                            Contact
                        </p>
                    </>

    
    return (
        <div className="header">  
            {/* <NavLink to={'/'}>Home</NavLink> */}
            <NavLink to={'/'}>{home}</NavLink>
            <NavLink to={'/about'}>{about}</NavLink>
            <NavLink to={'/projects'}>{projects}</NavLink>
            <NavLink to={'/contact'}>{contact}</NavLink>
        </div>
    );
}


export default Header;