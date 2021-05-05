import React, { useLayoutEffect, useState } from "react";
import "./rows.css";
import axios from "axios";

/**
 * @author
 * @function Rows
 **/

const Rows = ({ title, url, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useLayoutEffect(() => {
    async function fetchData() {
      let resp = await axios.get(`https://api.themoviedb.org/3${url}`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTRhMWY2MGMxODU1YTg2MGUzNGY2OTkwNWY0YTBjMCIsInN1YiI6IjYwODcxOTMxNDM1YWJkMDAzZjY4M2YzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YOWvHoL7s_i4Tt_rGn5hxK271-AsoLbUKVqlgb__84",
        },
      });
      if (resp.data.results) {
        setMovies(resp.data.results);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.length
          ? movies.map((movie) => {
              return (
                <img
                  className={`row__poster ${
                    isLargeRow && "row__postersLarger"
                  }`}
                  alt={title}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Rows;
