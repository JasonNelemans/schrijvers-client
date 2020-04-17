import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchStoryById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/stories/${id}`)

    dispatch({ type: 'STORY_BY_ID', payload: response.data})
  }
}

export const fetchNextParagraph = (id, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories/${id}/${paragraphNumber}`);
      dispatch({ type: 'NEXT_PARAGRAPH', payload: response.data.text});
    }
    catch (e) {
      console.log('error: ', e)
    }
  }
}