const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false,
    arrayTwo : false,
    valueOfArray: 1,
    prospect : {
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
            
        case "addOld":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    age: action.payload
                }
            }    
            
        case "removeOld":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    age: null
                }
            }  
         
        case "addMeasure":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    surface: action.payload
                }
            } 
            
        case "removeMeasure":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    surface: null
                }
            }  

        case "addWhen": 
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    realisation: action.payload
                }
            }  
            
        case "removeWhen":
            return{
                ...state,
                ...state.prospect,
                prospect:{
                    realisation: null
                }
            } 
            
        case "addNameValue": 
        return{
            ...state, 
            ...state.prospect,
            isLoading: true,
            prospect:{
                nom: action.payload.nom,
                prenom: action.payload.prenom,
                tel: action.payload.tel,
                mail: action.payload.mail,
                codePostal: action.payload.codePostal,
                rgpd: action.payload.rgpd,
                newsLater: action.payload.newsLater
            }
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