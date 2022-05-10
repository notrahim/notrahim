import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../component/DropDown';
import Formulaire from '../component/formulaire/Formulaire';
import LandingPageNavigation from '../component/LandingPageNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { prospectIsNotValid, removeProspect } from '../redux/actions/action';
import { useEffect, useState } from 'react';
import { handleTitle, whatPage } from '../utils/titleManager';
//TODO Creer une modal pour qu'a l'ouverture de la page, la partie main soit entièrement visible 
//BUG Je pense que la solution est d'iterer la navbar au scroll

const LandingPage = () => {

    /* It's a hook that allows you to dispatch actions to the Redux store. */
    const dispatch = useDispatch()

    /**
     * It dispatches two actions, one to remove the prospect from the store, and the other to set the
     * prospect's validity to false
     */
    const closeModal = () => {
        dispatch(removeProspect())
        dispatch(prospectIsNotValid())
    }

    /* It's a function that allows to change the title of the page depending on the page you are on. */
    whatPage()

    /**
     * It shows a modal when the user clicks on the submit button.
     * @returns The modal is being returned.
     */
    const showModal = () => {
        return (
            <div className="modalValide">
                <div className="Container">
                    <NavLink to="/accueil" className="btnUn"><FontAwesomeIcon icon={faXmark} onClick={closeModal} /></NavLink>
                    <h3>Merci, <br /> nous vous contacterons dans les 24/48h.</h3>
                </div>
            </div>
        )
    }

    /* It's a hook that allows you to subscribe to Redux store updates. */
    const prospectValid = useSelector(state => state.prospectValid);

    /* It's a function that allows to change the title of the page depending on the page you are on. */
    return (
        <>
            {prospectValid ? showModal() : null}
            <header>
                <LandingPageNavigation />
            </header>
            <main className="landingPage" >
                <div className="globalContainer">
                    <section className="leftContainer">
                        <div className="container">
                            <div className="whereAreMe">
                                <NavLink to="/">Terabois</NavLink>
                                <img src="./img/SVG/chevron-right-black.png" alt="chevron right" />
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
                        <div className="container">
                            <div className="topMobil">
                                <div className="connection">
                                    <p>Déjà un projet avec nous ?</p>
                                    <NavLink to="/">Connectez-vous</NavLink>
                                </div>
                                <h2>Jusqu'à <span>10000€</span> d'aide</h2>
                            </div>
                            <Formulaire />
                            <div className="containerBottom">
                                <h3>+ de <span>10</span> ans <br /> d'experience</h3>
                                <h3>RDV en <br /><span>24</span>/<span>48h</span></h3>
                                <h3>+ de 3000 <br />réalisations</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default LandingPage;