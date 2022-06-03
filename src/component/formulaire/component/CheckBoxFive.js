import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addWhen, removWhen } from '../../../redux/actions/action';

/* It's a variable that allows us to know if one of the three buttons is clicked. */
/**
 * CheckBox Five Component
 * @returns A React component.
 */
const CheckBoxFive = () => {

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedOne, setClickedOne] = useState(false);

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedTwo, setClickedTwo] = useState(false);

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedThree, setClickedThree] = useState(false);

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedFour, setClickedFour] = useState(false);

    /* It's a hook that allows us to use state in a functional component. */
    const [when, setWhen] = useState([]);

    /* It's a hook that allows us to use state in a functional component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a hook that allows us to use dispatch in a functional component. */
    const dispatch = useDispatch();

    /* It's a boolean that allows us to know if one of the checkbox is checked. */
    const globalOrValue = clickedOne || clickedTwo || clickedThree || clickedFour ;

    /* It's a constant that contains a string. */
    const valueOne = "Le plus tôt possible";

    /* It's a constant that contains a string. */
    const valueTwo = "Dans les 3 mois";

    /* It's a constant that contains a string. */
    const valueThree = "Dans l'année";

    /* It's a constant that contains a string. */
    const valueFour = "Je ne sais pas";

    /**
     * The function takes in a value, and depending on the value, it will set the state of the clicked
     * buttons to true or false, and it will also add the value to the when array
     * @param value - the value of the button that was clicked
     */
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

    /* It's a hook that allows us to perform side effects in a functional component. */
    useEffect(()=>{
        dispatch(removWhen())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addWhen(when))
    }, [globalOrValue])

    /**
     * It checks if the globalOrValue is true, if it is, it adds the value to the array and adds the
     * when to the array
     * @param e - the event object
     */
    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue){
           dispatch(addValueInArray()) 
           dispatch(addWhen(when))
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
                    <Card img="calendar.svg" title={valueOne}/>
                </button>  
                <button onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueTwo}/>
                </button>   
                <button onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueThree} />
                </button>   
                <button onClick={()=>returnValue("four")} className={clickedFour? "card selected" : "card"}>
                    <Card img="calendar.svg" title={valueFour} />
                </button>   
            </div>
            <div className="btnContainer">
                <button className="btnUn" onClick={checkBtn} >Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner une carte ci-dessus</div>
            </div>
        </>
    );
};

export default CheckBoxFive;