export default function Card({ movie }) {
  const { Title, Poster } = movie;
  return (
    <div className="card">
      <div className="card-header">
        <img src={Poster} alt={Title} className="img-fluid" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{""}</p>
      </div>
    </div>
  );
}
