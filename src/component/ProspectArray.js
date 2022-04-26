import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, createRef } from 'react';
import ProspectModal from './ProspectModal';

let initNbUserOne = 0;
let initNbUserTwo = 10;
let zoomProspect;

const ProspectArray = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const [showUser, setShowUser] = useState([]);
    const [totalUser, setTotalUser] = useState(null)
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        addStatePropspect();
    }, [state.prospect[0]])

    //Play function when the showUser is not empty
    useEffect(() => {
        if (showUser !== []) {
            // console.log(showUser);
            // console.log(totalUser);
        }
    }, [showUser])

    //Initialisation of the all state 
    const addStatePropspect = async () => {
        if (state.prospect[0] === undefined) {
            await state.prospect[0]
            dispatch({ type: "loadingProspectArray" })
        }
        else {
            await dispatch({ type: "notLoadingProspectArray" })
            await setTotalUser(state.prospect[0].length);
            await setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo));
        }
    }

    const addUserInArray = e => {
        e.preventDefault();
        initNbUserOne = initNbUserOne + 10;
        initNbUserTwo = initNbUserTwo + 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    const removeUserInArray = e => {
        e.preventDefault()
        initNbUserOne = initNbUserOne - 10;
        initNbUserTwo = initNbUserTwo - 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    const nextKeyPress = (e) => {
        if (e.key === "n") console.log("ok");
    }

    const showPrevButton = () => {
        return (
            <button className="prev" onClick={removeUserInArray}>Precedent</button>
        )
    }

    const showNextButton = () => {
        return (
            <button className="next" onClick={addUserInArray} onKeyPress={nextKeyPress}>Suivant</button>
        )
    }

    const showProspect = (prospect) => {
        setShowModal(true);
        zoomProspect = prospect;
    }

    const hiddenProspect = (e) => {
        console.log(e);
        // setShowModal(e);
        // zoomProspect = "";
    }

    document.onkeydown = (e) => {
        if (e.key === "ArrowRight") {
            if (initNbUserTwo < totalUser) {
                initNbUserOne = initNbUserOne + 10;
                initNbUserTwo = initNbUserTwo + 10;
                setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
            }
        }
        if (e.key === "ArrowLeft") {
            if (initNbUserOne > 0) {
                initNbUserOne = initNbUserOne - 10;
                initNbUserTwo = initNbUserTwo - 10;
                setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
            }
        }
    }

    return (
        <>  
            {showModal ? <ProspectModal data={zoomProspect} closeModal={setShowModal}/> : null}
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
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.name}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.email}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{"0" + prospect.attributes.phone}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.codePostal}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.prestation}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.habitation}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.age}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.surface}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.date}</td>
                            <td onClick={()=>showProspect(prospect.attributes)}>{prospect.attributes.newslaters === true ? "Oui" : "Non"}</td>
                        </tr>
                    )) : <tr><td>Aucun propspect</td></tr>}
                </tbody>
            </table>
            <div className="Pagination">
                {initNbUserOne > 0 ? showPrevButton() : null}
                {initNbUserTwo < totalUser ? showNextButton() : null}
            </div>
        </>
    );
};

export default ProspectArray;