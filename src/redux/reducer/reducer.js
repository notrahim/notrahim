const initState = {
    isLoading : false,
    isLogin : false,
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "next":
            return {
                ...state,
                isLoading: true
            }
    
        default: return state
    }
}

export default reducer