import { useContext, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";

function Home() {
  const { movies, setMovies, searchTerm, setSearchTerm } =
    useContext(MovieContext);

  const API_KEY = "53e8e181";
  const resultsRef = useRef(null);

  const searchMovies = async () => {
    if (!searchTerm) return;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    const data = await res.json();
    setMovies(data.Search || []);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <div className="hero">
        <h1>Search. Explore. Enjoy Cinema Like Never Before</h1>
        <p>Search something to start 🎬</p>

        <div className="search-box">
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search movies..."
          />
          <button onClick={searchMovies}>Search</button>
        </div>
      </div>

      {movies.length > 0 && (
        <div ref={resultsRef} className="movie-grid">
          {movies.map(m => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
