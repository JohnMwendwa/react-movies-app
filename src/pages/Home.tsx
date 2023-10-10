import { useEffect } from "react";

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function Home() {
  const { movies, onPageChange } = useSearchMoviesContext();

  useEffect(() => {
    onPageChange(1);
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl text-center my-2 hidden md:block">
        Download YTS YIFY movies: HD smallest size
      </h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_210px)] place-content-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
