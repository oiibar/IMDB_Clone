// page.js
"use client";

import { useState } from "react";
import getData from "./lib/fetch";
import Popup from "./components/popup";
import Card from "./components/card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getData(
        `https://api.themoviedb.org/3/search/movie?api_key=e35efef9356eaebe3f989d02062900c9&query=${search}`
      );
      setMovies(data.results || []); // Ensure 'results' is defined, otherwise set an empty array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("An error occurred while fetching movies.");
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="px-10">
      <h1 className="my-10 text-4xl font-semibold">Home</h1>
      <form className="flex items-center max-w-xs mx-auto mb-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="shadow mr-2 appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Movie name..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <div className="flex flex-wrap justify-between mt-4">
          {movies.map((movie) => (
            <Card arr={movie} event={handleMovieClick} />
          ))}
        </div>
      )}
      {selectedMovie && <Popup arr={selectedMovie} btn={closeModal} />}
    </div>
  );
}
