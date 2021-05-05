const APP_KEY = "da4a1f60c1855a860e34f69905f4a0c0";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APP_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${APP_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APP_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APP_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APP_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APP_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APP_KEY}&with_genres=10749`,
  fetchDocumetaries: `/discover/movie?api_key=${APP_KEY}&with_genres=99`,
};

export default requests;
