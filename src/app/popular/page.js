// page.js
"use client";

import { useEffect, useState } from "react";
import getPopular from "./fetch";

export default function Movies() {
  const [popular, setPopular] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopular();
        setPopular(data);
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
  if (!popular || !popular.results) return <p>No popular movies</p>;

  return (
    <div>
      <h1 className="my-10 text-4xl font-semibold">Popular</h1>
      <div className="flex items-center text-center justify-between flex-wrap">
        {popular.results.map((result) => (
          <div key={result.id} className="mr-5">
            <p>{result.original_title}</p>
            <p>{result.release_date}</p>
            <p>{result.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
