import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

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
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    console.log(movies);
  }
  if (movies.length === 0) {
    return <h2 className="text-center text-info my-5">Loading...</h2>;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-3 text-center mt-4" key={movie.imdbID}>
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
