import React from 'react';
import HomeNavigation from '../component/HomeNavigation';

const HomePage = () => {
    return (
        <>
            <header>
                <HomeNavigation urlValue='accueil' />
            </header>
            <main className="homePage">
                <button className="btnUn">Isoler mon logement</button>
                <h1>Maison TeraBois</h1>
                <p className="description">“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                    Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut 
                    perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”
                </p>
                <div className="specialiste">
                    <img src="./img/photo-iti.jpeg" alt="isolation interieur" />
                    <div className="specialisteRightContainer">
                        <h2>Spécialiste de l’économie d’énergie </h2>
                        <p>Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore
                            aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. 
                            Sed porro error aut inventore minima vel architecto velit ea accusantium officiis.</p>
                    </div>
                </div>
                <button className="btnDeux">En savoir plus</button>
            </main>
        </>
    );
};

export default HomePage;