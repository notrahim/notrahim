import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import ProspectModal from './ProspectModal';
import { upperCaseFirstLatter } from '../utils/upperCaseFirstLatter';
import { numberOfPage } from '../utils/numberOfPage';

/* It's a variable that is used to slice the array of users to be displayed. */
let initNbUserOne = 0;

/* It's a variable that is used to slice the array of users to be displayed. */
let initNbUserTwo = 10;

/* It's a variable that is used to pass the prospect object to the ProspectModal component. */
let zoomProspect;

/* It's a variable that is used to pass the prospect object to the ProspectModal component. */
let idProspect;

/**
 * It's a function that returns a table with the prospect data, and a pagination component
 * @returns The ProspectArray component is being returned.
 */
const ProspectArray = () => {
    
    /* It's a hook that is used to get the state of the store. */
    const state = useSelector(state => state);
    
    /* It's a hook that is used to dispatch an action to the store. */
    const dispatch = useDispatch()

    /* It's a hook that is used to set the state of the showUser variable. */
    const [showUser, setShowUser] = useState([]);
    
    /* It's a hook that is used to set the state of the totalUser variable. */
    const [totalUser, setTotalUser] = useState(null)
    
    /* It's a hook that is used to set the state of the showModal variable. */
    const [showModal, setShowModal] = useState(false);
    
    /* It's a hook that is used to set the state of the showNumberOfPage variable. */
    const [showNumberOfPage, setShowNumberOfPage] = useState(null)
    
    /* It's a hook that is used to set the state of the pagination variable. */
    const [pagination, setPagination] = useState({})

    /* It's a hook that is called after the first render. */
    useEffect(() => {
        addStatePropspect();
    }, [state.prospect[0]])

    /* It checks if the totalUser variable is not null, if it isn't, it calls the numberOfPage function
    with the totalUser variable as a parameter, and then it loops through the showNumberOfPage
    variable and sets the pagination variable with the value of the i variable. */
    useEffect(() => {
        if (totalUser !== null) {
            setShowNumberOfPage(numberOfPage(totalUser));
            for (let i = 0; i < showNumberOfPage; i++) {
                setPagination({ ...pagination, i })
            }
        }
    }, [totalUser])

    /**
     * It creates a pagination component.
     * @returns the value of the variable pagination.
     */
    const creatPagination = () => {
        console.log(pagination);
        return (
            <div>ok</div>
        )
    }

    /**
     * It checks if the state.prospect[0] is undefined, if it is, it sets the
     * state.loadingProspectArray to true, if it isn't, it sets the state.loadingProspectArray to false
     * and sets the totalUser and showUser variables
     */
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

    /**
     * It takes an event as a parameter, prevents the default behavior of the event, increments the
     * value of the variables initNbUserOne and initNbUserTwo by 10, and then calls the setShowUser
     * function with the value of the state.prospect[0] array sliced from the initNbUserOne variable to
     * the initNbUserTwo variable
     */
    const addUserInArray = e => {
        e.preventDefault();
        initNbUserOne = initNbUserOne + 10;
        initNbUserTwo = initNbUserTwo + 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    /**
     * It removes 10 users from the array of users to be displayed
     */
    const removeUserInArray = e => {
        e.preventDefault()
        initNbUserOne = initNbUserOne - 10;
        initNbUserTwo = initNbUserTwo - 10;
        setShowUser(state.prospect[0].slice(initNbUserOne, initNbUserTwo))
    }

    /**
     * If the key pressed is 'n', then log 'ok' to the console.
     * @param e - the event object
     */
    const nextKeyPress = (e) => {
        if (e.key === "n") console.log("ok");
    }

    /**
     * It returns a button with the className "prev" and an onClick event that calls the
     * removeUserInArray function
     * @returns A button with the className of "prev" and an onClick event that calls the
     * removeUserInArray function.
     */
    const showPrevButton = () => {
        return (
            <button className="prev" onClick={removeUserInArray}>Precedent</button>
        )
    }

    /**
     * It returns a button with the className "next", which calls the addUserInArray function when
     * clicked, and the nextKeyPress function when a key is pressed
     * @returns A button with the className "next" and two event listeners.
     */
    const showNextButton = () => {
        return (
            <button className="next" onClick={addUserInArray} onKeyPress={nextKeyPress}>Suivant</button>
        )
    }

    /**
     * It sets the state of the modal to true, and sets the zoomProspect and idProspect to the prospect
     * and id that was passed in
     * @param prospect - the prospect object that is being passed to the modal
     * @param id - the id of the prospect
     */
    const showProspect = (prospect, id) => {
        setShowModal(true);
        zoomProspect = prospect;
        idProspect = id;
    }

    /* It's an event listener that listens for the keydown event, and if the key pressed is the right
    arrow, it increments the value of the variables initNbUserOne and initNbUserTwo by 10, and then
    calls the setShowUser function with the value of the state.prospect[0] array sliced from the
    initNbUserOne variable to the initNbUserTwo variable. If the key pressed is the left arrow, it
    decrements the value of the variables initNbUserOne and initNbUserTwo by 10, and then calls the
    setShowUser function with the value of the state.prospect[0] array sliced from the initNbUserOne
    variable to the initNbUserTwo variable. */
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

    /* It's a ternary operator that checks if the showModal variable is true, if it is, it returns the
    ProspectModal component, if it isn't, it returns null. */
    return (
        <>
            {showModal ? <ProspectModal data={zoomProspect} id={idProspect} closeModal={setShowModal} /> : null}
            <h3>Contacts total: <span>{totalUser}</span></h3>
            <div className="numberOfPageContainer">
                {pagination !== [] ? creatPagination() : null}
            </div>
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
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.name)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{prospect.attributes.email}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{"0" + prospect.attributes.phone}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{prospect.attributes.codePostal}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.prestation)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.habitation)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.age)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.surface)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{upperCaseFirstLatter(prospect.attributes.date)}</td>
                            <td onClick={() => showProspect(prospect.attributes, prospect.id)}>{prospect.attributes.newslaters === true ? "Oui" : "Non"}</td>
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