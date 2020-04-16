import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchStories = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/stories`);

    dispatch({ type: 'FETCH_STORIES_SUCCES', payload: response.data});
  }
}