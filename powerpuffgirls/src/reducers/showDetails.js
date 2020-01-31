//stores the details of the show in the state

import {SHOW_DETAILS} from '../actions/actions';

const reducer = (state = {}, action = {}) => {
   switch(action.type){
        case SHOW_DETAILS:
            return action.payload
        default:
            return state
   }
}


export default reducer