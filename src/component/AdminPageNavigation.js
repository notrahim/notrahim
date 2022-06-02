import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../style/component/_adminPageNavigation.scss"
import {useDispatch, useSelector} from 'react-redux';
import { userDisconnect } from '../redux/actions/action';

const AdminPageNavigation = () => {
    const dispatch = useDispatch()

    const state = useState(state => state)

    const navigate = useNavigate()

    const disconnect =()=>{
        if(!state.isLogin) navigate("/accueil")
        dispatch(userDisconnect())
    }


    return (
        <>
            <div className="adminPageNavContainer">
                <div className="adminPageNav">
                    <NavLink to="/accueil"><img src="./img/logo.png" alt="logo" /></NavLink>
                    <button onClick={disconnect}>Se Déconnecter</button>
                </div>
            </div>
        </>
    );
};

export default AdminPageNavigation;