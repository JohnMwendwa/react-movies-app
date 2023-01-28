import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
