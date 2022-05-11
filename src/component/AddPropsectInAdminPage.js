import React from 'react';
import { useState } from 'react';
import SelectDropDown from './SelectDropDown';


const AddPropsectInAdminPage = () => {

    /* It's a regex to check if the name is valid. */
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    /* It's a regex to check if the code postal is valid. */
    const regexCodePostal = /[0-9]{5}/g;

    /* It's a regex to check if the phone number is valid. */
    const regexPhone = /^\d{10}$/;

    /* It's a regex to check if the mail is valid. */
    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /* Creating a state variable called nameValue and a function to update it called setNameValue. */
    const [nameValue, setNameValue]=useState(null);

    /* Creating a state variable called errorName and a function to update it called setErrorName. */
    const [errorName, setErrorName]=useState(false);

    /* Creating a state variable called prenomValue and a function to update it called setPrenomValue. */
    const [prenomValue, setPrenomValue]=useState(null);

    /* Creating a state variable called errorPrenom and a function to update it called setErrorPrenom. */
    const [errorPrenom, setErrorPrenom]=useState(false);

    /* Creating a state variable called prenomValue and a function to update it called setPrenomValue. */
    const [emailValue, setEmailValue]=useState(null);

    /* Creating a state variable called errorPrenom and a function to update it called setErrorPrenom. */
    const [errorEmail, setErrorEmail]=useState(false);

    /* It's a hook to manage the state of the component. */
    const [errorPhone, setErrorPhone] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [phoneValue, setPhoneValue] = useState(null)

    /* It's a hook to manage the state of the component. */
    const [errorCodePostal, setErrorCodePostal] = useState(false)

    /* It's a hook to manage the state of the component. */
    const [codePostalValue, setCodePostalValue] = useState(null)

    return (
        <div className='addPropsectInAdminPage'>
            <form>
                <div className={errorName ? "nom error" : "nom"}>
                    <label>
                        Nom*
                        <input type="text" id="name" name="name" placeholder="Doe" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required></input>
                        {errorName ? <span>Veuillez saisir un nom valide</span> : null}
                    </label>
                </div>
                <div className={errorPrenom ? "prenom error" : "prenom"}>
                    <label>
                        Prenom*
                        <input type="text" id="name" name="fist-name" placeholder="John" value={prenomValue} onChange={(e) => setPrenomValue(e.target.value)} required></input>
                        {errorPrenom ? <span>Veuillez saisir un prenom valide</span> : null}
                    </label>
                </div>
                <div className={errorPrenom ? "email error" : "email"}>
                    <label>
                        Email*
                        <input type="email" id="name" name="email" placeholder="johndoe@exemple.fr" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required></input>
                        {errorEmail ? <span>Veuillez saisir un prenom valide</span> : null}
                    </label>
                </div>
                <div className={errorPhone ? "phone error" : "phone"}>
                    <label>
                        Téléphone*
                        <input type="tel" id="phone" name="phone" placeholder="0635487596" minLength="10" maxLength="10" onChange={(e) => setPhoneValue(e.target.value)} required></input>
                        {errorPhone ? <span>Veuillez saisir un numéro de téléphone valide</span> : null}
                    </label>
                </div>
                <div className={errorCodePostal ? "codePostal error" : "codePostal"}>
                    <label>
                        Code postal*
                        <input type="number" id="codePostal" name="codePostal" placeholder="33750" minLength="5" maxLength="5" onChange={(e) => setCodePostalValue(e.target.value)} required></input>
                        {errorCodePostal ? <span>Veuillez saisir un code postal valide</span> : null}
                    </label>
                </div>
                <SelectDropDown list={["Ite", "Iti", "Isolation des combles", "Isolation sous toiture"]} addClass="prestations"/>
            </form>
        </div>
    );
};

export default AddPropsectInAdminPage;