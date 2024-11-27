import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <Navbar />
      <main className="main">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
