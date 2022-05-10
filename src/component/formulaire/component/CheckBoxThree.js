import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addOld, removOld } from '../../../redux/actions/action';

/**
 * CheckBox Three Component
 * @returns A React component.
 */
const CheckBoxThree = () => {

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedOne, setClickedOne] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedTwo, setClickedTwo] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedThree, setClickedThree] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [date, setDate] = useState([])

    /* It's a hook that allows us to use state in a functional component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a hook that allows us to use dispatch in a functional component. */
    const dispatch = useDispatch()

    /* It's a variable that allows us to know if one of the three buttons is clicked. */
    const globalOrValue = clickedOne || clickedTwo || clickedThree ;

    /**
     * It's an async function that takes a value as a parameter, and depending on the value, it will
     * set the state of the clickedOne, clickedTwo, and clickedThree variables to true or false, and it
     * will also add or remove the corresponding value to the date array
     * @param value - the value of the button clicked
     */
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

    /* It's a hook that allows us to perform side effects in a functional component. */
    useEffect(()=>{
        dispatch(removOld())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addOld(date))
    }, [globalOrValue])

    /**
     * It checks if the globalOrValue is true, if it is, it adds the value to the array and adds the
     * date to the old array. If it's false, it sets the globalError to true
     * @param e - event
     */
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

    /* It's a function that returns a JSX element. */
    return (
        <>
            <div className={globalError ? "error cardContainer" : "cardContainer"}>
                <button onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="- de 2ans"/>
                </button>  
                <button onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 2ans"/>
                </button>   
                <button onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title="+ de 15ans"/>
                </button>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className={globalError ? "error btnUn" : "btnUn"}>Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner l'âge de votre logement</div>
            </div>
        </>
    );
};

export default CheckBoxThree;