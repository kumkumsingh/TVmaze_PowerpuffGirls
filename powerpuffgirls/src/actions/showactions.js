import request from 'superagent';
import { url, showid} from '../constants';


const fetchedShow = (data) => {
    return({
        type: SHOW_DETAILS,
        data
    })
}


export const getshow = () => (dispatch) => {
    request
      .get(`${url}/shows/${showid}`)
      .then(response => {
          console.log("Search Show",response.body)
          dispatch(fetchedShow(response.body))
      })
}

export const SHOW_DETAILS = 'SHOW_DETAILS';