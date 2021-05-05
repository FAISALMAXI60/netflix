import axios from "axios";

export const TMDBMoviesAction = (url) => async (dispatch) => {
  try {
    let resp = await axios.get(
      `https://api.themoviedb.org/3${url}`,
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTRhMWY2MGMxODU1YTg2MGUzNGY2OTkwNWY0YTBjMCIsInN1YiI6IjYwODcxOTMxNDM1YWJkMDAzZjY4M2YzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YOWvHoL7s_i4Tt_rGn5hxK271-AsoLbUKVqlgb__84",
        },
      }
    );
    if (resp.data.results) {
      dispatch({
        type: "NETFLIX_ORIGINAL_MOVIES",
        payload: resp.data.results,
      });
    }
    // console.log("here is the response", resp);
  } catch (err) {}
};

export const TMDBAllMoviesAction = (url) => async (dispatch) => {
  try {
    let resp = await axios.get(
      `https://api.themoviedb.org/3${url}`,
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTRhMWY2MGMxODU1YTg2MGUzNGY2OTkwNWY0YTBjMCIsInN1YiI6IjYwODcxOTMxNDM1YWJkMDAzZjY4M2YzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YOWvHoL7s_i4Tt_rGn5hxK271-AsoLbUKVqlgb__84",
        },
      }
    );
    if (resp.data.results) {
      dispatch({
        type: "ALL_MOVIES",
        payload: resp.data.results,
      });
    }
    // console.log("here is the response", resp);
  } catch (err) {}
};
