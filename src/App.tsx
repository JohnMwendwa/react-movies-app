import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { SearchMoviesProvider } from "./contexts/searchMoviesContext";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

export const BASE_URL = "/";

function App() {
  return (
    <SearchMoviesProvider>
      <Layout>
        <Routes>
          <Route path={BASE_URL} element={<Home />} />
          <Route
            path={`${BASE_URL}movies/:id`}
            element={<MovieDetailsPage />}
          />
          <Route path={`${BASE_URL}page/:pageId`} element={<MoviesPage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </SearchMoviesProvider>
  );
}

export default App;
