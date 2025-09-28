export default function ErrorList({ isError }) {
  return (
    <>
      <div className="container-fluid">
        <div className="card bg-black m-auto text-center">
          <div className="card-body">
            <h2 className="card-title">Oops!!!</h2>
            <h2 className="card-text">{isError}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
