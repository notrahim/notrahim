import React from 'react';
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
                        <div className="container"></div>
                    </div>
                    <div className="rightContainer"></div>
                </div>
            </main>
        </>
    );
};

export default LandingPage;