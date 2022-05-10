import React from 'react';
import { useState, useEffect, createRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import { showAllProspect } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';
import ProspectArray from '../component/ProspectArray';

/**
 * It's a function that returns a div that contains a NavLink to the home page, a h1 that contains a
 * greeting to the admin and a ProspectArray component
 */
const AdminPage = () => {

    /* It's a hook that allows us to access the state of the store. */
    const state = useSelector(state => state )

    /* It's a hook that allows us to dispatch an action to the store. */
    const dispatch = useDispatch()

    /* It's a hook that allows us to create a reference to a DOM element. */
    const title = createRef()

    /* It's a hook that allows us to navigate to a specific page. */
    const navigate = useNavigate()

    /* It's a hook that allows us to perform side effects in a functional component. */
    useEffect(()=>{ 
        document.title = `TeraBois | Tableau de bord`;
        whatDoIDo()
        gsap.from(title.current, {
            opacity: 0,
            x: 120,
            duration: 1,
            ease: 'power4.inOut',
        })
    },[])

    /**
     * If the user is not logged in, he is redirected to the home page, otherwise, the function
     * showAllProspect is called
     */
    const whatDoIDo = () => {
        if(!state.isLogin){
            navigate("/accueil")
        }else{
            dispatch(showAllProspect())
        }
    }

    /* It's a function that returns a div that contains a NavLink to the home page, a h1 that contains
    a
    greeting to the admin and a ProspectArray component */
    return (
        <div style={{minHeight:"100vh"}}>
            <NavLink to="/accueil" >
                <h1 ref={title}>Bonjour {upperCaseFirstLatter(state.admin.username)} !</h1>
            </NavLink>
            <ProspectArray />
        </div>
    );
};

export default AdminPage;