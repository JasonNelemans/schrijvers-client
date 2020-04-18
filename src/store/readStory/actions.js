import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from '../appState/actions';

export const fetchStoryById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories/story/${id}`);

      dispatch({ type: "STORY_BY_ID", payload: response.data });
    } catch (e) {
      console.log("error: ", e);
      dispatch(setMessage("danger", true, e.response.data.message))
    }
  };
};

export const fetchFirstParagraph = (id, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/stories/paragraph/${id}/${paragraphNumber}`
      );
      dispatch({ type: "FIRST_PARAGRAPH", payload: response.data.text });
    } catch (e) {
      console.log("error:", e);
      dispatch(setMessage("danger", true, e.response.data.message))
    }
  };
};

export const fetchNextParagraph = (id, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/stories/paragraph/${id}/${paragraphNumber}`
      );
      dispatch({ type: "NEXT_PARAGRAPH", payload: response.data.text });
    } catch (e) {
      dispatch({ type: "LAST_PARAGRAPH" });
    }
  };
};
