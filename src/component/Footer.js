import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className='footerContainerLeft'>
                    <NavLink to="/">Conditions générales de vente</NavLink>
                    <NavLink to="/">Politiques de confidentialité</NavLink>
                    <NavLink to="/" className="signIn">
                        <div className="imgContainer">
                            <img src="./img/SVG/login.svg" alt="connection" />   
                        </div>
                        <p>espace client</p>
                    </NavLink>
                </div>
                <img src="./img/logo.png" alt="logo" />
            </div>
        </footer>
    );
};

export default Footer;