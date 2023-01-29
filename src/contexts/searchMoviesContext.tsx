import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

interface SearchMoviesContextProps {
  movies: Movie[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
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

  useEffect(() => {
    let mount = true;
    if (mount) {
      fetchMovies();
    }
    return () => {
      mount = false;
    };
  }, []);

  const fetchMovies = async () => {
    const request = await fetch("https://yts.mx/api/v2/list_movies.json");
    const res = await request.json();

    if (res.status === "ok") {
      setMovies(res.data.movies);
    }
  };

  return (
    <SearchMoviesContext.Provider value={{ movies, query, setQuery }}>
      {children}
    </SearchMoviesContext.Provider>
  );
};
