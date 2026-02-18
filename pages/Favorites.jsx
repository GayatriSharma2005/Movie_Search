import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
    <div>
      <h1 className="page-title">❤️ My Favorites</h1>

      {favorites.length === 0 ? (
        <p className="empty">No favorites yet</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Favorites;
