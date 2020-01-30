import episodeDetailsReducer from '../../reducers/episodeDetails';
import { EPISODE_DETAILS } from '../../actions/actions';


it('Sets the details of episodes in response to  EPISODE_DETAILS', () => {
    const episodeDetail = {id: 1, name:'Princess Buttercup', summary:'Princess Buttercup'}
    const action = { 
        type: EPISODE_DETAILS,
        payload: episodeDetail
    }

    const newState = episodeDetailsReducer([], action)

    expect(newState).toStrictEqual(episodeDetail)
})
