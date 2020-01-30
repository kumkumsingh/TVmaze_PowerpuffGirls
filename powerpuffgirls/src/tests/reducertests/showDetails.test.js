import showDetailsReducer from '../../reducers/showDetails';
import { SHOW_DETAILS } from '../../actions/actions';


it('Sets the show details in response to SHOW_DETAILS', () => {
    const show = {id: 1, name:'PowerPuffGirls', summary: 'A show with three brave girls'}
    const action = { 
        type: SHOW_DETAILS,
        payload: show
    }

    const newState = showDetailsReducer([], action)

    expect(newState).toStrictEqual(show)
})
