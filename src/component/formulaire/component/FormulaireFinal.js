import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, addUser, isNotLoading, prospectValid } from '../../../redux/actions/action';


/**
 * Formulaire component
 * It's a function that returns a JSX element
 * @returns It's a JSX element.
 */
const FormulaireFinal = () => {

    /* It's a regex to check if the name is valid. */
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    /* It's a regex to check if the code postal is valid. */
    const regexCodePostal = /[0-9]{5}/g;

    /* It's a regex to check if the phone number is valid. */
    const regexPhone = /^\d{10}$/;

    /* It's a regex to check if the mail is valid. */
    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /* It's a hook to manage the state of the component. */
    const [errorName, setErrorName] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [nameValue, setNameValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorPrenom, setErrorPrenom] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [prenomValue, setPrenomValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorCodePostal, setErrorCodePostal] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [codePostalValue, setCodePostalValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorPhone, setErrorPhone] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [phoneValue, setPhoneValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorMail, setErrorMail] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [mailValue, setMailValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorRGPD, setErrorRGPD] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [rgpdValue, setRgpdValue] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [newsLaterBool, setNewsLaterNews] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a boolean that check if all the input are filled. */
    const globalValue = nameValue && prenomValue && codePostalValue && phoneValue && mailValue && rgpdValue;

    /* It's a hook that allow us to dispatch an action. */
    const dispatch = useDispatch()

    /* It's a hook that allow us to get the state of the store. */
    const state = useSelector(state => state)

    /**
     * It checks the form and sends the data to the database.
     * @param e - event
     */
    const checkBtn = async (e) => {
        e.preventDefault()

        //CheckNom
        if (nameValue !== null && regexName.test(nameValue)) {
            setErrorName(false);
        } else {
            setErrorName(true)
        }

        //CheckPrenom
        if (prenomValue !== null && regexName.test(prenomValue)) {
            setErrorPrenom(false);
        } else {
            setErrorPrenom(true)
        }

        //CheckCodePostal
        if (codePostalValue !== null && regexCodePostal.test(codePostalValue)) {
            setErrorCodePostal(false);
        } else {
            setErrorCodePostal(true)
        }

        //CheckPhone
        if (phoneValue !== null && regexPhone.test(phoneValue)) {
            setErrorPhone(false);
        } else {
            setErrorPhone(true)
        }

        //CheckMail
        if (mailValue !== null && regexMail.test(mailValue)) {
            setErrorMail(false);
        } else {
            setErrorMail(true)
        }

        // Check RGPD
        if (rgpdValue) {
            setErrorRGPD(false);
        } else {
            setErrorRGPD(true)
        }

        //validation du contener global
        if (globalValue) {
            setGlobalError(false)
            if (state.name === null || state.prenom === null || state.mail === null || state.tel === null || state.codePostal === null) {
                await dispatch(addUser({
                    "name": nameValue,
                    "prenom": prenomValue,
                    "email": mailValue,
                    "phone": phoneValue,
                    "prestation": state.prestation.toString(),
                    "habitation": state.typeLogement.toString(),
                    "age": state.age.toString(),
                    "surface": state.surface.toString(),
                    "date": state.realisation.toString(),
                    "codePostal": codePostalValue,
                    "rgpd": rgpdValue,
                    "newslaters": newsLaterBool
                }));

                dispatch(prospectValid())
            }
        } else {
            setGlobalError(true)
        }
    }

    /**
     * It changes the value of the rgpdValue variable
     */
    function changeRGP() {
        setRgpdValue(!rgpdValue);
    }

    /**
     * It changes the value of the newsLaterBool variable.
     */
    function changeNewsLatter() {
        setNewsLaterNews(!newsLaterBool);
    }

    /* It's a function that returns a JSX element. */
    return (
        <>
            <div className={globalError ? "error finalFormContainer" : "finalFormContainer"}>
                <div className={errorName ? "input nom error" : "input nom"}>
                    <label>
                        Nom*
                        <input className={errorName ? "errorInput" : null} type="text" id="name" name="name" placeholder="Doe" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required></input>
                        {/* {errorName ? <span>Veuillez saisir un nom valide</span> : null} */}
                    </label>
                </div>
                <div className={errorPrenom ? "input prenom error" : "input prenom"}>
                    <label>
                        Prenom*
                        <input className={errorPrenom ? "errorInput" : null} type="text" id="prenom" name="prenom" placeholder="John" onChange={(e) => setPrenomValue(e.target.value)} required></input>
                        {/* {errorPrenom ? <span>Veuillez saisir un prénom valide</span> : null} */}
                    </label>
                </div>
                <div className={errorCodePostal ? "input codePostal error" : "input codePostal"}>
                    <label>
                        Code postal*
                        <input className={errorCodePostal ? "errorInput" : null} type="number" id="codePostal" name="codePostal" placeholder="33750" minLength="5" maxLength="5" onChange={(e) => setCodePostalValue(e.target.value)} required></input>
                        {/* {errorCodePostal ? <span>Veuillez saisir un code postal valide</span> : null} */}
                    </label>
                </div>
                <div className={errorPhone ? "input phone error" : "input phone"}>
                    <label>
                        Téléphone*
                        <input className={errorPhone ? "errorInput" : null} type="tel" id="phone" name="phone" placeholder="0635487596" minLength="10" maxLength="10" onChange={(e) => setPhoneValue(e.target.value)} required></input>
                        {/* {errorPhone ? <span>Veuillez saisir un numéro de téléphone valide</span> : null} */}
                    </label>
                </div>
                <div className={errorMail ? "input email error" : "input email"}>
                    <label>
                        Email*
                        <input className={errorMail ? "errorInput" : null} type="mail" id="mail" name="mail" placeholder="johndoe@exemple.com" onChange={(e) => setMailValue(e.target.value)} required></input>
                        {/* {errorMail ? <span>Veuillez saisir un email valide</span> : null} */}
                    </label>
                </div>
                <div className="checkbox">
                    <p>En savoir plus sur la gestion de vos données et de vos droits</p>
                    <p>Les données collèctés peuvent également nous premettre de vous addresser par email des publicités.<br /> Pour le permettre veuillez cocher les cases ci-dessous: </p>
                    <div className={errorRGPD ? "rgpd error" : "rgpd"}>
                        <label>
                            <input className='editeur' onChange={changeRGP} type="checkbox" id="one" name="one" required />
                            *Être contacter par l’éditeur du site dans le cadre de ma demande*<br/>
                        </label>
                        {errorRGPD ? <span className='errorMessage'>Veuillez accepter nos conditions RGPD pour continuer</span> : null}
                    </div>
                    <div className="newsLater">
                        <label>
                            <input onChange={changeNewsLatter} type="checkbox" id="two" name="two" />
                            Recevoir des offres commerciales par voie éléctronique
                        </label>
                    </div>
                </div>
            </div>
            <div className="btnContainer">
                <button className="btnUn" onClick={checkBtn} >Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez saisir vos coordonnées</div>
            </div>
        </>
    );
};

export default FormulaireFinal;