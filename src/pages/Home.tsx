import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import HomePageSkeleton from "../components/loading/HomePageSkeleton";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function Home() {
  const { movies, loading, setIsMovieDetailsPage } = useSearchMoviesContext();

  useEffect(() => {
    setIsMovieDetailsPage(false);
  }, []);

  if (loading) return <HomePageSkeleton />;
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
