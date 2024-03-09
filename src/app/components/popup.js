export default function Popup({ arr, btn }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-1/3 text-black">
        <p className="font-bold text-xl mb-3">{arr.original_title}</p>
        <p className="mb-5">{arr.overview ? arr.overview : "No details"}</p>
        <button
          onClick={btn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}
