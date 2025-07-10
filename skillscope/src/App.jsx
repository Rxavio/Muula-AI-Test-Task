import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
