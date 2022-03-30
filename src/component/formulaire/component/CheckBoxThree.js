import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addOld, removOld } from '../../../redux/actions/action';

const CheckBoxThree = () => {
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [clickedThree, setClickedThree] = useState(false)
    const [date, setDate] = useState([])
    const [globalError, setGlobalError] = useState(false)
    const dispatch = useDispatch()
    const globalOrValue = clickedOne || clickedTwo || clickedThree ;

    const returnValue = async (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    setClickedTwo(false)
                    setClickedThree(false)
                    if(date.length > -1){
                        if(!date.includes("- de 2ans") && !date.includes("+ de 2ans") && !date.includes("+ de 15ans")){
                            setDate([...date, "- de 2ans"])
                        }else if (!date.includes("- de 2ans") && date.includes("+ de 2ans")){
                            date.splice(date.indexOf("+ de 2ans"), 1)
                            setDate([...date, "- de 2ans"])
                        }else if (!date.includes("- de 2ans") || date.includes("+ de 15ans")){
                            date.splice(date.indexOf("+ de 15ans"), 1)
                            setDate([...date, "- de 2ans"])
                        }
                    }
                    break;
                 
                case "two":
                    setClickedTwo(!clickedTwo)
                    setClickedOne(false)
                    setClickedThree(false)
                    if(date.length > -1){
                        if(!date.includes("- de 2ans") && !date.includes("+ de 2ans") && !date.includes("+ de 15ans")){
                            setDate([...date, "+ de 2ans"])
                        }else if (date.includes("- de 2ans") && !date.includes("+ de 2ans")){
                            date.splice(date.indexOf("- de 2ans"), 1)
                            setDate([...date, "+ de 2ans"])
                        }else if (!date.includes("+ de 2ans") || date.includes("+ de 15ans")){
                            date.splice(date.indexOf("+ de 15ans"), 1)
                            setDate([...date, "+ de 2ans"])
                        }
                    }
                    break;     
            
                case "three":
                setClickedThree(!clickedThree)
                setClickedOne(false)
                setClickedTwo(false)
                if(date.length > -1){
                    if(!date.includes("- de 2ans") && !date.includes("+ de 2ans") && !date.includes("+ de 15ans")){
                        setDate([...date, "+ de 15ans"])
                    }else if (!date.includes("+ de 15ans") && date.includes("+ de 2ans")){
                        date.splice(date.indexOf("+ de 2ans"), 1)
                        setDate([...date, "+ de 15ans"])
                    }else if (date.includes("- de 2ans") || !date.includes("+ de 15ans")){
                        date.splice(date.indexOf("- de 2ans"), 1)
                        setDate([...date, "+ de 15ans"])
                    }
                }
                break;    

                default: console.log('error');
                    break;
            }
        }, 20)
    }

    useEffect(()=>{
        dispatch(removOld())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addOld(date))
    }, [globalOrValue])

    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue){
            dispatch(addValueInArray())
            dispatch(addOld(date))
            setGlobalError(false)
        } else{
            setGlobalError(true)
        }
    }

    return (
        <>
            <div className={globalError ? "error cardContainer" : "cardContainer"}>
                <div onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="- de 2ans"/>
                </div>  
                <div onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 2ans"/>
                </div>   
                <div onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 15ans"/>
                </div>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className={globalError ? "error btnUn" : "btnUn"}>Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner l'âge de votre logement</div>
            </div>
        </>
    );
};

export default CheckBoxThree;