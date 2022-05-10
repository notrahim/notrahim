import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { isNotLoading, userConnect } from '../redux/actions/action';

/**
 * It's a function that returns a JSX element
 * @returns It's a function that returns a JSX element.
 */
const AdminConnectionFormulaire = () => {
    /* It's a hook that allows you to dispatch actions to the Redux store. */
    const dispatch = useDispatch()
    
    /* It's a hook that allows you to navigate between routes in your application. */
    const navigate = useNavigate()
    
    /* It's a hook that allows you to access the Redux store state. */
    const state = useSelector(state => state)
    
    /* It's a hook that allows you to navigate between routes in your application. */
    if(state.isLogin){
        navigate("/admin")
    }

    /* It's a regular expression that allows you to check if the email is valid. */
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


    /* It's a hook that allows you to manage the state of your component. */
    const [email, setEmail] = useState("");

    /* It's a hook that allows you to manage the state of your component. */
    const [password, setPassWord] = useState("");

    /* It's a hook that allows you to manage the state of your component. */
    const [error, setError] = useState(false)

    /**
     * It checks if the email is valid and if it is, it sends the data to the server
     * @param e - the event
     */
    const tcheckAdminValue = (e)=>{
        e.preventDefault()
        if(regexMail.test(email)){
            setError(false)
            const admin = {
                "identifier": email,
                "password": password
            }
            dispatch(userConnect(admin))
        }else{
            setError(true)
            dispatch(isNotLoading())
        }
        if(state.isLogin){
            navigate("/admin")
        }
    }

    /* It's a function that returns a JSX element. */
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
                {error ? <span className="error">Mail ou mot de passe invalide</span> : null}
            </form>
        </div>
    );
};

export default AdminConnectionFormulaire;