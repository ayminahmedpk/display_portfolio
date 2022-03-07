

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const home = <>
                    <svg className='header__link-icon icon-home' viewBox="0 0 330.242 330.242">
                        <path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999  c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314  c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053  v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5  c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"/>
                    </svg>
                    <p className={'header__link-text'}>
                        Home
                    </p>
                </>

    const about = <>
                    <svg className='header__link-icon icon-about' viewBox="0 0 512 512" >
                        <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z"/><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z"/>
                    </svg>
                    <p className={'header__link-text'}>
                        About
                    </p>
                  </>

    const projects = <>
                        <svg className='header__link-icon icon-projects' viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27"/>
                        </svg>
                        <p className={'header__link-text'}>
                            Projects
                        </p>
                     </>

    const contact = <>
                        <svg className='header__link-icon icon-contact' viewBox="0 0 24 22">
                            <g>
                                <path d="M4,3H14a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H11L8,16,5,13H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3Z"/>
                                <path d="M16,8h4a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H18l-2,3-3-3H10a2,2,0,0,1-2-2H8"/>
                            </g>
                        </svg>

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