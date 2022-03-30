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
        type: "isLoading"
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

// export function putUserLastName (nom, prenom, email, phone, prestation, habitation, age, surface, date, codePostal, rgpd, newsLaters){
//     return async () =>{
//         try{
//             const response = await axios({
//                 method: 'put',
//                 url: 'http://localhost:1337/api/prospects',
//                 "data": {
//                   "name": nom,
//                   "prenom": prenom,
//                   "email": email,
//                   "phone": phone,
//                   "prestation": prestation.toString(),
//                   "habitation": habitation.toString(),
//                   "age": age.toString(),
//                   "surface": surface.toString(),
//                   "date": date.toString(),
//                   "codepostal": codePostal,
//                   "rgpd": rgpd,
//                   "newslaters": newsLaters
//                 }
//             })
//             console.log(response);
//             // await dispatch(changeName(response.data));
//         } catch (error){

//         }
//     }
// }