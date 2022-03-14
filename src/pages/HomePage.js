import React from 'react';
import HomeNavigation from '../component/HomeNavigation';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faHandshake, faFeatherPointed, faPhone, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../component/DropDown';

const HomePage = () => {
    return (
        <>
            <header>
                <HomeNavigation urlValue='accueil' />
            </header>
            <main className="homePage">
                <p className="littleConnect">Déjà un projet avec nous ? <br/> <NavLink to='/'>Connectez-vous</NavLink></p>
                <button className="btnUn">Isoler mon logement</button>
                <h1>Maison TeraBois</h1>
                <p className="description">“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                    Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut 
                    perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”
                </p>
                <section className="specialiste">
                    <img src="./img/photo-iti.jpeg" alt="isolation interieur" />
                    <div className="specialisteRightContainer">
                        <h3>Spécialiste de l’économie d’énergie </h3>
                        <p>Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore
                            aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. 
                            Sed porro error aut inventore minima vel architecto velit ea accusantium officiis.</p>
                    </div>
                </section>
                <button className="btnDeux">En savoir plus</button>
                <section className="bottomContainer">
                    <h2>Pourquoi bien faire isoler son logement ?</h2>
                    <div className="avantageContainer">
                        <div className="checkUn check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Factures réduites</span>
                        </div>
                        <div className="checkDeux check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Gain en confort</span>
                        </div>
                        <div className="checkTrois check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Maison plus saine</span>
                        </div>
                        <div className="checkQuatre check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Participation à l'éffort écologique</span>
                        </div>
                            <div className="endContainer"><button>Isoler mon <br/>logement</button></div>
                    </div>
                    <DropDown text="Bonjour" question="Pourquoi bien isoler son logement ?" />
                    <div className="garantiesContainer">
                        <div className="garanties">
                            <img src="./img/SVG/1x/shield.png" alt="shield"/>
                            <p>Garantie décénale</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/hand.png" alt="hand"/>
                            <p>Devis gratuit <br/> en 24/48h</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/feather.png" alt="hand"/>
                            <p>Données 100% <br/> sécurisées</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/phone.png" alt="hand"/>
                            <p>SAV 7/7j</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;