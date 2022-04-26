import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { mofificationOfComments } from '../redux/actions/action';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';

let addCommentValue;

const ProspectModal = (props) => {
    const [commentValue, setCommentValue] = useState("")

    const data = props.data;
    const id = props.id

    const changeValue = (e)=>{
        e.preventDefault()
        setCommentValue(e.target.value);
        addCommentValue = e.target.value
    }

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