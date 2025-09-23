import { Link } from "react-router-dom";
import movie from "../../assets/movie.png";
export default function Home() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row m-5">
          <div className="col-6 b1 d-flex justify-content-center align-items-center flex-column">
            <p className="text-white">EXPLORE THE LATEST MOVIES, SERIES</p>

            <h1 className="home-h">ZeeFlix</h1>
            <h1>Movies, Series , TV Shows & more</h1>
            <p className="text-white">
              Discover latest releases movies, Top rated shows and more
            </p>
            <Link to="/movies" className="btn btn-info">
              Explore Now
            </Link>
          </div>
          <div className="col-6 text-center">
            <img src={movie} alt="" className="img-f" />
          </div>
        </div>
      </div>
    </>
  );
}
