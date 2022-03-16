import React from 'react';
import { NavLink } from 'react-router-dom';
import LandingPageNavigation from '../component/LandingPageNavigation';
//TODO Creer une modal pour qu'a l'ouverture de la page, la partie main soit entièrement visible 
//BUG Je pense que la solution est d'iterer la navbar au scroll
const LandingPage = () => {
    return (
        <>
            <header>
                <LandingPageNavigation />
            </header>
            <main className="landingPage"> 
                <div className="globalContainer">
                    <div className="leftContainer">
                        <div className="container">
                            <div className="whereAreMe">
                                <NavLink to="/">Terabois</NavLink>
                                <img src="./img/SVG/chevron-right-black.png" alt="chevron right"/>
                                <p>Isolation</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer"></div>
                </div>
            </main>
        </>
    );
};

export default LandingPage;