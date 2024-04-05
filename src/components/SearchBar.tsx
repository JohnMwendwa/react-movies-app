import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

function SearchBar() {
  const { query, setQuery, onPageChange } = useSearchMoviesContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onPageChange(1);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Quick Search Movies..."
      className="border border-orange-400 outline-orange-400 px-4 py-1 rounded-full text-orange-700 font-medium"
    />
  );
}

export default SearchBar;
