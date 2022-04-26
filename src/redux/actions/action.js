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

export const prospectValid = ()=>{
    return{
        type: "prospectValid"
    }
}

export const prospectIsNotValid = ()=>{
    return{
        type: "prospectIsNotValid"
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

export const showUser = (data)=>{
    return{
        type: "showUser",
        payload: data
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

export function userConnect(user){
    return (dispatch)=>{
        dispatch({type: "isLoading"});
        try{
            axios.post("http://localhost:1337/api/auth/local", {
                identifier: user.identifier,
                password: user.password
            }).then((response)=>{
                localStorage.setItem("jwt", response.data.jwt);
                dispatch(showUser(response.data.user))
                dispatch(isNotLoading())
            })
        }catch(err){
        }
    }
}

export function showAllProspect(){
    return dispatch => {
        try{
            axios.get("http://localhost:1337/api/prospects/", {
                headers: {
                    Authorization: `Bearer `+ localStorage.jwt,
                }
            })
            .then((response)=>{
                dispatch({type: "addProspectInData", payload: response})
            })
        }catch(err){
            console.log(err);
        }
    }
}

export function mofificationOfComments(id, text){
    console.log(localStorage.getItem("jwt"));
    try{
        axios.put(
            `http://localhost:1337/api/prospects/${id}`,
            {
                data: {
                    comments: text,
                }
            },
            {
                headers: {
                Authorization:
                    'Bearer ' + localStorage.jwt,
                },
            }
        ).then(response =>{
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

