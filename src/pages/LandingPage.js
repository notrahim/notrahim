import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../component/DropDown';
import Formulaire from '../component/formulaire/Formulaire';
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
                    <section className="leftContainer">
                        <div className="container">
                            <div className="whereAreMe">
                                <NavLink to="/">Terabois</NavLink>
                                <img src="./img/SVG/chevron-right-black.png" alt="chevron right"/>
                                <p>Isolation</p>
                            </div>
                            <div className="textContainer">
                                <div className="title">
                                    <h1>Isolation</h1>
                                    <p>Jusqu'à <span>10000€</span> d'aide</p>
                                </div>
                                <div className="question">
                                    <DropDown 
                                    question="Pourquoi bien isoler son logement ?"
                                    text="“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”"
                                    />
                                    <DropDown 
                                    question="Pourquoi bien isoler son logement ?"
                                    text="“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”"
                                    />
                                    <DropDown 
                                    question="Pourquoi bien isoler son logement ?"
                                    text="“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”"
                                    />
                                    <DropDown 
                                    question="Pourquoi bien isoler son logement ?"
                                    text="“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="rightContainer">
                        <Formulaire />
                        <div className="containerBottom"></div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default LandingPage;