import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=2adcf282"
    );
    const data = response.data;
    setMovies(data);
    console.log(data);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-4 text-center my-5" key={movie.imdbID}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
