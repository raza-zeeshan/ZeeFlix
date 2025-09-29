import { Link } from "react-router-dom";
export default function ErrorList({ isError }) {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card bg-black m-auto text-center">
          <div className="card-body my-5">
            <h2>Oops!!!</h2>
            <h1 className="text-danger fw-bolder mb-5">{isError}</h1>
          </div>
          <div>
            <Link to="/" className="btn btn-info mb-4">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
