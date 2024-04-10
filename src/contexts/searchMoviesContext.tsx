import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

interface SearchMoviesContextProps {
  movies: Movie[];
  currentPage: number;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  query: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isMovieDetailsPage: boolean;
  setIsMovieDetailsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Movie {
  id: number;
  url: string;
  imd_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: [
    {
      url: string;
      hash: string;
      quality: string;
      type: string;
      seed: number;
      peers: number;
      size: string;
      size_bytes: number;
      date_uploaded: string;
      date_uploaded_unix: number;
    }
  ];
}

interface SearchMoviesProviderProps {
  children: ReactNode;
}

const SearchMoviesContext = createContext({} as SearchMoviesContextProps);

export const useSearchMoviesContext = () => {
  return useContext(SearchMoviesContext);
};

export const SearchMoviesProvider = ({
  children,
}: SearchMoviesProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const [totalCount, setTotalCount] = useState(0);
  const slug = useLocation();
  const [currentPage, setCurrentPage] = useState(() => {
    let pathname = slug.pathname.split("/");
    // Check if the pathname has a number
    if (pathname.length > 2 && !isNaN(Number(pathname[2]))) {
      return Number(pathname[2]);
    }
    return 1;
  });
  // Check if the user is on the movie details page
  const [isMovieDetailsPage, setIsMovieDetailsPage] = useState(false);

  let limit = 20;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let mount = true;
    if (mount && debouncedQuery) {
      fetchSearchedMovie(currentPage);
    }

    if (mount && !debouncedQuery) {
      fetchMovies(currentPage);
    }

    return () => {
      mount = false;
    };
  }, [debouncedQuery, currentPage]);

  // Default movies to display
  const fetchMovies = async (page: number) => {
    setLoading(true);

    const request = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${page}`
    );
    const res = await request.json();

    if (res.status === "ok") {
      setLoading(false);
      setTotalCount(res.data.movie_count);
      setMovies(res.data.movies);
      return;
    }
    setLoading(false);
  };

  // Movies searched by the user
  const fetchSearchedMovie = async (page: number) => {
    setLoading(true);

    const request = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${page}&query_term=${debouncedQuery}`
    );
    const res = await request.json();

    if (res.status === "ok") {
      setLoading(false);
      if (res.data.movies) {
        setTotalCount(res.data.movie_count);
        setMovies(res.data.movies);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <SearchMoviesContext.Provider
      value={{
        movies,
        query,
        setQuery,
        loading,
        currentPage,
        totalCount,
        limit,
        onPageChange,
        setLoading,
        isMovieDetailsPage,
        setIsMovieDetailsPage,
      }}
    >
      {children}
    </SearchMoviesContext.Provider>
  );
};
