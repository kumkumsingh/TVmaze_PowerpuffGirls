import { combineReducers } from 'redux';
import showDetail from './showDetail';
import episodeList from './episodeList';
import seasonList from './seasonList';

export default combineReducers({
  showDetail,
  episodeList,
  seasonList
})