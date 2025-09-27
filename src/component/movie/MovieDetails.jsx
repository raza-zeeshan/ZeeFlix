import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieShimmer from "../pages/MovieShimmer";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  async function fetchMovieDetails() {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=2adcf282`
      );
      const data = response.data;
      setMovie(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
  }
  const {
    Title,
    Year,
    Genre,
    Director,
    Plot,
    Poster,
    Runtime,
    Actors,
    Type,
    imdbRating,
  } = movie || {};

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {loading && <MovieShimmer />}
          {!loading && (
            <div className="col-10  m-auto ">
              <div className="card my-5 bg-dark text-white">
                <div
                  className="card-body "
                  style={{
                    boxShadow: "0px 0px 20px 10px rgba(21, 158, 231, 0.25)",
                  }}
                >
                  <div className="row ">
                    <div className="col-4 text-center">
                      <img
                        src={Poster}
                        alt={Title}
                        className="img-fluid rounded my-4"
                        style={{
                          boxShadow:
                            "0px 0px 20px 10px rgba(21, 158, 231, 0.25)",
                        }}
                      />
                    </div>
                    <div className="col-8 bg-black rounded ">
                      <div className="m-4 rounded text-center ">
                        <h2>{Title}</h2>
                      </div>
                      <div className="mx-3">
                        <p className="mt-3">
                          <strong>Plot :</strong> {Plot}
                        </p>
                        <p className="mt-3">
                          <strong>Released Year:</strong> {Year}
                        </p>
                        <p className="mt-3">
                          <strong>Type:</strong> {Type}
                        </p>
                        <p className="mt-3">
                          <strong>Genre:</strong> {Genre}
                        </p>
                        <p className="mt-3">
                          <strong>Director:</strong> {Director}
                        </p>
                        <p className="mt-3">
                          <strong>Runtime:</strong> {Runtime}
                        </p>
                        <p className="mt-3">
                          <strong>Casts:</strong> {Actors}
                        </p>
                        <p className="mt-3">
                          <strong>IMDB Rating:</strong> {imdbRating}
                        </p>
                        <div className="text-center my-2">
                          <Link to="/movies" className="btn btn-info">
                            Back to Movies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
