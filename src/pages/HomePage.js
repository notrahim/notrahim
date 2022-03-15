import React from 'react';
import HomeNavigation from '../component/HomeNavigation';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../component/DropDown';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';

const HomePage = () => {
    
    const sectionOne = ()=>{
    }

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
                        <ImageAndText img="./img/photo-iti.jpeg" alt="isolation interieur" title="Spécialiste de l’économie d’énergie " text= "Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventor aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis." />
                    </section>
                    <button className="btnDeux">En savoir plus</button>
                </div>    
                <section className="smallBottomContainer">
                    <DropDown question="Pourquoi bien isoler son logement ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Les aides de l'état " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Comment ça fonctionne ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Qui sommes-nous ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <div className="btnContainer">
                        <button className="btnUn">Isoler mon logement</button>
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
                            <div className="endContainer"><button>Isoler mon <br/>logement</button></div>
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