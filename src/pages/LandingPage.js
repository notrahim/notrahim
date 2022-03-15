import React from 'react';
import LandingPageNavigation from '../component/LandingPageNavigation';

const LandingPage = () => {
    return (
        <>
            <header>
                <LandingPageNavigation />
            </header>
            <main className="landingPage"></main>
        </>
    );
};

export default LandingPage;