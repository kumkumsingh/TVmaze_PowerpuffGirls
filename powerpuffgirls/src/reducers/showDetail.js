import {SHOW_DETAILS} from '../actions/showactions';

const reducer = (state = {}, action = {}) => {
   switch(action.type){
        case SHOW_DETAILS:
            return action.data
        default:
            return state
   }
}


export default reducer