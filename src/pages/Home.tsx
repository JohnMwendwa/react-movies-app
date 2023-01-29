import MovieCard from "../components/MovieCard";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function Home() {
  const { movies } = useSearchMoviesContext();
  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-2 hidden md:block">
        Download YTS YIFY movies: HD smallest size
      </h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
