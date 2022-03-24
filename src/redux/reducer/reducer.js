const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false,
    valueOfArray: 1,
    prospect : {
        nom: null,
        email:null,
        tel:null,
        codePostal: null,
        prestation:[],
        surface:null,
        age:null,
        realisation:null
    }
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "next":
            return {
                ...state,
                arrayOne: action.payload
            }
    
        case "prestation":
            return{ 
                ...state,
                prospect: {
                    ...state.prospect,
                    prestation: state.prospect.prestation.concat(action.payload)
                }
            }    

        case "addValueInArray": 
            return{
                ...state, 
                valueOfArray: state.valueOfArray +1
            }
            

        case "removeValueInArray": 
        return{
            ...state, 
            valueOfArray: state.valueOfArray -1
        }
        
        default: return state
    }
}

export default reducer