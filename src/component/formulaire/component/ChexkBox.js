import React from 'react';
import { useState } from 'react';
import Card from './Card';

const ChexkBox = () => {
    const [valid, setValid] = useState(false)
    const [error, setError] = useState(false)
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [clickedThree, setClickedThree] = useState(false)
    const [clickedFour, setClickedFour] = useState(false)

    return (
        <>
            <div className="cardContainer">
                <div onClick={()=>setClickedOne(!clickedOne)} className={clickedOne ? "card selected" : "card"}>
                    <Card img="isolation-in.svg" title="ITI (Isolation Murs Interieurs)"/>
                </div>  
                <div onClick={()=>setClickedTwo(!clickedTwo)} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="isolation-ext.svg" title="ITE (Isolation Murs Extérieurs)"/>
                </div>  
                <div onClick={()=>setClickedThree(!clickedThree)} className={clickedThree ? "card selected" : "card"}>
                    <Card img="Isolation-combles.svg" title="Isolation Des Combles"/>
                </div>  
                <div onClick={()=>setClickedFour(!clickedFour)} className={clickedFour ? "card selected" : "card"}>
                    <Card img="Isolation-toiture.svg" title="Isolation Sous-Rampant(Toiture)"/>
                </div>  
            </div>
        </>
    )
}

export default ChexkBox;