import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, createRef } from 'react';

const ProspectArray = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const [showUser, setShowUser] = useState([]);

    const [totalUser, setTotalUser] = useState(null)

    useEffect(() => {
        addStatePropspect();
    }, [state.prospect[0]])

    //Play function when the showUser is not empty
    useEffect(()=>{
        if(showUser !== []){
            console.log(showUser);
            console.log(totalUser);
        }
    }, [showUser])
    
    //Initialisation of the all state 
    const addStatePropspect = async () => {
        if(state.prospect[0] === undefined){
            await state.prospect[0]
            dispatch({type: "loadingProspectArray"})
        } 
        else{
            console.log(state.prospect[0]);
            await dispatch({type: "notLoadingProspectArray"})
            await setTotalUser(state.prospect[0].length);
            await setShowUser(state.prospect[0].slice(0, 10));
        } 
        
    }

    return (
        <table className="propsectArrayContainer">
            <thead>
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
            </thead>

            <tbody>
                {state.prospect[0] !== undefined ? state.prospect[0].map(prospect => (
                    <tr key={prospect.id}>
                        <td>{prospect.attributes.name}</td>
                        <td>{prospect.attributes.email}</td>
                        <td>{"0" + prospect.attributes.phone}</td>
                        <td>{prospect.attributes.codePostal}</td>
                        <td>{prospect.attributes.prestation}</td>
                        <td>{prospect.attributes.habitation}</td>
                        <td>{prospect.attributes.age}</td>
                        <td>{prospect.attributes.surface}</td>
                        <td>{prospect.attributes.date}</td>
                        <td>{prospect.attributes.newslaters === true ? "Oui" : "Non"}</td>
                    </tr>
                )) : <tr><td>Aucun propspect</td></tr>}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
};

export default ProspectArray;