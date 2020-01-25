import {EPISODE_LIST} from '../actions/showactions';

const reducer = (state = null, action = {}) => {
   switch(action.type){
        case EPISODE_LIST:
            return action.data
        default:
            return state
   }
}


export default reducer