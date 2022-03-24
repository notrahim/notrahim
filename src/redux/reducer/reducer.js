const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false,
    arrayTwo : false,
    valueOfArray: 1,
    prospect : {
        nom: null,
        email:null,
        tel:null,
        codePostal: null,
        prestation:[],
        typeLogement: null,
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
    
        case "addPrestation":
            return{ 
                ...state,
                ...state.prospect,
                prospect: {
                    prestation: state.prospect.prestation.concat(action.payload)
                }
            }  
            
        case "removePrestation":
            return{
                ...state,
                ...state.prospect,
                prospect: {
                    prestation: []
                }
            }  
            
        case"addLodging":
            return{
                ...state,
                ...state.prospect,
                prospect: {
                    typeLogement: action.payload
                }
            }  
            
        case "removeLodging":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    typeLogement: null
                }
            }    

        case "addValueInArray": 
            return{
                ...state, 
                valueOfArray: state.valueOfArray +1
            }
            

        case "removeValueInArray": 
        if(state.valueOfArray > 1){
            return{
                ...state, 
                valueOfArray: state.valueOfArray -1
            }
        }
        
        default: return state
    }
}

export default reducer