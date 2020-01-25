import request from 'superagent';
import { url, showid} from '../constants';


const fetchedShow = (data) => {
    return({
        type: SHOW_DETAILS,
        data
    })
}

const fetchedEpisode = (data) => {
    return({
        type: EPISODE_LIST,
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


export const getepisode = () => (dispatch) => {
    request 
      .get(`${url}/shows/${showid}/episodes`)
      .then(response => {
          console.log("Episode Response",response.body)
          dispatch(fetchedEpisode(response.body))
      })
}
 
export const SHOW_DETAILS = 'SHOW_DETAILS';
export const EPISODE_LIST = 'EPISODE_LIST';