import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails";
import { Movie, useSearchMoviesContext } from "../contexts/searchMoviesContext";

export interface MovieDetailsProps extends Movie {
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
}

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({} as MovieDetailsProps);
  const params = useParams();
  const { movies } = useSearchMoviesContext();

  const id = movies.find((movie) => movie.slug === params.id)?.id || "";

  useEffect(() => {
    let mounted = true;
    if (id !== "" && mounted) {
      fetchMovie(id);
    }

    return () => {
      mounted = false;
    };
  }, [id]);

  const fetchMovie = async (id: number) => {
    const request = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const res = await request.json();

    if (res.status === "ok") {
      setMovie(res.data.movie);
    }
    return;
  };

  return (
    <div>
      <MovieDetails {...movie} />
    </div>
  );
}
