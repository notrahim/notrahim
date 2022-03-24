import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addMeasure, removMeasure } from '../../../redux/actions/action';

const CheckBoxFour = () => {
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [clickedThree, setClickedThree] = useState(false)
    const [measure, setMeasure] = useState([])
    const dispatch = useDispatch()
    const globalOrValue = clickedOne || clickedTwo || clickedThree ;
    const measureOne = "- de 50m²";
    const measureTwo = "entre 50 et 100m²";
    const measureThree = "+ de 100m²";

    const returnValue = async (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    setClickedTwo(false)
                    setClickedThree(false)
                    if(measure.length > -1){
                        if(!measure.includes(measureOne) && !measure.includes(measureTwo) && !measure.includes(measureThree)){
                            setMeasure([...measure, measureOne])
                        }else if (!measure.includes(measureOne) && measure.includes(measureTwo)){
                            measure.splice(measure.indexOf(measureTwo), 1)
                            setMeasure([...measure, measureOne])
                        }else if (!measure.includes(measureOne) || measure.includes(measureThree)){
                            measure.splice(measure.indexOf(measureThree), 1)
                            setMeasure([...measure, measureOne])
                        }
                    }
                    break;
                 
                case "two":
                    setClickedTwo(!clickedTwo)
                    setClickedOne(false)
                    setClickedThree(false)
                    if(measure.length > -1){
                        if(!measure.includes(measureOne) && !measure.includes(measureTwo) && !measure.includes(measureThree)){
                            setMeasure([...measure, measureTwo])
                        }else if (measure.includes(measureOne) && !measure.includes(measureTwo)){
                            measure.splice(measure.indexOf(measureOne), 1)
                            setMeasure([...measure, measureTwo])
                        }else if (!measure.includes(measureTwo) || measure.includes(measureThree)){
                            measure.splice(measure.indexOf(measureThree), 1)
                            setMeasure([...measure, measureTwo])
                        }
                    }
                    break;     
            
                case "three":
                setClickedThree(!clickedThree)
                setClickedOne(false)
                setClickedTwo(false)
                if(measure.length > -1){
                    if(!measure.includes(measureOne) && !measure.includes(measureTwo) && !measure.includes(measureThree)){
                        setMeasure([...measure, measureThree])
                    }else if (!measure.includes(measureThree) && measure.includes(measureOne)){
                        measure.splice(measure.indexOf(measureOne), 1)
                        setMeasure([...measure, measureThree])
                    }else if (measure.includes(measureTwo) || !measure.includes(measureThree)){
                        measure.splice(measure.indexOf(measureTwo), 1)
                        setMeasure([...measure, measureThree])
                    }
                }
                break;    

                default: console.log('error');
                    break;
            }
        }, 20)
    }

    useEffect(()=>{
        dispatch(removMeasure())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addMeasure(measure))
    }, [globalOrValue])

    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue) dispatch(addValueInArray())
        
        if(globalOrValue) dispatch(addMeasure(measure))
       
    }

    return (
        <>
            <div className="cardContainer">
                <div onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="- de 50m²"/>
                </div>  
                <div onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="entre 50 et 100m²"/>
                </div>   
                <div onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 100m²"/>
                </div>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className="btnUn">Suivant</button>
            </div>
        </>
    );
};

export default CheckBoxFour;