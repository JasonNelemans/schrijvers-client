const initialState = {
  paragraphs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY_INFO_SUCCES":
      return {
        ...action.payload,
        paragraphs: [...action.payload.paragraphs],
      };

    case "TITLECLICKED_UPDATED":
      return {
        ...state,
        titleClicked: action.payload,
      };
    default:
      return state;
  }
};
