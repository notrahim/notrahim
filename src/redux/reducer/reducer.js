const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false,
    prospect : {
        nom: "",
        email:"",
        tel:"",
        codePostal: "",
        presation:"",
        surface:"",
        age:"",
        realisation:""
    }
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "next":
            return {
                ...state,
                arrayOne: action.payload
            }
    
        default: return state
    }
}

export default reducer