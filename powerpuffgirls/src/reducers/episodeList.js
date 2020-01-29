import { EPISODE_LIST, EPISODE_DETAIL} from '../actions/actions';

const reducer = (state = null, action = {}) => {
   switch(action.type){
        case EPISODE_LIST:
            return action.data
        case EPISODE_DETAIL:
            return state.filter(episode => episode.id === action.id)
        default:
            return state
   }
}


export default reducer