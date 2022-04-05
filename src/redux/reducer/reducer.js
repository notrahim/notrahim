const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false,
    arrayTwo : false,
    valueOfArray: 1,
    nom: null,
    prenom: null,
    mail:null,
    tel:null,
    codePostal: null,
    rgpd: false,
    newsLater: false,
    prestation:[],
    typeLogement: null,
    surface:null,
    age:null,
    realisation:null
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "isNotLoading":
            return{
                ...state,
                isLoading: false
            }

        case "isLoading":
            return{
                ...state,
                isLoading: true
            }    

        case "next":
            return {
                ...state,
                arrayOne: action.payload
            }
    
        case "addPrestation":
            return{ 
                ...state,
                prestation: state.prestation.concat(action.payload)
            }  
            
        case "removePrestation":
            return{
                ...state,
                prestation: []
            }  
            
        case"addLodging":
            return{
                ...state,
                typeLogement: action.payload
            }  
            
        case "removeLodging":
            return{
                ...state,
                typeLogement: null
            }  
            
        case "addOld":
            return{
                ...state,
                age: action.payload
            }    
            
        case "removeOld":
            return{
                ...state,
                age: null
            }  
         
        case "addMeasure":
            return{
                ...state,
                surface: action.payload
            } 
            
        case "removeMeasure":
            return{
                ...state,
                surface: null
            }  

        case "addWhen": 
            return{
                ...state,
                realisation: action.payload
            }  
            
        case "removeWhen":
            return{
                ...state,
                realisation: null
            } 
            
        case "addNameValue": 
        return{
            ...state, 
            isLoading: true,
            nom: action.payload.name,
            prenom: action.payload.prenom,
            tel: action.payload.phone,
            mail: action.payload.email,
            codePostal: action.payload.codePostal,
            rgpd: action.payload.rgpd,
            newsLater: action.payload.newsLaters,
        }  
        
        case "addGlobalUserValue":
            return{
                ...state, 
                isLoading: false
            }
        
         
        case "addValueInArray": 
            if(state.valueOfArray <= 6){
                return{
                    ...state, 
                    valueOfArray: state.valueOfArray +1
                }
            }
            break;
            

        case "removeValueInArray": 
            if(state.valueOfArray > 1){
                return{
                    ...state, 
                    valueOfArray: state.valueOfArray -1
                }
            }
            break;
        
        default: return state
    }
}

export default reducer