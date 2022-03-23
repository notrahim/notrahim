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