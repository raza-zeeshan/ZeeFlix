import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import Shimmer from "../pages/Shimmer";
import ErrorList from "../pages/ErrorList";
import Search from "../pages/Search";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  async function fetchMovies() {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=2adcf282`
      );
      const data = response.data;

      if (data.Response === "True") {
        setMovies(data.Search);
        setIsError("");
      } else {
        setMovies([]); // Ensure movies is always an array
        setIsError(data.Error || "No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Prevent undefined
      setIsError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Search
          setSearch={setSearch}
          search={search}
          fetchMovies={fetchMovies}
        />
        <hr className="bg-white" />
        <br />
        {search.length === 0 && (
          <h3 className="text-danger">Please enter a search term.</h3>
        )}
        {search && (
          <h3 className="text-white">Showing results for "{search}"</h3>
        )}
        <div className="row">
          {loading && <Shimmer />}
          {!loading && isError && (
            <div className="col-10 m-auto text-center">
              <h2 className="text-danger my-5">{isError}</h2>
            </div>
          )}
          {!loading &&
            !isError &&
            movies.map((movie, index) => (
              <div
                className="col-3 text-center my-4 "
                key={`${movie.imdbID}-${index}`}
              >
                <Link to={`/movies/${movie.imdbID}`}>
                  <Card movie={movie} />
                </Link>
              </div>
            ))}

          {isError && <ErrorList isError={isError} />}
        </div>
      </div>
    </>
  );
}
