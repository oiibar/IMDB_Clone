// page.js
"use client";

import { useEffect, useState } from "react";
import getData from "../lib/fetch";

export default function Popular() {
  const [popular, setPopular] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(
          `https://api.themoviedb.org/3/movie/popular?api_key=e35efef9356eaebe3f989d02062900c9`
        );
        setPopular(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  if (isLoading) return <p>Loading...</p>;

  // Check if popular is null or if results is not defined
  if (!popular || !popular.results) return <p>No popular movies</p>;

  return (
    <div className="pl-10 pr-5">
      <h1 className="my-10 text-4xl font-semibold">Popular</h1>
      <div className="flex flex-wrap justify-between mt-4">
        {popular.results.map((result) => (
          <div
            key={result.id}
            className="max-w-sm cursor-pointer text-black mb-4 mr-5 p-6 bg-lt border border-gray-200 rounded-lg shadow cursor-pointer"
            onClick={() => handleMovieClick(result)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            />
            <p>{result.original_title}</p>
            <p>{result.release_date}</p>
            <p>{result.vote_average}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/3 text-black">
            <p>{selectedMovie.original_title}</p>
            <p>{selectedMovie.overview}</p>
            <p>{selectedMovie.release_date}</p>
            <button
              onClick={closeModal}
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
