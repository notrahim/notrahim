import React from 'react';
import { NavLink } from 'react-router-dom';

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