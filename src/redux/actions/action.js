import axios from "axios"

/**
 * It returns an object with a type and a payload
 * @param bool - true or false
 * @returns An object with a type and a payload.
 */
export const nextArrayPrestation = (bool)=>{
    return{
        type: "nextPrestation",
        payload: bool
    }
}

/**
 * It returns an object with a type and a payload
 * @param prestation - the prestation object that we want to add to the state
 * @returns An object with a type and a payload.
 */
export const addPrestation = (prestation)=>{
    return{
        type: "addPrestation",
        payload: prestation
    }
}

/**
 * It returns an object with a type and a payload
 * @param prestation - the prestation to be removed
 * @returns An object with a type and a payload.
 */
export const removPrestation = (prestation)=>{
    return{
        type: "removePrestation",
        payload: prestation
    }
}

/**
 * It returns an object with a type of "addLodging" and a payload of the lodging object that was passed
 * in
 * @param lodging - This is the lodging object that we want to add to the state.
 * @returns An object with a type and a payload.
 */
export const addLodging = (lodging) =>{
    return{
        type: "addLodging",
        payload: lodging
    }
}

/**
 * It returns an object with a type of "removeLodging" and a payload of the lodging that was passed in
 * @param lodging - the lodging object that you want to remove from the state
 * @returns An object with a type and a payload.
 */
export const removLodging = (lodging)=>{
    return{
        type: "removeLodging",
        payload: lodging
    }
}

/**
 * It returns an object with a type property and a payload property
 * @param old - The old value that we want to add to the store.
 * @returns An object with a type and a payload.
 */
export const addOld = (old)=>{
    return{
        type:"addOld",
        payload: old
    }
}

/**
 * It takes in a parameter called old, and returns an object with a type of "removeOld" and a payload
 * of old
 * @param old - The old value that you want to remove from the state.
 * @returns An object with a type and a payload.
 */
export const removOld = (old)=>{
    return{
        type: "removeOld",
        payload: old
    }
}

/**
 * It returns an object with a type of "addMeasure" and a payload of the measure that was passed in
 * @param measure - {
 * @returns An object with a type and a payload.
 */
export const addMeasure = (measure)=>{
    return{
        type: "addMeasure",
        payload: measure
    }
}

/**
 * It returns an object with a type of "removeMeasure" and a payload of the measure that was passed in
 * @param measure - the measure to be removed
 * @returns An object with a type and a payload.
 */
export const removMeasure = (measure)=>{
    return{
        type: "removeMeasure",
        payload: measure
    }
}

/**
 * It returns an object with a type of "addWhen" and a payload of the when argument
 * @param when - This is the time of the event.
 * @returns An object with a type and a payload.
 */
export const addWhen = (when) =>{
    return{
        type: "addWhen",
        payload: when
    }
}

/**
 * It returns an object with a type property and a payload property
 * @param when - the when object that you want to remove
 * @returns An object with a type and a payload.
 */
export const removWhen = (when) =>{
    return {
        type: "removeWhen",
        payload: when
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - The value that is passed in from the input field.
 * @returns An object with a type and a payload.
 */
export const addNameValue = (value) =>{
    return{
        type: "addNameValue",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - the value of the input
 * @returns An object with a type and a payload.
 */
export const addPrenomValue = (value) =>{
    return{
        type: "addPrenomValue",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - the value of the input
 * @returns An object with a type and a payload.
 */
export const addCodePostalValue = (value) =>{
    return{
        type: "addCodePostalValue",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - The value of the input field
 * @returns An object with a type and a payload.
 */
export const addPhoneValue = (value) =>{
    return{
        type: "addPhoneValue",
        payload: value
    }
}

/**
 * It returns an object with a type and a payload
 * @param value - the value of the RGPD checkbox
 * @returns An object with a type and a payload.
 */
export const addRGPDValue = (value) =>{
    return{
        type: "addRGPDValue",
        payload: value
    }
}

/**
 * It takes a value as an argument, and returns an object with a type and a payload
 * @param value - The value of the input field
 * @returns An object with a type and a payload.
 */
export const addNewsLaterValue = (value) =>{
    return{
        type: "addNewsLaterValue",
        payload: value
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const isLoading = ()=>{
    return{
        type: "isLoading"
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const isNotLoading = ()=>{
    return{
        type: "isNotLoading"
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const prospectValid = ()=>{
    return{
        type: "prospectValid"
    }
}

/**
 * It returns an object with a type property that has a value of "prospectIsNotValid"
 * @returns An object with a type property.
 */
export const prospectIsNotValid = ()=>{
    return{
        type: "prospectIsNotValid"
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const addValueInArray = () =>{
    return{
        type: "addValueInArray"
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const removeValueInArray = () =>{
    return{
        type: "removeValueInArray"
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export const removeProspect = ()=>{
    return{
        type: "removeProspect"
    }
}

/**
 * It returns an object with a type and a payload
 * @param data - This is the data that we want to pass to the reducer.
 * @returns An object with a type and a payload.
 */
export const showUser = (data)=>{
    return{
        type: "showUser",
        payload: data
    }
}

/**
 * It takes a user object as an argument, dispatches an action to the reducer, and then sends the user
 * object to the server
 * @param user - the user object that is passed in from the form
 * @returns An object with a type and a payload.
 */
export function addUser(user) {
    return (dispatch) => {
        // console.log(user);
        dispatch({type : "addNameValue", payload: user});
        axios.post("http://localhost:1337/api/prospects", {"data" : user})
        .then(
            response => {
                    // console.log(response);
                },
                error => console.log(error)
            );    
    };
}

/**
 * It takes a user object as a parameter, and then dispatches an action to the reducer to show the user
 * @param user - the user object that contains the identifier and password
 * @returns An object with a type and a payload.
 */
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

/**
 * It's a function that returns a function that uses the axios library to make a GET request to the
 * server, and then dispatches an action to the Redux store
 */
export function showAllProspect(){
    return dispatch => {
        try{
            axios.get("http://localhost:1337/api/prospects?pagination[page]=1&pagination[pageSize]=1000", {
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

/**
 * It takes an id and a text as parameters, and then it sends a request to the server to update the
 * comments of the prospect with the given id
 * @param id - the id of the prospect you want to modify
 * @param text - the text that you want to add to the comments field
 */
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

