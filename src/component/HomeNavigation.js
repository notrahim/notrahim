import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const HomeNavigation = (props) => {
    const urlValue = props.urlValue;

    const [inClientSpace, setInClientSpace] = useState(false)

    function changeBtn(btn){
        if(urlValue === undefined) return "btnNav ";
        else if(urlValue.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") === btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")){
            return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") + " clicked"
        }
        return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")  
    }

    const changeUserSpaceClass = () =>{
        return inClientSpace ? "space clicked" : "space"
    }

    return (
        <div className="nav">
            <div className="navLeft">
                <NavLink to="/accueil"><img src="./img/logo.png" alt="logo" /></NavLink>
                <nav>
                    <NavLink to="/accueil" className={changeBtn("accueil")}>Accueil</NavLink>
                    <NavLink to="/about" className={changeBtn("Nos préstations")}>Nos préstations</NavLink>
                </nav>
            </div>
            <div className="navRight">
                <Button link="/nous-contacter" value="Isoler mon logement" addClass="node"/>
                <NavLink to="/connection" className="signIn" onClick={()=>setInClientSpace(true)}>
                    <div className="imgContainer" >
                        <img src="./img/SVG/login.svg" alt="connection" />   
                    </div>
                    <p className={changeBtn("connection")}>espace client</p>
                </NavLink>
            </div>
        </div>
    );
};

export default HomeNavigation;