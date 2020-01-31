//stores the list of seasons in the state

import {SEASON_LIST} from '../actions/actions';

const reducer = (state = [], action = {}) => {
   switch(action.type){
        case SEASON_LIST:
            return action.payload
        default:
            return state
   }
}


export default reducer