import React from 'react';
import ProgressLign from './component/ProgressLign';
import { useState } from 'react';
import ChexkBox from './component/ChexkBox';

const Formulaire = () => {
    const [progress, setProgress]=useState(20);
    const [thisValue, setThisValue]=useState(1)

    const sub = (e)=>{
        e.preventDefault()
    }

    const boxOne = () =>{
        if(thisValue === 1) return(<ChexkBox/>)
    }

    return (
        <div className="globalFormContainer">
            <button onClick={()=>setThisValue(thisValue-1)} className="returnBtn">
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className="container">
                <h2>Vous souhaitez :</h2>
                <ProgressLign progress={progress} />
            </div>
            <form onSubmit={sub}>
                {/* <p>{thisValue}</p> */}
                {boxOne()}
            </form>
            <div className="btnContainer">
                <button onClick={()=>setThisValue(thisValue+1)} className="btnUn">Suivant</button>
            </div>
        </div>
    );
};

export default Formulaire;