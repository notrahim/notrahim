import React from 'react';
import { useState } from 'react';
import ProgressLign from './component/ProgressLign';
import { useSelector, useDispatch } from 'react-redux';
import ChexkBox from './component/ChexkBox';
import { nextArrayPrestation, removeValueInArray } from '../../redux/actions/action';
import CheckBoxTwo from './component/CheckBoxTwo';
import CheckBoxThree from './component/CheckBoxThree';

const Formulaire = () => {
    const maxArray = 8;
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("Bonjour")
    const [addClass, setAddClass] = useState("")

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
        // setAddClass("")
    }, 10)

    function calculProgressBar(state, maxProgress){
        return (100 * state)/maxProgress
    }

    const sub = (e)=>{
        e.preventDefault()
    }

    const showThisStates = ()=>{
        dispatch(nextArrayPrestation(!state.isLoading))
    }

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
    }

    return (
        <div className="globalFormContainer">
            <button onClick={()=>dispatch(removeValueInArray())} className={"returnBtn "+ addClass}>
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className="question">
                <h2>{title}</h2>
                <ProgressLign progress={calculProgressBar(state.valueOfArray, maxArray)} />
            </div>
            <form onSubmit={sub}>
                {boxOne()}
            </form>
        </div>
    );
};

export default Formulaire;