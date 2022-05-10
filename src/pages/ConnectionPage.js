import React from 'react';
import { useSelector } from 'react-redux';
import AdminConnectionFormulaire from '../component/AdminConnectionFormulaire';
import HomeNavigation from '../component/HomeNavigation';
import {useEffect} from 'react';

const ConnectionPage = () => {

    /* It's a hook that allows us to access the state of the store. */
    const state = useSelector(state => state)

    /* It's a hook that allows us to execute a function when the component is mounted. */
    useEffect(()=>{
        document.title="TeraBois | Connexion"
    })

    /**
     * It returns a div with a className of loader and an h2 tag with the text "Loader"
     * @returns A function that returns a div with a className of loader and an h2 tag with the text
     * "Loader"
     */
    const loader = ()=>{
        return(
            <div className="loader">
                <h2>Loader</h2>
            </div>
        )
    }

    /* It's a function that returns a div with a className of loader and an h2 tag with the text
     * "Loader" */
    return (
        <>
            {state.isLogin ? loader() : null}
            <header className="homePageHeader">
                <HomeNavigation urlValue='connection' />
            </header>
            <main className="connectionPage" >
                <AdminConnectionFormulaire />
            </main>
        </>
    );
};

export default ConnectionPage;