import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from "../appState/actions";

export const fetchStoryById = (id) => {
  return async (dispatch, getState) => {
    try {
      //fetches the story (without paragraphs) by ID
      const response = await axios.get(`${apiUrl}/stories/story/${id}`);
      //Saves to reducer
      dispatch({ type: "STORY_BY_ID", payload: response.data });
    } catch (e) {
      //Handles error
      console.log("error: ", e);
      dispatch(setMessage("danger", true, e.response.data.message));
    }
  };
};

export const updateParagraphRead = (storyId, paragraphNumber, timesRead) => {
  return async (dispatch, getState) => {
    try {
      //Update database with incremented timesRead value. 
      await axios.patch(`${apiUrl}/stories/update/paragraph/read`, {
        storyId,
        paragraphNumber,
        timesRead: timesRead + 1
      });

    } catch (e) {
      console.log("error: ", e);
    }
  };
};

export const fetchParagraph = (storyId, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      //Fetch paragraph depending on arguments storyId and ParagraphNumber
      const response = await axios.get(
        `${apiUrl}/stories/paragraph/${storyId}/${paragraphNumber}`
      );
      //Handle in reducer
      dispatch({ type: "FETCHED_PARAGRAPH", payload: response.data });
      
      /*If paragraph is fetched the timesRead value must increment by 1 for heatmap 
      feature. Dispatch is made with storyId, paragraphNumber and current value timesRead 
      arguments. */
      dispatch(updateParagraphRead(storyId, paragraphNumber, response.data.timesRead));
    } catch (e) {
      dispatch({ type: "LAST_PARAGRAPH" });
    }
  };
};

export const updateTitleClicked = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios.patch(`${apiUrl}/stories/clicktitle`, {
        id,
      });
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const giveRating = (amount, userId, storyId) => {
  return async (dispatch, getState) => {
    try {
      await axios.post(`${apiUrl}/stories/giverating`, {
        userId,
        storyId, 
        amount
      })
    }
    catch (e) {
      console.log('error: ', e);
    }
  }
}
