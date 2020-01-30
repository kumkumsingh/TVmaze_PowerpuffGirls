
export const SHOW_DETAILS = 'SHOW_DETAILS';
export const EPISODE_LIST = 'EPISODE_LIST';
export const EPISODE_DETAILS = 'EPISODE_DETAILS';
export const SEASON_LIST = 'SEASON_LIST';
export const SHOW_LIST = 'SHOW_LIST';


export const getshowlist = (showName) => ({
    apiCall: true,
    path: `/search/shows?q=:${showName}`,
    successType: SHOW_LIST
});

export const getshowdetail = (showid) => ({
    apiCall: true,
    path: `/shows/${showid}`,
    successType: SHOW_DETAILS
});
  
export const getseason = (showid) => ({
    apiCall: true,
    path: `/shows/${showid}/seasons`,
    successType: SEASON_LIST
});
  
export const getepisodelist = (seasonid) => ({
    apiCall: true,
    path: `/seasons/${seasonid}/episodes`,
    successType: EPISODE_LIST
});

export const getEpisodeDetail = (episodeid) => ({
    apiCall: true,
    path: `/episodes/${episodeid}`,
    successType: EPISODE_DETAILS
});
 
