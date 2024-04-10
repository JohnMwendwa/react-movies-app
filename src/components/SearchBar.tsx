import { Link } from "react-router-dom";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import { BASE_URL } from "../App";

function SearchBar() {
  const { query, setQuery, onPageChange, isMovieDetailsPage, movies } =
    useSearchMoviesContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onPageChange(1);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Quick Search Movies..."
        className="border border-orange-400 outline-orange-400 px-4 py-1 rounded-full text-orange-700 font-medium"
      />

      {query.length !== 0 && isMovieDetailsPage && movies.length !== 0 && (
        <div className="bg-gray-600/30 w-[300px] overflow-hidden overflow-y-auto max-h-[220px] md:max-h-96 shadow-md hide flex flex-col px-1 absolute top-12 -right-12 md:right-0 z-10 backdrop-blur-sm rounded-md">
          {movies.slice(0, 15).map((movie) => (
            <Link
              to={`${BASE_URL}movies/${movie.slug}`}
              onClick={() => setQuery("")}
              key={movie.id}
            >
              <div className="grid grid-cols-[50px_1fr]  border-b-2 py-2">
                <div>
                  <img
                    src={movie.medium_cover_image}
                    alt={movie.slug}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="rounded-md object-cover bg-gray-500 border-2"
                  />
                </div>
                <div className="ml-2 mt-2">
                  <h2 className="font-bold text- leading-4 mb-1">
                    {movie.title_english}
                  </h2>
                  <p className="text-sm">{movie.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
