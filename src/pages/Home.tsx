import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import SearchBar from "../components/SearchBar";

interface HomeProps {
  openSearch: boolean;
}

export default function Home({ openSearch }: HomeProps) {
  const { movies } = useSearchMoviesContext();

  return (
    <>
      <div
        className={`flex justify-center  py-4 absolute z-10 top-16 bg-gray-50 border-y left-0 right-0 ${
          openSearch ? "block" : "hidden"
        } md:hidden`}
      >
        <SearchBar />
      </div>
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
