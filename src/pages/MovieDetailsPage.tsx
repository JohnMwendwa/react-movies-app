import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails";
import { Movie, useSearchMoviesContext } from "../contexts/searchMoviesContext";
import NotFoundPage from "./404";
import MovieDetailsSkeleton from "../components/loading/MovieDetailsSkeleton";

export interface MovieDetailsProps extends Movie {
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
}

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({} as MovieDetailsProps);
  const [movieId, setMovieId] = useState<Number | String>("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { movies } = useSearchMoviesContext();

  const id = movies.find((movie) => movie.slug === params.id)?.id || "";

  // Fetch movie details when the movie id chnages
  useEffect(() => {
    if (id) {
      fetchMovie();
      setMovieId(id);
    }
  }, [id]);

  const fetchMovie = async () => {
    setLoading(true);

    const request = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const res = await request.json();

    setLoading(false);
    if (res.status === "ok") {
      setMovie(res.data.movie);
    }
    return;
  };

  if (loading) {
    return <MovieDetailsSkeleton />;
  } else if (!movieId) {
    return <NotFoundPage />;
  } else {
    return (
      <div>
        <MovieDetails {...movie} />
      </div>
    );
  }
}
