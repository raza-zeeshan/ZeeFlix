export default function Card({ movie }) {
  const { Title, Poster } = movie;
  return (
    <div className="card bg-black text-white">
      <div className="card-header">
        <img
          src={Poster}
          alt={Title}
          className="img-fluid"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 10px rgba(21, 157, 231, 0.2)",
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <strong>{Title}</strong>
        </h5>
        <p className="card-text">{""}</p>
      </div>
    </div>
  );
}
