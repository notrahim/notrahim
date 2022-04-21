import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { userConnect } from '../redux/actions/action';

const AdminConnectionFormulaire = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const state = useSelector(state => state)

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");

    const [error, setError] = useState(false)

    const tcheckAdminValue = (e)=>{
        setError(false)
        e.preventDefault()
        if(regexMail.test(email)){
            const admin = {
                "identifier": email,
                "password": password
            }
            dispatch(userConnect(admin))
        }else{
            setError(true)
        }
        if(state.isLogin){
            navigate("/")
        } 
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