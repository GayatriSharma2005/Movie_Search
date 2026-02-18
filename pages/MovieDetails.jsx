import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { addToFavorites } = useContext(FavoritesContext);

  const API_KEY = "53e8e181";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <h2 className="center">Loading...</h2>;

  if (movie.Response === "False")
    return <h2 className="center">Movie Not Found</h2>;

  const addFav = () => {
    addToFavorites(movie);
    alert("Movie added to Favourite ❤️");
  };

  return (
    <div className="detail-container">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="detail-card">

        <img src={movie.Poster} alt={movie.Title} />

        <div className="detail-info">
          <h1>{movie.Title}</h1>

          <p><b>Year:</b> {movie.Year}</p>
          <p><b>Genre:</b> {movie.Genre}</p>
          <p><b>Director:</b> {movie.Director}</p>
          <p><b>Actors:</b> {movie.Actors}</p>
          <p><b>Language:</b> {movie.Language}</p>
          <p><b>IMDB Rating:</b> ⭐ {movie.imdbRating}</p>

          <h3>Plot</h3>
          <p>{movie.Plot}</p>

          <button className="fav-btn" onClick={addFav}>
            ❤️ Add to Favourite
          </button>
        </div>

      </div>
    </div>
  );
}

export default MovieDetails;
