

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Header.scss';


const Header = () => {
    
    return (
        <div className="header">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
    );
}


export default Header;