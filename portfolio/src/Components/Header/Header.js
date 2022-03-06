

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import homeIcon  from '../../resources/images/icons/home.svg';
import aboutIcon from '../../resources/images/icons/about.svg';
import projectsIcon from '../../resources/images/icons/projects.svg';
import contactIcon from '../../resources/images/icons/contact.svg';


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
            <div className="header__header-links">
                <NavLink className="header__header-link" to={'/'}        > {home}     </NavLink>
                <NavLink className="header__header-link" to={'/about'}   > {about}    </NavLink>
                <NavLink className="header__header-link" to={'/projects'}> {projects} </NavLink>
                <NavLink className="header__header-link" to={'/contact'} > {contact}  </NavLink>
            </div>
        </div>
    );
}


export default Header;