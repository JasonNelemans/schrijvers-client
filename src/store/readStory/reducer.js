const initialState = {
  paragraphs: [],
  user: {},
  lastParagraph: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY_BY_ID":
      return {
        ...state,
        ...action.payload,
        user: { ...action.payload.user },
      };

    case "FIRST_PARAGRAPH":
      return {
        ...state,
        paragraphs: [],
        lastParagraph: false,
      };

    case "FETCHED_PARAGRAPH":
      return {
        ...state,
        paragraphs: [...state.paragraphs, action.payload],
      };

    case "LAST_PARAGRAPH":
      return {
        ...state,
        lastParagraph: true,
      };

    default:
      return state;
  }
};
