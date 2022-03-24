import React from 'react';
import ProgressLign from './component/ProgressLign';
import { useSelector, useDispatch } from 'react-redux';
import ChexkBox from './component/ChexkBox';
import { nextArrayPrestation, removeValueInArray } from '../../redux/actions/action';
import CheckBoxTwo from './component/CheckBoxTwo';

const Formulaire = () => {
    const maxArray = 8;
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function calculProgressBar(state, maxProgress){
        return (100 * state)/maxProgress
    }

    const sub = (e)=>{
        e.preventDefault()
    }

    const showThisStates = ()=>{
        console.log(state);
        dispatch(nextArrayPrestation(!state.isLoading))
    }

    const boxOne = () =>{
        if(state.valueOfArray === 1) return(<ChexkBox/>)
        if(state.valueOfArray === 2) return(<CheckBoxTwo/>)
    }

    return (
        <div className="globalFormContainer">
            <button onClick={()=>dispatch(removeValueInArray())} className="returnBtn">
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className="question">
                <h2>Vous souhaitez isoler :</h2>
                <ProgressLign progress={calculProgressBar(state.valueOfArray, maxArray)} />
            </div>
            <form onSubmit={sub}>
                {boxOne()}
            </form>
        </div>
    );
};

export default Formulaire;