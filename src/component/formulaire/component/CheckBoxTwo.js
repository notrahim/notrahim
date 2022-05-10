import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addLodging, removLodging } from '../../../redux/actions/action';

/**
 * CheckBox Two Component
 * @returns A React component.
 */
const CheckBoxTwo = () => {

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedOne, setClickedOne] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedTwo, setClickedTwo] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [home, sethome] = useState([])

    /* It's a hook that allows us to use state in a functional component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a hook that allows us to use dispatch in a functional component. */
    const dispatch = useDispatch()

    /* It's a variable that allows us to know if one of the two buttons is clicked. */
    const globalOrValue = clickedOne || clickedTwo ;

    /**
     * It's an asynchronous function that takes a value as a parameter and returns a value
     * @param value - the value of the button clicked
     */
    const returnValue = async (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    setClickedTwo(false)
                    if(home.length > -1){
                        if(!home.includes("appartement") && !home.includes("immeuble")){
                            sethome([...home, "appartement"])
                        }else if (!home.includes("appartement") && home.includes("immeuble")){
                            home.splice(home.indexOf("immeuble"), 1)
                            sethome([...home, "appartement"])
                        }
                    }
                    break;
                 
                case "two":
                    setClickedTwo(!clickedTwo)
                    setClickedOne(false)
                    if(home.length > -1){
                        if(!home.includes("appartement") && !home.includes("immeuble")){
                            sethome([...home, "immeuble"])
                        }else if (!home.includes("immeuble") && home.includes("appartement")){
                            home.splice(home.indexOf("appartement"), 1)
                            sethome([...home, "immeuble"])
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
        dispatch(removLodging())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        // console.log(home);
        if(clickedOne) dispatch(addLodging(home))
    }, [globalOrValue])

    /**
     * It checks if the globalOrValue is true, if it is, it adds the value to the array and adds the
     * lodging to the home. If it's false, it sets the globalError to true
     * @param e - the event
     */
    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue) {
           dispatch(addValueInArray()) 
           dispatch(addLodging(home))
           setGlobalError(false)
        } else {
            setGlobalError(true)
        }
    }
    
    /* It's a function that returns a JSX element. */
    return (
        <>
            <div className={globalError ? "error cardContainer" : "cardContainer"}>
                <button onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="house.svg" title="Une Maison"/>
                </button>  
                <button onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="immeuble.svg" title="Un Appartement"/>
                </button>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className={globalError ? "error btnUn" : "btnUn"}>Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner le type de logement</div>
            </div>
        </>
    );
};

export default CheckBoxTwo;