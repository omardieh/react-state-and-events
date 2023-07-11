function MovieCard(props) {
  // JS here
  const { movie, handleDelete } = props;

  return (
    // JSX here
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {/* {movie.hasOscars && <p> Got an Oscar! </p>}
      {!movie.hasOscars && <p> No Oscar </p>} */}

      {movie.hasOscars ? <p> Got an Oscar! </p> : <p> No Oscar </p>}
      <button onClick={() => handleDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
