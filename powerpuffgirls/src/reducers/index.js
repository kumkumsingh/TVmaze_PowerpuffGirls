import { combineReducers } from 'redux';
import showDetails from './showDetails';
import episodeList from './episodeList';
import seasonList from './seasonList';
import episodeDetails from './episodeDetails';
import showList from './showList';

export default combineReducers({
  showDetails,
  episodeList,
  seasonList,
  episodeDetails,
  showList
})