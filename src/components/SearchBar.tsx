import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

function SearchBar() {
  const { query, setQuery } = useSearchMoviesContext();
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Quick Search Movies..."
        className="border border-green-400 outline-green-400 px-4 py-1 rounded-full"
      />
    </div>
  );
}

export default SearchBar;
