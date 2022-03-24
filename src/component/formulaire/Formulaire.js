import React from 'react';
import ProgressLign from './component/ProgressLign';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChexkBox from './component/ChexkBox';
import { nextArrayPrestation, removeValueInArray } from '../../redux/actions/action';

const Formulaire = () => {
    const [progress, setProgress]=useState(20);
    const [thisValue, setThisValue]=useState(1)
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const sub = (e)=>{
        e.preventDefault()
    }

    const showThisStates = ()=>{
        console.log(state);
        dispatch(nextArrayPrestation(!state.isLoading))
    }

    const boxOne = () =>{
        if(state.valueOfArray === 1) return(<ChexkBox/>)
    }

    return (
        <div className="globalFormContainer">
            <button onClick={()=>dispatch(removeValueInArray())} className="returnBtn">
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className="question">
                <h2>Vous souhaitez isoler :</h2>
                <ProgressLign progress={progress} />
            </div>
            <form onSubmit={sub}>
                {boxOne()}
            </form>
            {/* <div className="btnContainer">
                <button onClick={checkBtn} className="btnUn">Suivant</button>
            </div> */}
        </div>
    );
};

export default Formulaire;