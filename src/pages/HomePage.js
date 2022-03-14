import React from 'react';
import HomeNavigation from '../component/HomeNavigation';

const HomePage = () => {
    return (
        <>
            <header>
                <HomeNavigation urlValue='accueil' />
            </header>
            <main className="homePage">
                <h1>Maison TeraBois</h1>
                <p>“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                    Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut 
                    perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”
                </p>
            </main>
        </>
    );
};

export default HomePage;