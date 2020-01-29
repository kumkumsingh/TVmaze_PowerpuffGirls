import {SEASON_LIST} from '../actions/actions';

const reducer = (state = [], action = {}) => {
   switch(action.type){
        case SEASON_LIST:
            return action.data
        default:
            return state
   }
}


export default reducer