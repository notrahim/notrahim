import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect, createRef } from 'react';

const ProspectArray = (props) => {
    const state = useSelector(state => state);
    const array = props.array;

    useEffect(() => {
        addStatePropspect();
    }, [])

    const addStatePropspect = async ()=>{
        if(state.propsect === undefined) await state.prospect[0]
    }

    return (
        <table className="propsectArrayContainer">
            <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Code Postal</th>
                <th>Préstation</th>
                <th>Type d'habitation</th>
                <th>Age du logement</th>
                <th>Surface habitable</th>
                <th>Date d'intervention</th>
                <th>News Laters</th>
            </tr>

            {state.prospect[0] !== undefined ? state.prospect[0].map(prospect => (
                <tr key={prospect.id}>
                    <td>{prospect.attributes.name}</td>
                    <td>{prospect.attributes.email}</td>
                    <td>{prospect.attributes.phone}</td>
                    <td>{prospect.attributes.codePostal}</td>
                    <td>{prospect.attributes.prestation}</td>
                    <td>{prospect.attributes.habitation}</td>
                    <td>{prospect.attributes.age}</td>
                    <td>{prospect.attributes.surface}</td>
                    <td>{prospect.attributes.date}</td>
                    <td>{prospect.attributes.newslaters}</td>
                </tr>
            )) : <tr><td>Aucun propspect</td></tr>}

            {/* <tr>
                <td>Carmen</td>
                <td>33 ans</td>
                <td>Espagne</td>
            </tr>
            <tr>
                <td>Michelle</td>
                <td>26 ans</td>
                <td>États-Unis</td>
            </tr> */}
        </table>
    );
};

export default ProspectArray;