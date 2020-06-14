import {combineReducers} from 'redux'
import sympReducer from './sympReducer'
//combining all the reducer into allReducers
const rootReducers = combineReducers({
    sympState:sympReducer
})
export default rootReducers