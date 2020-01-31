export const SHOW_DETAILS = 'SHOW_DETAILS';
export const EPISODE_LIST = 'EPISODE_LIST';
export const EPISODE_DETAILS = 'EPISODE_DETAILS';
export const SEASON_LIST = 'SEASON_LIST';
export const SHOW_LIST = 'SHOW_LIST';

/* action creator to get the list of shows
   Used the end point /search/shows?q=:query
   query is the name of the show.
   it will list all the shows which matches the query
*/
export const getshowlist = (showName) => ({
    apiCall: true,
    path: `/search/shows?q=:${showName}`,
    successType: SHOW_LIST
});

/* action creator to get the detail of the show.
   It takes an input as showid - id of the show.
   Used the end point /shows/:id
   The response will be show details based on the id.
*/
export const getshowdetail = (showid) => ({
    apiCall: true,
    path: `/shows/${showid}`,
    successType: SHOW_DETAILS
});
  
/* 
    action creator to get the list of seasons
    it takes an input showid- id of the show
    Used end point /shows/:id/seasons
    The response will be list of seasons for a specific show
*/
export const getseasons = (showid) => ({
    apiCall: true,
    path: `/shows/${showid}/seasons`,
    successType: SEASON_LIST
});
  
/* 
    action creator to get the list of episodes
    it takes an input seadonid- id of the season
    Used end point /seasons/:id/episodes
    The response will be list of episodes for a specific season
*/
export const getepisodelist = (seasonid) => ({
    apiCall: true,
    path: `/seasons/${seasonid}/episodes`,
    successType: EPISODE_LIST
});


/* action creator to get the detail of the episode.
   It takes an input as episodeid - id of the episode.
   Used the end point /episodes/:id
   The response will be episode details based on the id.
*/
export const getepisodedetail = (episodeid) => ({
    apiCall: true,
    path: `/episodes/${episodeid}`,
    successType: EPISODE_DETAILS
});
 
