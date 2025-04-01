import React from "react";
import { SearchMoviesProvider } from "./contexts/searchMoviesContext";
import Layout from "./layout/Layout";
import Router from "./router/Router";

function App() {
  return (
    <SearchMoviesProvider>
      <Layout>
        <Router/>
      </Layout>
    </SearchMoviesProvider>
  );
}

export default App;
