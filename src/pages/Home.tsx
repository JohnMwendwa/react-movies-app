import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function Home() {
  const { movies } = useSearchMoviesContext();

  return (
    <>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,_240px)] place-content-center ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
