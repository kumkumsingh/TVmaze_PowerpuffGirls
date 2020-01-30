import seasonListReducer from '../../reducers/seasonList';
import { SEASON_LIST } from '../../actions/actions';


it('Sets the list of seasons in response to SEASON_LIST', () => {
    const seasons = [{id: 1, name:'Season1'}, {id: 2, name: 'Season3'}]
    const action = { 
        type: SEASON_LIST,
        payload: seasons
    }

    const newState = seasonListReducer([], action)

    expect(newState).toStrictEqual(seasons)
})
