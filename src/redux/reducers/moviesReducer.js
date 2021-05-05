let initState = {
  netflixOriginalMovies: [],
  allMovies: [],
};

export const MoviesReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALL_MOVIES":
      return {
        ...state,
        allMovies: payload,
      };
    case "NETFLIX_ORIGINAL_MOVIES":
      return {
        ...state,
        netflixOriginalMovies: payload,
      };
    default:
      return state;
  }
};
