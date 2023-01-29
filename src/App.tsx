import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { SearchMoviesProvider } from "./contexts/searchMoviesContext";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <SearchMoviesProvider>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </SearchMoviesProvider>
  );
}

export default App;
