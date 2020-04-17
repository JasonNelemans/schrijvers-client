import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import storyList from './storyList/reducer';
import readStory from './readStory/reducer';

export default combineReducers({
  appState,
  user,
  storyList,
  readStory
});
