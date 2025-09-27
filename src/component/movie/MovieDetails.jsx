import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  async function fetchMovieDetails() {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=2adcf282`
      );
      const data = response.data;
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
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
  if (!movie) {
    return <h2 className="text-center text-info my-5">Loading...</h2>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10  m-auto ">
            <div className="card my-5 bg-dark text-white">
              <div
                className="card-body"
                style={{
                  boxShadow: "0px 0px 20px 10px rgba(21, 158, 231, 0.25)",
                }}
              >
                <div className="row">
                  <div className="col-4">
                    <img
                      src={Poster}
                      alt={Title}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-8">
                    <div className="bg-black p-1 rounded text-center ">
                      <h2>{Title}</h2>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
