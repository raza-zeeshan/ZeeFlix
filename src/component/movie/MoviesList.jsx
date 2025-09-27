import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import Shimmer from "../pages/Shimmer";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=superman&apikey=2adcf282"
      );
      const data = response.data;
      setMovies(data.Search);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
    console.log(movies);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {loading && <Shimmer />}
          {!loading &&
            movies.map((movie) => (
              <div className="col-3 text-center my-4 " key={movie.imdbID}>
                <Link to={`/movies/${movie.imdbID}`}>
                  <Card movie={movie} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
