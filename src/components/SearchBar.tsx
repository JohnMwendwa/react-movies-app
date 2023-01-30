import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

function SearchBar() {
  const { query, setQuery } = useSearchMoviesContext();
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Quick Search movvies..."
      />
    </div>
  );
}

export default SearchBar;
