import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Card from './Card';
import { nextArrayPrestation, addPrestation, addValueInArray, removPrestation } from '../../../redux/actions/action';

/**
 * CheckBox One Component
 * @returns A React component.
 */
const ChexkBox = () => {

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedOne, setClickedOne] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedTwo, setClickedTwo] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedThree, setClickedThree] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [clickedFour, setClickedFour] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const [prestation, setPrestation] = useState([])

    /* It's a hook that allows us to use state in a functional component. */
    const [globalError, setGlobalError] = useState(false)

    /* It's a hook that allows us to use state in a functional component. */
    const dispatch = useDispatch();

    /* It's a variable that allows us to know if one of the checkbox is checked. */
    const globalOrValue = clickedOne || clickedTwo || clickedThree || clickedFour;

    /**
     * It's a function that takes a value as a parameter and returns a function that sets the state of
     * the clicked button to true or false depending on the value of the clicked button
     * @param value - the value of the button clicked
     */
    const returnValue = (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    if(prestation.length > -1){
                        if(!prestation.includes("iti")){
                            setPrestation([...prestation, "iti"])
                        }else{
                            prestation.splice(prestation.indexOf("iti"), 1);
                        }
                    }
                    break;
                 
                case "two":
                    setClickedTwo(!clickedTwo)
                    if(prestation.length > -1){
                        if(!prestation.includes("ite")){
                            setPrestation([...prestation, "ite"])
                        }else{
                            prestation.splice(prestation.indexOf("ite"), 1);
                        }
                    }
                    break; 
                 
                case "three":
                    setClickedThree(!clickedThree)
                    if(prestation.length > -1){
                        if(!prestation.includes("isolation des combles")){
                            setPrestation([...prestation, "isolation des combles"])
                        }else{
                            prestation.splice(prestation.indexOf("isolation des combles"), 1);
                        }
                    }
                    break;
                 
                case "four":
                    setClickedFour(!clickedFour)
                    if(prestation.length > -1){
                        if(!prestation.includes("isolation sous toiture")){
                            setPrestation([...prestation, "isolation sous toiture"])
                        }else{
                            prestation.splice(prestation.indexOf("isolation sous toiture"), 1);
                        }
                    }
                    break;      
            
                default: console.log('error');
                    break;
            }
        }, 20)
    }

    /* It's a hook that allows us to use state in a functional component. */
    useEffect(()=>{
        dispatch(removPrestation())
        if(clickedOne || clickedTwo || clickedThree || clickedFour){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        if(clickedOne) dispatch(addPrestation(prestation))
    }, [globalOrValue])

    /**
     * It checks if the globalOrValue is true, if it is, it adds the prestation in the array and in the
     * global state, if not, it sets the globalError to true
     * @param e - the event
     */
    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue){
            dispatch(addValueInArray())
            dispatch(addPrestation(prestation))
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
                    <Card img="isolation-in.svg" title="ITI (Isolation Murs Interieurs)"/>
                </button>  
                <button onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="isolation-ext.svg" title="ITE (Isolation Murs Extérieurs)"/>
                </button>  
                <button onClick={()=>returnValue("three")} className={clickedThree ? "card selected" : "card"}>
                    <Card img="Isolation-combles.svg" title="Isolation Des Combles"/>
                </button>  
                <button onClick={()=>returnValue("four")} className={clickedFour ? "card selected" : "card"}>
                    <Card img="Isolation-toiture.svg" title="Isolation Sous-Rampant(Toiture)"/>
                </button>  
            </div>
            <div className="btnContainer">
                <button className={globalError ? "error btnUn" : "btnUn"} onClick={checkBtn} >Suivant</button>
                <div className={globalError ? "hiddenError" : "error"}>Veuillez selectionner une préstation</div>
            </div>
        </>
    )
}

export default ChexkBox;