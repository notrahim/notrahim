import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminConnectionFormulaire = () => {
    return (
        <div className="formContainer">
            <h1>Connexion</h1>      
            <form>
                <label className="email">
                    <input placeholder="Email"/>
                </label>
                <label className="passeword">
                    <input placeholder="Mot de passe"/>
                </label>
                <button type="submit">Se Connecter</button>
                <NavLink to="/">Retour</NavLink>
            </form>
        </div>
    );
};

export default AdminConnectionFormulaire;