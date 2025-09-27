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
  const { Title, Year, Genre, Director, Plot, Poster } = movie || {};
  if (!movie) {
    return <h2 className="text-center text-info my-5">Loading...</h2>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 text-center m-auto my-5">
            <div className="card">
              <div className="card-header">
                <h2 className="text-info">{Title}</h2>
              </div>
              <div className="card-body">
                <img src={Poster} alt={Title} className="img-fluid" />
                <p className="mt-3">{Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
