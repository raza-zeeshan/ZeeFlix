export default function Search({ setSearch, search, fetchMovies }) {
  return (
    <>
      <div className="row my-3">
        <div className="input-group my-3 col-6 m-auto">
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Search movies..."
            aria-label="Search movies..."
            aria-describedby="button-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-md btn-cyan"
            type="submit"
            id="button-addon2"
            onClick={fetchMovies}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
