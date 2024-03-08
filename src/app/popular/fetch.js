// fetch.js
export default async function getPopular() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e35efef9356eaebe3f989d02062900c9`
  );
  const data = await response.json();
  return data;
}
