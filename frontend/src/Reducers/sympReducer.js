const initialState = {
    sympAPI:null
}

const sypmReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOAD_SYMP_API':
            return {
                ...state,
                sympAPI:action.sympAPI
            }
        default:
            return state
    }
}
export default sypmReducer