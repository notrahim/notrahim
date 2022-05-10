import React from 'react';
import HomeNavigation from '../component/HomeNavigation';


/**
 * It returns a JSX element that contains a header with a HomeNavigation component and a main element
 * with a h1 element
 * @returns A React component that renders a header and main element.
 */
const NotFound = () => {
    
    /* Returning a JSX element that contains a header with a HomeNavigation component and a main
    element
     * with a h1 element */
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