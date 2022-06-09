import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { mofificationOfComments } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

/* It's a variable that will be used to store the value of the input. */
let addCommentValue;

/**
 * It's a function that returns a div with a button that closes the modal, a div with a class of
 * prospectContainer that contains a div with a class of prospectContainer_name that contains a p and
 * an h4, a div with a class of prospectContainer_email that contains a p and an h4, a div with a class
 * of prospectContainer_codePostal that contains a p and an h4, a div with a class of
 * prospectContainer_phone that contains a p and an h4, a div with a class of
 * prospectContainer_prestation that contains a p and an h4, a div with a class of
 * prospectContainer_type that contains a p and an h4, a div with a class of prospectContainer_age that
 * contains a p and an h4, a div with a class of prospectContainer_surface that contains a p and an h4,
 * a div with a class of prospectContainer_date that contains a p and an h
 * @param props - the props that are passed to the component
 * @returns A modal with all the information of the prospect
 */
const ProspectModal = (props) => {

    /* It's a hook that allows us to store the value of the input in a variable. */
    const [commentValue, setCommentValue] = useState("")

    /* It's a variable that stores the data that is passed to the component. */
    const data = props.data;

    /* It's a variable that stores the id of the prospect that is passed to the component. */
    const id = props.id

    // console.log(data.comments);

    /**
     * The function takes an event as an argument, prevents the default action, and sets the comment
     * value to the value of the event target
     * @param e - the event object
     */
    const changeValue = (e)=>{
        e.preventDefault()
        setCommentValue(e.target.value);
        addCommentValue = e.target.value
    }

    const closeElement = (e)=>{
        props.closeModal(false)
    }   



    /* It's a function that returns a div with a button that closes the modal, a div with a class of
     * prospectContainer that contains a div with a class of prospectContainer_name that contains a
    p and
     * an h4, a div with a class of prospectContainer_email that contains a p and an h4, a div with
    a class
     * of prospectContainer_codePostal that contains a p and an h4, a div with a class of
     * prospectContainer_phone that contains a p and an h4, a div with a class of
     * prospectContainer_prestation that contains a p and an h4, a div with a class of
     * prospectContainer_type that contains a p and an h4, a div with a class of
    prospectContainer_age that
     * contains a p and an h4, a div with a class of prospectContainer_surface that contains a p and
    an h4,
     * a div with a class of prospectContainer_date that contains a p and an h
     * @param props - the props that are passed to the component
     * @returns A modal with all */
    return (
        <div className="prospectModal">
            {/* <button onClick={() => props.closeModal(false)}>close</button> */}
            <FontAwesomeIcon icon={faXmark} onClick={closeElement}/>
            <div className="prospectContainer">
                <h2>Prospect</h2>
                <div className='content'>
                    <h2>Coordonnées</h2>
                    <div className='basic'>
                        <div className="prospectContainer_name">
                            <h4>Nom:</h4>
                            <p>{upperCaseFirstLatter(data.name)}</p>
                        </div>
                        <div className="prospectContainer_name">
                            <h4>Prenom:</h4>
                            <p>{upperCaseFirstLatter(data.prenom)}</p>
                        </div>
                        <div className="prospectContainer_phone">
                            <h4>Téléphone:</h4>
                            <a title="Appeler" href={"tel:0"+data.phone}>{"0"+data.phone}</a>
                        </div>
                        <div className="prospectContainer_email">
                            <h4>Email:</h4>
                            <a title='Envoyer un email' href={"mailto:"+data.email+"?subject=[important]Votre projet d'isolation avec TeraBois"}>{data.email}</a>
                        </div>
                        <div className="prospectContainer_codePostal">
                            <h4>Code Postal:</h4>
                            <p>{data.codePostal}</p>
                        </div>
                    </div>
                    <h2>Description</h2>
                    <div className='technique'>
                        <div className="prospectContainer_prestation">
                            <h4>Type de présatation:</h4>
                            <p>{upperCaseFirstLatter(data.prestation)}</p>
                        </div>
                        <div className="prospectContainer_type">
                            <h4>Type d'Habitation:</h4>
                            <p>{upperCaseFirstLatter(data.habitation)}</p>
                        </div>
                        <div className="prospectContainer_age">
                            <h4>Âge du logement:</h4>
                            <p>{data.age}</p>
                        </div>
                        <div className="prospectContainer_surface">
                            <h4>Surface du logement:</h4>
                            <p>{upperCaseFirstLatter(data.surface)}</p>
                        </div>
                        <div className="prospectContainer_date">
                            <h4>Date d'intervention:</h4>
                            <p>{data.date}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="prospectContainer_comment">
                    <p>Commentaire:</p>
                    <input value={data.comments !== null ? data.comments:addCommentValue} placeholder="Ajouter un commantaire" onChange={changeValue} />
                    {addCommentValue !== undefined ?<button onClick={()=>mofificationOfComments(id, addCommentValue)}>Ajouter</button>: null}
                </div> */}
            </div>
        </div>
    );
};

export default ProspectModal;