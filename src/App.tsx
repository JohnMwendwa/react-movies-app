import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { SearchMoviesProvider } from "./contexts/searchMoviesContext";
import Footer from "./layout/Footer";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const BASE_URL = "/react-movies-app/";

function App() {
  return (
    <>
      <SearchMoviesProvider>
        <NavBar />
        <Layout>
          <Routes>
            <Route path={BASE_URL} element={<Home />} />
            <Route
              path={`${BASE_URL}movies/:id`}
              element={<MovieDetailsPage />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </SearchMoviesProvider>
      <Footer />
    </>
  );
}

export default App;
