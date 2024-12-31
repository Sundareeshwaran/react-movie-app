import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import logo from "./logo.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=ba7199bc";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <div className="logo-img">
        <img src={logo} alt="" />
        <h1> Movie Search App</h1>
      </div>

      <div className="search">
        <input
          placeholder="Search for movies"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
