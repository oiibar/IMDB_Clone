// page.js
"use client";

import { useEffect, useState } from "react";
import getData from "../lib/fetch";

export default function NowPlaying() {
  const [now, setNow] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=e35efef9356eaebe3f989d02062900c9`
        );
        setNow(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  // Check if popular is null or if results is not defined
  if (!now || !now.results) return <p>No movies playing now</p>;

  return (
    <div className="pl-10 pr-5">
      <h1 className="my-10 text-4xl font-semibold">Now Playing</h1>
      <div className="flex flex-wrap justify-between mt-4">
        {now.results.map((result) => (
          <div
            key={result.id}
            className="max-w-sm text-black mb-4 mr-5 p-6 bg-lt border border-gray-200 rounded-lg shadow"
          >
            <p>{result.original_title}</p>
            <p>{result.release_date}</p>
            <p>{result.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
