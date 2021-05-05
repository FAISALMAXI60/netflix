import React from "react";
import requests from "../../moviesRequests";
import Banner from "../Banner";
import Rows from "../Rows";
import NavBar from "./components/nav";
import "./HomeScreen.css";

/**
 * @author
 * @function HomeScreen
 **/

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <NavBar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Rows
        title="NETFLIX ORIGINAL"
        url={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Rows title="Trending Now" url={requests.fetchTrending} />
      <Rows title="Top Rated" url={requests.fetchTopRated} />
      <Rows title="Action Movies" url={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" url={requests.fetchDocumetaries} />
    </div>
  );
};

export default HomeScreen;
