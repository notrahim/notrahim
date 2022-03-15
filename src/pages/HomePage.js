import React from 'react';
import HomeNavigation from '../component/HomeNavigation';
import { NavLink } from 'react-router-dom';
import Button from "../component/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../component/DropDown';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';

const HomePage = () => {

    return (
        <>
            <header>
                <HomeNavigation urlValue='accueil' />
            </header>
            <main className="homePage">
                <div className="containerTop">
                    <p className="littleConnect">Déjà un projet avec nous ? <br/> <NavLink to='/'>Connectez-vous</NavLink></p>
                    <TitleAndText title="Maison TeraBois" text='“Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                        Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut 
                        perferendis reprehenderit qui beatae fuga a aspernatur excepturi.”'/>
                    <button className="btnUn">Isoler mon logement</button>
                    <section className="specialiste">
                        <ImageAndText sens="left" img="./img/photo-iti.jpeg" alt="isolation interieur" title="Spécialiste de l’économie d’énergie " text= "Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventor aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis." />

                    </section>
                    <NavLink to="/about" className="btnUn">En savoir plus</NavLink>
                </div>    
                <section className="smallBottomContainer">
                    <DropDown question="Pourquoi bien isoler son logement ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Les aides de l'état " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Comment ça fonctionne ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Qui sommes-nous ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <div className="btnContainer">
                        <Button value="Isoler mon logement" link="/nous-contacter"/>
                    </div>
                </section>
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
                            <div className="endContainer"><NavLink to="/nous-contacter" className="btnUn">Isoler mon <br/>logement</NavLink></div>
                    </div>
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