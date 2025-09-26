import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/pages/Navbar";
import Footer from "./component/pages/Footer";
import ErrorPage from "./component/pages/ErrorPage";
import MoviesList from "./component/movie/MoviesList";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
