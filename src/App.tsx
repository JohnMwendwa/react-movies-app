import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
