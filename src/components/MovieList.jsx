import { useState } from "react";

// import the array of movie objects
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  function handleDelete(movieID) {
    const filteredMovies = movies.filter((m) => m._id !== movieID);
    setMovies(filteredMovies);
  }

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movie={movie}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default MovieList;