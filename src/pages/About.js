import React from 'react';
import HomeNavigation from '../component/HomeNavigation';

const About = () => {
    return (
        <>
            <header>
                <HomeNavigation urlValue='about' />
            </header>
            <main className="about"></main>
        </>
    );
};

export default About;