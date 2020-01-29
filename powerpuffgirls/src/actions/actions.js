import request from 'superagent';
import { url, showid} from '../constants';


const fetchedShow = (data) => {
    return({
        type: SHOW_DETAILS,
        data
    })
}

const fetchedEpisodeList = (data) => {
    return({
        type: EPISODE_LIST,
        data
    })
}

const fetchEpisodeDetail = (id) => {
    return({
        type: EPISODE_DETAIL,
        id
    })
}

const fetchedSeason = (data) => {
    return({
        type: SEASON_LIST,
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

export const getseason = (showid) => (dispatch) => {
    request 
       .get(`${url}/shows/${showid}/seasons`)
       .then(response => {
           console.log("Seasons", response.body)
           dispatch(fetchedSeason(response.body))
       })
}

export const getepisodelist = (seasonid) => (dispatch) => {
    request 
      .get(`${url}/seasons/${seasonid}/episodes`)
      .then(response => {
          console.log("Episode Response",response.body)
          dispatch(fetchedEpisodeList(response.body))
      })
}

export const episodedetail = (episodeId) => (dispatch) => {
    dispatch(fetchEpisodeDetail(episodeId))
}

 
export const SHOW_DETAILS = 'SHOW_DETAILS';
export const EPISODE_LIST = 'EPISODE_LIST';
export const EPISODE_DETAIL = 'EPISODE_DETAIL';
export const SEASON_LIST = 'SEASON_LIST';