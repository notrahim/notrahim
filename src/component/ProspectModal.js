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
            <FontAwesomeIcon icon={faXmark} onClick={() => props.closeModal(false)}/>
            
            <div className="prospectContainer">
                <div className="prospectContainer_name">
                    <h3>Nom:</h3>
                    <p>{upperCaseFirstLatter(data.name)}</p>
                </div>
                <div className="prospectContainer_email">
                    <h3>Email:</h3>
                    <p>{data.email}</p>
                </div>
                <div className="prospectContainer_codePostal">
                    <h3>Code Postal:</h3>
                    <p>{data.codePostal}</p>
                </div>
                <div className="prospectContainer_phone">
                    <h3>Téléphone:</h3>
                    <p>{"0"+data.phone}</p>
                </div>
                <div className="prospectContainer_prestation">
                    <h3>Type de présatation:</h3>
                    <p>{upperCaseFirstLatter(data.prestation)}</p>
                </div>
                <div className="prospectContainer_type">
                    <h3>Type d'Habitation:</h3>
                    <p>{upperCaseFirstLatter(data.habitation)}</p>
                </div>
                <div className="prospectContainer_age">
                    <h3>Âge du logement:</h3>
                    <p>{data.age}</p>
                </div>
                <div className="prospectContainer_surface">
                    <h3>Surface du logement:</h3>
                    <p>{upperCaseFirstLatter(data.surface)}</p>
                </div>
                <div className="prospectContainer_date">
                    <h3>Date d'intervention:</h3>
                    <p>{data.date}</p>
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