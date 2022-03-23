const initState = {
    isLoading : false,
    isLogin : false,
    arrayOne : false
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