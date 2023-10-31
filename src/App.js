import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Citizenship from "./pages/citizenship/Citizenship";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          // Can add more routes for more pages.
          <Route path="/" element={<Home />} />
          <Route path="/citizenship" element={<Citizenship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
