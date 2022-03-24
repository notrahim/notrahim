export const nextArrayPrestation = (bool)=>{
    return{
        type: "next",
        payload: bool
    }
}

export const addPrestation = (prestation)=>{
    return{
        type: "prestation",
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