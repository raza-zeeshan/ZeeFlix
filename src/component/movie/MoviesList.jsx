import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=batman&apikey=2adcf282"
      );
      const data = response.data;
      setMovies(data.Search);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    console.log(movies);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-3 text-center my-5" key={movie.imdbID}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
