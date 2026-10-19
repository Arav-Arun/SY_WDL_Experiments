import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Plots from "./Plots";

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>KisanSaathi Irrigation Portal</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/plots">Plots</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
