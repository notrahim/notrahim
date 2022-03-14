import React from 'react';
import HomeNavigation from '../component/HomeNavigation';


const NotFound = () => {
    return (
        <>
            <header>
                <HomeNavigation url="" />
            </header>
            <main className="notFound">
                <h1>Page 404</h1>
            </main>
        </>
    );
};

export default NotFound;