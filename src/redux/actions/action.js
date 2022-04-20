import axios from "axios"

export const nextArrayPrestation = (bool)=>{
    return{
        type: "nextPrestation",
        payload: bool
    }
}

export const addPrestation = (prestation)=>{
    return{
        type: "addPrestation",
        payload: prestation
    }
}

export const removPrestation = (prestation)=>{
    return{
        type: "removePrestation",
        payload: prestation
    }
}

export const addLodging = (lodging) =>{
    return{
        type: "addLodging",
        payload: lodging
    }
}

export const removLodging = (lodging)=>{
    return{
        type: "removeLodging",
        payload: lodging
    }
}

export const addOld = (old)=>{
    return{
        type:"addOld",
        payload: old
    }
}

export const removOld = (old)=>{
    return{
        type: "removeOld",
        payload: old
    }
}

export const addMeasure = (measure)=>{
    return{
        type: "addMeasure",
        payload: measure
    }
}

export const removMeasure = (measure)=>{
    return{
        type: "removeMeasure",
        payload: measure
    }
}

export const addWhen = (when) =>{
    return{
        type: "addWhen",
        payload: when
    }
}

export const removWhen = (when) =>{
    return {
        type: "removeWhen",
        payload: when
    }
}

export const addNameValue = (value) =>{
    return{
        type: "addNameValue",
        payload: value
    }
}

export const addPrenomValue = (value) =>{
    return{
        type: "addPrenomValue",
        payload: value
    }
}

export const addCodePostalValue = (value) =>{
    return{
        type: "addCodePostalValue",
        payload: value
    }
}

export const addPhoneValue = (value) =>{
    return{
        type: "addPhoneValue",
        payload: value
    }
}

export const addRGPDValue = (value) =>{
    return{
        type: "addRGPDValue",
        payload: value
    }
}

export const addNewsLaterValue = (value) =>{
    return{
        type: "addNewsLaterValue",
        payload: value
    }
}

export const isLoading = ()=>{
    return{
        type: "isLoading"
    }
}

export const isNotLoading = ()=>{
    return{
        type: "isNotLoading"
    }
}

export const addValueInArray = () =>{
    return{
        type: "addValueInArray"
    }
}

export const removeValueInArray = () =>{
    return{
        type: "removeValueInArray"
    }
}

export const removeProspect = ()=>{
    return{
        type: "removeProspect"
    }
}

export function addUser(user) {
    return (dispatch) => {
        console.log(user);
        dispatch({type : "addNameValue", payload: user});
        axios.post("http://localhost:1337/api/prospects", {"data" : user})
        .then(
            response => {
                    console.log(response);
                },
                error => console.log(error)
            );    
    };
}