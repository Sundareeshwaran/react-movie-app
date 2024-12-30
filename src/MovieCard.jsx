import React from "react";

const MovieCard = ({ movie }) => {
  const imdbUrl = "https://www.imdb.com/title/";
  const goToImdb = () => {
    window.open(imdbUrl + movie.imdbID, "_blank");
  };
  return (
    <div className="movie" onClick={goToImdb}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
