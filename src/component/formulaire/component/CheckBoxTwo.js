import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { nextArrayPrestation, addValueInArray, addLodging, removLodging } from '../../../redux/actions/action';


const CheckBoxTwo = () => {
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [home, sethome] = useState([])
    const [globalError, setGlobalError] = useState(false)
    const dispatch = useDispatch()
    const globalOrValue = clickedOne || clickedTwo ;

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