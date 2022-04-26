import React from 'react';
import { useState, useEffect, createRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import { showAllProspect } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';
import ProspectArray from '../component/ProspectArray';

const AdminPage = () => {
    const state = useSelector(state => state )
    const dispatch = useDispatch()
    const title = createRef()

    const navigate = useNavigate()

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

    const whatDoIDo = () => {
        if(!state.isLogin){
            navigate("/accueil")
        }else{
            dispatch(showAllProspect())
        }
    }

    return (
        <div style={{minHeight:"100vh"}}>
            <NavLink to="/accueil" >
                <h1 ref={title}>Bonjour {upperCaseFirstLatter(state.admin.username)} !</h1>
                <ProspectArray />
            </NavLink>
        </div>
    );
};

export default AdminPage;