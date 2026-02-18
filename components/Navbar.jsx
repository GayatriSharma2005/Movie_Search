import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">🎬 CineVerse</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button className="theme-btn" onClick={toggleTheme}>
          🌙 / ☀️
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
