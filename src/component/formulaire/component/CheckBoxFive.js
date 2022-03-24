import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addWhen, removWhen } from '../../../redux/actions/action';

const CheckBoxFive = () => {
    const [clickedOne, setClickedOne] = useState(false);
    const [clickedTwo, setClickedTwo] = useState(false);
    const [clickedThree, setClickedThree] = useState(false);
    const [clickedFour, setClickedFour] = useState(false);
    const [when, setWhen] = useState([]);
    const dispatch = useDispatch();
    const globalOrValue = clickedOne || clickedTwo || clickedThree || clickedFour ;

    const valueOne = "Le plus tôt possible";
    const valueTwo = "Dans les 3 mois";
    const valueThree = "Dans l'année";
    const valueFour = "Je ne sais pas";

    const returnValue = async (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    setClickedTwo(false)
                    setClickedThree(false)
                    setClickedFour(false)
                    if(when.length > -1){
                        if(!when.includes(valueOne) && !when.includes(valueTwo) && !when.includes(valueThree) && !when.includes(valueFour) ){
                            setWhen([...when, valueOne])
                        }else if (!when.includes(valueOne) && when.includes(valueTwo)){
                            when.splice(when.indexOf(valueTwo), 1)
                            setWhen([...when, valueOne])
                        }else if (!when.includes(valueOne) || when.includes(valueThree)){
                            when.splice(when.indexOf(valueThree), 1)
                            setWhen([...when, valueOne])
                        }else if (!when.includes(valueOne) || when.includes(valueFour)){
                            when.splice(when.indexOf(valueFour), 1)
                            setWhen([...when, valueOne])
                        }
                    }
                    break;
                 
                case "two":
                    setClickedOne(false)
                    setClickedTwo(!clickedOne)
                    setClickedThree(false)
                    setClickedFour(false)
                    if(when.length > -1){
                        if(!when.includes(valueOne) && !when.includes(valueTwo) && !when.includes(valueThree) && !when.includes(valueFour) ){
                            setWhen([...when, valueTwo])
                        }else if (!when.includes(valueTwo) && when.includes(valueOne)){
                            when.splice(when.indexOf(valueOne), 1)
                            setWhen([...when, valueTwo])
                        }else if (!when.includes(valueTwo) || when.includes(valueThree)){
                            when.splice(when.indexOf(valueThree), 1)
                            setWhen([...when, valueTwo])
                        }else if (!when.includes(valueTwo) || when.includes(valueFour)){
                            when.splice(when.indexOf(valueFour), 1)
                            setWhen([...when, valueTwo])
                        }
                    }
                    break;
            
                case "three":
                    setClickedOne(false)
                    setClickedTwo(false)
                    setClickedThree(!clickedOne)
                    setClickedFour(false)
                    if(when.length > -1){
                        if(!when.includes(valueOne) && !when.includes(valueTwo) && !when.includes(valueThree) && !when.includes(valueFour) ){
                            setWhen([...when, valueThree])
                        }else if (!when.includes(valueThree) && when.includes(valueOne)){
                            when.splice(when.indexOf(valueOne), 1)
                            setWhen([...when, valueThree])
                        }else if (!when.includes(valueThree) || when.includes(valueTwo)){
                            when.splice(when.indexOf(valueTwo), 1)
                            setWhen([...when, valueThree])
                        }else if (!when.includes(valueThree) || when.includes(valueFour)){
                            when.splice(when.indexOf(valueFour), 1)
                            setWhen([...when, valueThree])
                        }
                    }
                    break; 
            
                case "four":
                    setClickedOne(false)
                    setClickedTwo(false)
                    setClickedThree(false)
                    setClickedFour(!clickedOne)
                    if(when.length > -1){
                        if(!when.includes(valueOne) && !when.includes(valueTwo) && !when.includes(valueThree) && !when.includes(valueFour) ){
                            setWhen([...when, valueFour])
                        }else if (!when.includes(valueFour) && when.includes(valueOne)){
                            when.splice(when.indexOf(valueOne), 1)
                            setWhen([...when, valueFour])
                        }else if (!when.includes(valueFour) || when.includes(valueTwo)){
                            when.splice(when.indexOf(valueTwo), 1)
                            setWhen([...when, valueFour])
                        }else if (!when.includes(valueFour) || when.includes(valueThree)){
                            when.splice(when.indexOf(valueThree), 1)
                            setWhen([...when, valueFour])
                        }
                    }
                    break; 

                default: console.log('error');
                    break;
            }
        }, 20)
    }

    useEffect(()=>{
        dispatch(removWhen())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addWhen(when))
    }, [globalOrValue])

    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue) dispatch(addValueInArray())
        
        if(globalOrValue) dispatch(addWhen(when))
       
    }

    return (
        <>
            <div className="cardContainer">
                <div onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueOne}/>
                </div>  
                <div onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueTwo}/>
                </div>   
                <div onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueThree} />
                </div>   
                <div onClick={()=>returnValue("four")} className={clickedFour? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueFour} />
                </div>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className="btnUn">Suivant</button>
            </div>
        </>
    );
};

export default CheckBoxFive;