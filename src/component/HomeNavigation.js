import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavigation = (props) => {
    const urlValue = props.urlValue;

    function changeBtn(btn){
        console.log(urlValue);
        if(urlValue === undefined) return "btnNav ";
        else if(urlValue.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") === btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")){
            return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") + " clicked"
        }
        return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")  
    }

    return (
        <div className="nav">
            <div className="navLeft">
                <img src="./img/logo.png" alt="logo" />
                <nav>
                    <NavLink to="/" className={changeBtn("accueil")}>Accueil</NavLink>
                    <NavLink to="/about" className={changeBtn("Nos préstations")}>Nos préstations</NavLink>
                </nav>
            </div>
            <div className="navRight">
                <button>Isoler mon <br/>logement</button>
                <NavLink to="/" className="signIn">
                    <div className="imgContainer">
                        <img src="./img/SVG/login.svg" alt="connection" />   
                    </div>
                    <p>espace client</p>
                </NavLink>
            </div>
        </div>
    );
};

export default HomeNavigation;