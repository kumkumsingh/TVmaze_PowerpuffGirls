import { combineReducers } from 'redux';
import showDetail from './showDetail';
import episodeList from './episodeList';

export default combineReducers({
  showDetail,
  episodeList
})