import episodeListReducer from '../../reducers/episodeList';
import { EPISODE_LIST } from '../../actions/actions';


it('Sets the list of episodes in response to EPISODE_LIST', () => {
    const episodes = [{id: 1, name:'Princess Buttercup', summary:'Princess Buttercup'}, {id: 2, name: 'Worship', summary:'Worship'}]
    const action = { 
        type: EPISODE_LIST,
        payload: episodes
    }

    const newState = episodeListReducer([], action)

    expect(newState).toStrictEqual(episodes)
})
