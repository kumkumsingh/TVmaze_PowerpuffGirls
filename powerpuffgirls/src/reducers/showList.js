// stores the list of shows in the state

import { SHOW_LIST } from '../actions/actions';

const reducer = (state = [], action = {}) => {
   switch(action.type){
        case SHOW_LIST:
            return action.payload
        default:
            return state
   }
}


export default reducer