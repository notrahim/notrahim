import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, addUser, isNotLoading} from '../../../redux/actions/action';

const FormulaireFinal = () => {
    const regexName =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regexCodePostal = /[0-9]{5}/g;
    const regexPhone = /^\d{10}$/;
    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [errorName, setErrorName] = useState(false)
    const [nameValue, setNameValue] = useState(null)

    const [errorPrenom, setErrorPrenom] = useState(false)
    const [prenomValue, setPrenomValue] = useState(null)

    const [errorCodePostal, setErrorCodePostal] = useState(false)
    const [codePostalValue, setCodePostalValue] = useState(null)

    const [errorPhone, setErrorPhone] = useState(false)
    const [phoneValue, setPhoneValue] = useState(null)

    const [errorMail, setErrorMail] = useState(false)
    const [mailValue, setMailValue] = useState(null)

    const [errorRGPD, setErrorRGPD] = useState(false)
    const [rgpdValue, setRgpdValue] = useState(false)

    const [newsLaterBool, setNewsLaterNews] = useState(false)

    const [globalError, setGlobalError] = useState(false)

    const globalValue = nameValue && prenomValue && codePostalValue && phoneValue && mailValue && rgpdValue;

    const dispatch = useDispatch()
    const state= useSelector(state=>state)

    //Validation des data saisi via les regex et gestion des erreurs en fontion
    const checkBtn = async (e)=>{
        e.preventDefault()

        //CheckNom
        if(nameValue !== null && regexName.test(nameValue)){
            setErrorName(false);
        }else {
            setErrorName(true)
        }

        //CheckPrenom
        if(prenomValue !== null && regexName.test(prenomValue)){
            setErrorPrenom(false);
        }else {
            setErrorPrenom(true)
        }
        
        //CheckCodePostal
        if(codePostalValue !== null && regexCodePostal.test(codePostalValue)){
            setErrorCodePostal(false);
        }else {
            setErrorCodePostal(true)
        }

        //CheckPhone
        if(phoneValue !== null && regexPhone.test(phoneValue)){
            setErrorPhone(false);
        }else {
            setErrorPhone(true)
        }

        //CheckMail
        if(mailValue !== null && regexMail.test(mailValue)){
            setErrorMail(false);
        }else {
            setErrorMail(true)
        }

        // Check RGPD
        if(rgpdValue){
            setErrorRGPD(false);
        }else {
            setErrorRGPD(true)
        }

        //validation du contener global
        if(globalValue){
                setGlobalError(false)
                if(state.name === null || state.prenom === null || state.mail === null || state.tel === null || state.codePostal === null){
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

                    dispatch(isLoading())
                }
        }else{
            setGlobalError(true)
        }
    }    

    function changeRGP () {
        setRgpdValue(!rgpdValue);
    }

    function changeNewsLatter () {
        setNewsLaterNews(!newsLaterBool);
    }

    return (
        <>
            <div className={globalError? "error finalFormContainer" : "finalFormContainer"}>
                <div className={errorName ? "nom error": "nom"}>
                    <label>
                        Nom*
                        <input type="text" id="name" name="name" placeholder="Doe" value={nameValue} onChange={(e)=>setNameValue(e.target.value)} required></input>
                        {errorName ? <span>Veuillez saisir un nom valide</span> : null}
                    </label>
                </div>
                <div className={errorPrenom ? "prenom error": "prenom"}>
                    <label>
                        Prenom*
                        <input type="text" id="prenom" name="prenom" placeholder="John" onChange={(e)=>setPrenomValue(e.target.value)} required></input>
                        {errorPrenom ? <span>Veuillez saisir un prénom valide</span> : null}
                    </label>
                </div>
                <div className={errorCodePostal ? "codePostal error": "codePostal"}>
                    <label>
                        Code postal*
                        <input type="number" id="codePostal" name="codePostal" placeholder="33750" minLength="5" maxLength="5" onChange={(e)=>setCodePostalValue(e.target.value)} required></input>
                        {errorCodePostal ? <span>Veuillez saisir un code postal valide</span> : null}
                    </label>
                </div>
                <div className={errorPhone ? "phone error": "phone"}>
                    <label>
                        Téléphone*
                        <input type="tel" id="phone" name="phone" placeholder="0635487596" minLength="10" maxLength="10" onChange={(e)=>setPhoneValue(e.target.value)} required></input>
                        {errorPhone ? <span>Veuillez saisir un numéro de téléphone valide</span>:null}
                    </label>
                </div>
                <div className={errorMail ? "email error": "email"}>
                    <label>
                        Email*
                        <input type="mail" id="mail" name="mail" placeholder="johndoe@exemple.com" onChange={(e)=>setMailValue(e.target.value)} required></input>
                        {errorMail ? <span>Veuillez saisir un email valide</span> : null}
                    </label>
                </div>
                <div className="checkbox">
                    <p>En savoir plus sur la gestion de vos données et de vos droits</p>
                    <p>Les données collèctés peuvent également nous premettre de vous addresser par email des publicités.<br/> Pour le permettre veuillez cocher les cases ci-dessous: </p>
                    <div className={errorRGPD ? "rgpd error": "rgpd"}>
                        <label>
                            <input onChange={changeRGP} type="checkbox" id="one" name="one" required/>
                            Être contacter par l’éditeur du site dans le cadre de ma demande*
                        </label>
                        {errorRGPD ? <span>Veuillez accepter nos conditions RGPD pour continuer</span>:null}
                    </div>
                    <div className="newsLater">
                        <label>
                            <input onChange={changeNewsLatter} type="checkbox" id="two" name="two"/>
                            Recevoir des offres commerciales par voie éléctronique
                        </label>
                    </div>
                </div>
            </div>
            <div className="btnContainer">
                <button className={globalError ? "error btnUn" : "btnUn"} onClick={checkBtn} >Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez saisir vos coordonnées</div>
            </div>
        </>
    );
};

export default FormulaireFinal;