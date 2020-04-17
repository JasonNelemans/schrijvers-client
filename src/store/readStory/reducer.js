const initialState = {
  paragraphs: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY_BY_ID":
      return {
        ...action.payload,
        paragraphs: [...action.payload.paragraphs],
        user: { ...action.payload.user },
      };
    default:
      return state;
  }
};
