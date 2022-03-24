export const nextArrayPrestation = (bool)=>{
    return{
        type: "next",
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