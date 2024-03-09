export default function Card({ arr, event }) {
  return (
    <div
      key={arr.id}
      className="max-w-sm cursor-pointer text-black mb-4 mr-5 p-6 bg-lt border border-gray-200 rounded-lg shadow"
      onClick={() => event(arr)}
    >
      <img
        className="pb-6"
        src={`https://image.tmdb.org/t/p/original${arr.poster_path}`}
      />
      <p className="font-bold text-xl">{arr.original_title}</p>
      <p>{arr.release_date}</p>
      <div className="flex items-center text-center justify-center">
        <img src="star.png" className="mr-2 w-4" />
        <p>{Math.round(arr.vote_average * 10) / 10}</p>
      </div>
    </div>
  );
}
