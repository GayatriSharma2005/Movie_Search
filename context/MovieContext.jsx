import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, searchTerm, setSearchTerm }}
    >
      {children}
    </MovieContext.Provider>
  );
}
