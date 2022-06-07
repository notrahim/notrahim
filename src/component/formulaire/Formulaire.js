import React from 'react';
import { useState } from 'react';
import ProgressLign from './component/ProgressLign';
import { useSelector, useDispatch } from 'react-redux';
import ChexkBox from './component/ChexkBox';
import { nextArrayPrestation, removeValueInArray } from '../../redux/actions/action';
import CheckBoxTwo from './component/CheckBoxTwo';
import CheckBoxThree from './component/CheckBoxThree';
import CheckBoxFour from './component/CheckBoxFour';
import CheckBoxFive from './component/CheckBoxFive';
import FormulaireFinal from './component/FormulaireFinal';

/**
 * It's a function that returns a div with a button, a div with a h2 and a progress bar, and a form
 * with a checkbox
 * @returns A component that is a form.
 */
const Formulaire = () => {

    /* It's a constant that is used to calculate the progress bar. */
    const maxArray = 8;

    /* It's a hook that is used to get the state of the store. */
    const state = useSelector(state => state)

    /* It's a hook that is used to dispatch an action. */
    const dispatch = useDispatch()

    /* It's a hook that is used to set the title of the component. */
    const [title, setTitle] = useState("Bonjour")

    /* It's a hook that is used to set the class of the button. */
    const [addClass, setAddClass] = useState("")

    /* It's a function that is used to change the title of the component. */
    setTimeout(()=>{
        if(state.valueOfArray === 1){
            setAddClass("hidden")
            setTitle('Vous souhaitez isoler:')
        } else if(state.valueOfArray === 2){
            setAddClass("")
            setTitle("Vos travaux concernent:")
        } else if(state.valueOfArray === 3){
            setTitle("Âge de votre logement:")
        } else if(state.valueOfArray === 4){
            setTitle("La surface habitable:")
        } else if(state.valueOfArray === 5){
            setTitle("Vous souhaitez réaliser ces travaux:")
        } else if(state.valueOfArray === 6){
            setTitle("Prenons rendez-vous")
        } 
    }, 10)

    /**
     * It takes two arguments, state and maxProgress, and returns the percentage of the progress bar
     * @param state - the current state of the progress bar
     * @param maxProgress - The maximum value of the progress bar.
     * @returns The percentage of the progress bar.
     */
    function calculProgressBar(state, maxProgress){
        return (100 * state)/maxProgress
    }

   /**
    * The function sub is called when the form is submitted. The function prevents the default action
    * of the form submission
    * @param e - the event object
    */
    const sub = (e)=>{
        e.preventDefault()
    }

    /**
     * A function that is used to change the state of the application.
     */
    const showThisStates = ()=>{
        dispatch(nextArrayPrestation(!state.isLoading))
    }

    /**
     * It returns a component depending on the value of the state
     * @returns The function boxOne is returning the value of the state.valueOfArray.
     */
    const boxOne = () =>{
        if(state.valueOfArray === 1) {
            return(<ChexkBox/>)
        }
        if(state.valueOfArray === 2){
            return(<CheckBoxTwo/>)
        } 
        if(state.valueOfArray === 3){
            return(<CheckBoxThree />)
        }
        if(state.valueOfArray === 4){
            return(<CheckBoxFour />)
        }
        if(state.valueOfArray === 5){
            return(<CheckBoxFive />)
        }
        if(state.valueOfArray === 6){
            return(<FormulaireFinal />)
        }
    }

    /* It's a function that returns a JSX element. */
    return (
        <div className={title === "Prenons rendez-vous" ? "lastTitle globalFormContainer" : "globalFormContainer"}>
            <button onClick={()=>dispatch(removeValueInArray())} className={"returnBtn "+ addClass}>
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className={title === "Prenons rendez-vous" ? "question lastQuestion" : "question"}>
                <h2>{title}</h2>
                <ProgressLign progress={calculProgressBar(state.valueOfArray, maxArray)} />
            </div>
            <button onClick={()=>dispatch(removeValueInArray())} className={"returnBtnDeux "+ addClass}>
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <form onSubmit={sub}>
                {boxOne()}
            </form>
        </div>
    );
};

export default Formulaire;