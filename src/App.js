import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Citizenship from "./pages/citizenship/Citizenship";
import Docs from "./pages/docs/Docs";
import Heads from "./pages/heads/Heads";

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
          <Route path="/heads" element={<Heads />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
