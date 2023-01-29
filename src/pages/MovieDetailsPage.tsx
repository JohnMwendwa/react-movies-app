import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails";
import { Movie, useSearchMoviesContext } from "../contexts/searchMoviesContext";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({} as Movie);
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
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
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
