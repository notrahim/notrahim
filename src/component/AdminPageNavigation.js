import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/component/_adminPageNavigation.scss"

const AdminPageNavigation = () => {
    return (
        <div className="adminPageNavContainer">
            <div className="adminPageNav">
                <NavLink to="/accueil"><img src="./img/logo.png" alt="logo" /></NavLink>
                <p className="littleConnect">Déjà un projet avec nous ? <NavLink to='/connection'>Connectez-vous</NavLink></p>
            </div>
        </div>
    );
};

export default AdminPageNavigation;