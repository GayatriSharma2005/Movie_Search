import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const [msg, setMsg] = useState("");
  const isFav = favorites.some(m => m.imdbID === movie.imdbID);

  const handleFav = () => {
    if (isFav) {
      removeFromFavorites(movie.imdbID);
      setMsg("Removed from Favorites ❌");
    } else {
      addToFavorites(movie);
      setMsg("Added to Favorites ❤️");
    }
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      />

      <div className="card-info">
        <h3>{movie.Title}</h3>
        <button onClick={handleFav}>
          {isFav ? "Remove ❌" : "❤️"}
        </button>
      </div>

      {msg && <p className="fav-msg">{msg}</p>}
    </div>
  );
}

export default MovieCard;
