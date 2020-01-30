import {EPISODE_DETAILS} from '../actions/actions';

const reducer = (state = {}, action = {}) => {
   switch(action.type){
        case EPISODE_DETAILS:
            return action.payload
        default:
            return state
   }
}


export default reducer