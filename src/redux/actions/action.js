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