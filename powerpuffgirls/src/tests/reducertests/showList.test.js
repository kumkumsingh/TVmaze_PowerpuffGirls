import showListReducer from '../../reducers/showList';
import { SHOW_LIST } from '../../actions/actions';


it('Sets a list of shows in response to SHOW_LIST', () => {
    const shows = [{id: 1, name:'PowerPuffGirls'},{id:2, name:'PowerpuffGirlsTwo'}, {id:3, name:'PowerPuffGirlsThree'}]
    const action = { 
        type: SHOW_LIST,
        payload: shows
    }

    const newState = showListReducer([], action)

    expect(newState).toStrictEqual(shows)
})

