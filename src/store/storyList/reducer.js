const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STORIES_SUCCES':
      return [...action.payload]

    case 'ADD_RATING': 
      return [...state].map(story => {
        if(story.id === action.payload.storyId) {
          return {
            ...story,
            ratings: [...story.ratings, action.payload]
          }
        } else {
          return story;
        }
      })

    default: 
      return state;
  }
}