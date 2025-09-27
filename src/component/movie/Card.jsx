export default function Card({ movie }) {
  const { Title, Poster } = movie;
  return (
    <div className="card bg-dark text-white">
      <div className="card-header mt-3">
        <img
          src={Poster}
          alt={Title}
          className="img-fluid rounded-2"
          style={{
            boxShadow: "0px 0px 20px 10px rgba(21, 158, 231, 0.25)",
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <strong>{Title}</strong>
        </h5>
        {/* <p className="card-text">{""}</p> */}
      </div>
    </div>
  );
}
