import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchStoryById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/stories/${id}`)

    dispatch({ type: 'STORY_BY_ID', payload: response.data})
  }
}