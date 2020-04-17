const initialState = {
  paragraphs: [],
  user: {},
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
        paragraphs: [ action.payload ]
      }
    
      case "NEXT_PARAGRAPH": 
        return {
          ...state,
          paragraphs: [...state.paragraphs, action.payload]
        }
    default:
      return state;
  }
};
