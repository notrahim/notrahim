import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { nextArrayPrestation, addPrestation, addValueInArray, removPrestation } from '../../../redux/actions/action';


const CheckBoxTwo = () => {
    const [clickedOne, setClickedOne] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [home, sethome] = useState([])
    const dispatch = useDispatch()
    const globalOrValue = clickedOne || clickedTwo ;

    const returnValue = async (value)=>{
        setTimeout(()=>{
            switch (value) {
                case "one":
                    setClickedOne(!clickedOne)
                    if(home.length > -1){
                        if(!home.includes("iti")){
                            sethome([...home, "iti"])
                        }else{
                            home.splice(home.indexOf("iti"), 1);
                        }
                    }
                    break;
                 
                case "two":
                    setClickedTwo(!clickedTwo)
                    if(home.length > -1){
                        if(!home.includes("ite")){
                            sethome([...home, "ite"])
                        }else{
                            home.splice(home.indexOf("ite"), 1);
                        }
                    }
                    break;     
            
                default: console.log('error');
                    break;
            }
        }, 200)
    }

    useEffect(()=>{
        dispatch(removPrestation())
        if(globalOrValue){
            dispatch(nextArrayPrestation(true))
        } else {
            dispatch(nextArrayPrestation(false))
        }
        console.log(home);
        if(clickedOne) dispatch(addPrestation(home))
    }, [globalOrValue])

    const checkBtn = (e)=>{
        e.preventDefault()
        if(globalOrValue) dispatch(addValueInArray())
        
        if(globalOrValue) dispatch(addPrestation(home))
       
    }
    return (
        <>
            <div className="cardContainer">
                <div onClick={()=>returnValue("one")} className={clickedOne ? "card selected" : "card"}>
                    <Card img="house.svg" title="Une Maison"/>
                </div>  
                <div onClick={()=>returnValue("two")} className={clickedTwo ? "card selected" : "card"}>
                    <Card img="immeuble.svg" title="Un Appartement"/>
                </div>   
            </div>
            <div className="btnContainer">
                <button onClick={checkBtn} className="btnUn">Suivant</button>
            </div>
        </>
    );
};

export default CheckBoxTwo;