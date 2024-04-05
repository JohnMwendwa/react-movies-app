import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import Home from "./Home";
import NotFoundPage from "./404";

const MoviesPage = () => {
  const { onPageChange } = useSearchMoviesContext();
  const { pageId } = useParams();

  useEffect(() => {
    if (pageId && !Number.isNaN(Number(pageId))) {
      onPageChange(Number(pageId));
    }
  }, [pageId]);

  if (Number.isNaN(Number(pageId))) {
    return <NotFoundPage />;
  }

  return <Home />;
};

export default MoviesPage;
