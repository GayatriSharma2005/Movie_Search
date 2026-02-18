import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import "./App.css";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  

  return (
    <nav className="navbar">
      <h2 className="logo">🎬 CineVerse</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button
  className="theme-btn"
  onClick={() =>
    document.body.classList.toggle("light")
  }
>
  🌙 / ☀️
</button>

      </div>
    </nav>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
