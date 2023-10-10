import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSearchMoviesContext } from "../contexts/searchMoviesContext";
import Home from "./Home";

const MoviesPage = () => {
  const { onPageChange, currentPage } = useSearchMoviesContext();
  const { pageId } = useParams();

  useEffect(() => {
    if (pageId) {
      onPageChange(parseInt(pageId));
    }
  }, [pageId]);
  return <Home />;
};

export default MoviesPage;
