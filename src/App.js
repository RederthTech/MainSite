import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Citizenship from "./pages/citizenship/Citizenship";
import Docs from "./pages/docs/Docs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* // Can add more routes for more pages. */}
          <Route path="/" element={<Home />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
