import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addMeasure, removMeasure } from '../../../redux/actions/action';

/**
 * CheckBox Four Component
 * @returns A React component.
 */
const CheckBoxFour = () => {

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedOne, setClickedOne] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedTwo, setClickedTwo] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedThree, setClickedThree] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [measure, setMeasure] = useState([])

    /* It's a hook that allows us to use state in a functional component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a hook that allows us to use dispatch in a functional component. */
    const dispatch = useDispatch()

    /* It's a variable that allows us to know if one of the three buttons is clicked. */
    const globalOrValue = clickedOne || clickedTwo || clickedThree ;

    /* It's a variable that allows us to know if one of the three buttons is clicked. */
    const measureOne = "- de 50m²";

    /* It's a variable that allows us to know if one of the three buttons is clicked. */
    const measureTwo = "entre 50 et 100m²";

    /* It's a variable that allows us to know if one of the three buttons is clicked. */
    const measureThree = "+ de 100m²";

    /**
     * The function takes in a value, and depending on the value, it will set the state of the
     * clickedOne, clickedTwo, and clickedThree variables to true or false, and it will also add or
     * remove the measureOne, measureTwo, and measureThree variables from the measure array
     * @param value - the value of the button that was clicked
     */
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

    /* It's a hook that allows us to perform side effects in a functional component. */
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
        if(globalOrValue){
            dispatch(addValueInArray())
            dispatch(addMeasure(measure))
            setGlobalError(false)
        } else{
            setGlobalError(true)
        }
    }

    /* It's a function that returns a JSX element. */
    return (
        <>
        <div className={globalError ? "error cardContainer" : "cardContainer"}>
                <button onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="- de 50m²"/>
                </button>  
                <button onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="entre 50 et 100m²"/>
                </button>   
                <button onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 100m²"/>
                </button>   
            </div>
            <div className="btnContainer">
                <button className="btnUn" onClick={checkBtn} >Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner la surface de votre logement</div>
            </div>
        </>
    );
};

export default CheckBoxFour;