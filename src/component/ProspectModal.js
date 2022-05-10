import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { mofificationOfComments } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';

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
            <button onClick={() => props.closeModal(false)}>close</button>
            <div className="prospectContainer">
                <div className="prospectContainer_name">
                    <p>Nom:</p>
                    <h4>{upperCaseFirstLatter(data.name)}</h4>
                </div>
                <div className="prospectContainer_email">
                    <p>Email:</p>
                    <h4>{data.email}</h4>
                </div>
                <div className="prospectContainer_codePostal">
                    <p>Code Postal:</p>
                    <h4>{data.codePostal}</h4>
                </div>
                <div className="prospectContainer_phone">
                    <p>Téléphone:</p>
                    <h4>{"0"+data.phone}</h4>
                </div>
                <div className="prospectContainer_prestation">
                    <p>Type de présatation:</p>
                    <h4>{upperCaseFirstLatter(data.prestation)}</h4>
                </div>
                <div className="prospectContainer_type">
                    <p>Type d'Habitation:</p>
                    <h4>{upperCaseFirstLatter(data.habitation)}</h4>
                </div>
                <div className="prospectContainer_age">
                    <p>Âge du logement:</p>
                    <h4>{data.age}</h4>
                </div>
                <div className="prospectContainer_surface">
                    <p>Surface du logement:</p>
                    <h4>{upperCaseFirstLatter(data.surface)}</h4>
                </div>
                <div className="prospectContainer_date">
                    <p>Date d'intervention:</p>
                    <h4>{data.date}</h4>
                </div>
                <div className="prospectContainer_comment">
                    <p>Commentaire:</p>
                    <input placeholder="Ajouter un commantaire" value={commentValue} onChange={changeValue} />
                    {addCommentValue !== undefined ?<button onClick={()=>mofificationOfComments(id, addCommentValue)}>Ajouter</button>: null}
                </div>
            </div>
        </div>
    );
};

export default ProspectModal;