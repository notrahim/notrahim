import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { userConnect } from '../redux/actions/action';

const AdminConnectionFormulaire = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");

    const tcheckAdminValue = (e)=>{
        e.preventDefault()
        // alert(email + " " +password)
        const admin = {
            "identifier": email,
            "password": password
        }
        dispatch(userConnect(admin))
    }

    return (
        <div className="formContainer">
            <h1>Connexion</h1>      
            <form >
                <label className="email">
                    <input id="email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label className="passeword">
                    <input id="passeword" type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setPassWord(e.target.value)} />
                </label>
                <button onClick={tcheckAdminValue}>Se Connecter</button>
                <NavLink to="/">Retour</NavLink>
            </form>
        </div>
    );
};

export default AdminConnectionFormulaire;