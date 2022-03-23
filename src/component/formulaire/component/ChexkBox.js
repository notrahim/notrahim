import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { nextArray } from '../../../redux/actions/action';

const ChexkBox = () => {
    const [value, setValue] = useState('non')
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [clickedThree, setClickedThree] = useState(false)
    const [clickedFour, setClickedFour] = useState(false)

    const globalStateArray = useSelector(state => state.arrayOne)
    const dispatch = useDispatch();
    // console.log(clickedOne);

    const returnValue = ()=>{
        setClickedOne(!clickedOne)
        dispatch(nextArray(clickedOne))
    }

    return (
        <>
            <div className="cardContainer">
                <div onClick={returnValue} className={clickedOne ? "card selected" : "card"}>
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