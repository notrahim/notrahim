import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, createRef } from 'react';

let initNbUserOne = 0;
let initNbUserTwo = 10;

const ProspectArray = () => {
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
            // console.log(showUser);
            // console.log(totalUser);
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
            await setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo));
        }
    }
    
    const addUserInArray = e=>{
        e.preventDefault();
        initNbUserOne = initNbUserOne + 10;
        initNbUserTwo = initNbUserTwo + 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    const removeUserInArray = e=>{
        e.preventDefault()
        initNbUserOne = initNbUserOne - 10;
        initNbUserTwo = initNbUserTwo - 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    const showPrevButton = ()=>{
        return (
            <button className="prev" onClick={removeUserInArray}>Precedent</button>
        )
    }

    const showNextButton = ()=>{
        return (
            <button className="next" onClick={addUserInArray}>Suivant</button>
        )
    }

    const showProspect = (e)=>{
        e.preventDefault()
    }

    return (
        <>
            <h3>Contacts total: <span>{totalUser}</span></h3>
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
                    {state.prospect[0] !== undefined ? showUser.map(prospect => (
                        <tr key={prospect.id}>
                            <td onClick={showProspect}>{prospect.attributes.name}</td>
                            <td onClick={showProspect}>{prospect.attributes.email}</td>
                            <td onClick={showProspect}>{"0" + prospect.attributes.phone}</td>
                            <td onClick={showProspect}>{prospect.attributes.codePostal}</td>
                            <td onClick={showProspect}>{prospect.attributes.prestation}</td>
                            <td onClick={showProspect}>{prospect.attributes.habitation}</td>
                            <td onClick={showProspect}>{prospect.attributes.age}</td>
                            <td onClick={showProspect}>{prospect.attributes.surface}</td>
                            <td onClick={showProspect}>{prospect.attributes.date}</td>
                            <td onClick={showProspect}>{prospect.attributes.newslaters === true ? "Oui" : "Non"}</td>
                        </tr>
                    )) : <tr><td>Aucun propspect</td></tr>}
                </tbody>
                <tfoot>
                        <div className="Pagination">
                            {initNbUserOne > 0 ? showPrevButton() : null}
                            {initNbUserTwo < totalUser ? showNextButton() : null}
                        </div>
                </tfoot>
            </table>
        </>
    );
};

export default ProspectArray;