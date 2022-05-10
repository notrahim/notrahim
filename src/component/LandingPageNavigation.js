import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * It returns a div with a className of landingPageNavContainer, which contains a div with a className
 * of landingPageNav, which contains a NavLink to the home page, which contains an image of the logo,
 * which contains a p with a className of littleConnect, which contains a NavLink to the connection
 * page
 * @returns The LandingPageNavigation component is being returned.
 */
const LandingPageNavigation = () => {
    return (
        <div className="landingPageNavContainer">
            <div className="landingPageNav">
                <NavLink to="/accueil"><img src="./img/logo.png" alt="logo" /></NavLink>
                <p className="littleConnect">Déjà un projet avec nous ? <NavLink to='/connection'>Connectez-vous</NavLink></p>
            </div>
        </div>
    );
};

export default LandingPageNavigation;