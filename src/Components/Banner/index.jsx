import React, { useEffect, useLayoutEffect, useState } from "react";
import "./banner.css";
import { useDispatch, useSelector } from "react-redux";
import { TMDBMoviesAction } from "../../redux/actions/movies";
import requests from "../../moviesRequests";

/**
 * @author
 * @function Banner
 **/

const Banner = () => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.MoviesReducer);
  const { netflixOriginalMovies } = moviesReducer;
  const [netflixOriginalMoviesState, setNetflixOriginalMovies] = useState([]);

  useLayoutEffect(() => {
    dispatch(TMDBMoviesAction(requests.fetchNetflixOriginal));
  }, []);

  useEffect(() => {
    if (netflixOriginalMovies.length) {
      setNetflixOriginalMovies(
        netflixOriginalMovies[
          Math.floor(Math.random() * netflixOriginalMovies.length - 1)
        ]
      );
    }
  }, [netflixOriginalMovies]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${netflixOriginalMoviesState?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <div className="banner__title">
          {netflixOriginalMoviesState?.title ||
            netflixOriginalMoviesState?.name ||
            netflixOriginalMoviesState?.original_name}
        </div>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${netflixOriginalMoviesState?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
