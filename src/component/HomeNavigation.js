import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

/**
 * It returns a div with a className of "nav" which contains two divs, one with a className of
 * "navLeft" and the other with a className of "navRight". The first div contains a NavLink to the home
 * page, an image of the logo, and a nav element with two NavLinks to the home page and the about page.
 * The second div contains a Button component and a NavLink to the connection page
 * @param props - the props that are passed to the component
 * @returns A div with a class of nav.
 */
const HomeNavigation = (props) => {
    /* Getting the value of the urlValue prop that is passed to the component. */
    const urlValue = props.urlValue;

    /* Creating a state variable called inClientSpace and a function called setInClientSpace. */
    const [inClientSpace, setInClientSpace] = useState(false)

    /**
     * If the urlValue is undefined, return "btnNav ". If the urlValue is equal to the button's name,
     * return "btnNav " + the button's name + " clicked". Otherwise, return "btnNav " + the button's
     * name
     * @param btn - the name of the button
     * @returns a string.
     */
    function changeBtn(btn){
        if(urlValue === undefined) return "btnNav ";
        else if(urlValue.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") === btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")){
            return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e") + " clicked"
        }
        return "btnNav " + btn.split(" ").join("").toLowerCase().replace(/[éèê]/g,"e")  
    }

    /**
     * If the user is in the client space, return the class "space clicked" otherwise return the class
     * "space"
     * @returns a string.
     */
    const changeUserSpaceClass = () =>{
        return inClientSpace ? "space clicked" : "space"
    }

    /* Returning a div with a className of "nav" which contains two divs, one with a className of
     * "navLeft" and the other with a className of "navRight". The first div contains a NavLink to
    the home
     * page, an image of the logo, and a nav element with two NavLinks to the home page and the
    about page.
     * The second div contains a Button component and a NavLink to the connection page */
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