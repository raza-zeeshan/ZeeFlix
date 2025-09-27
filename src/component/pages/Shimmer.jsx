import React from "react";
// import "./Shimmer.css"; // Make sure this CSS file exists

export default function Shimmer() {
  const placeholders = Array.from({ length: 12 });

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          {placeholders.map((_, index) => (
            <div className="col-3 text-center mt-4" key={index}>
              <div className="card shimmer-card">
                <div className="card-header shimmer-img"></div>
                <div className="card-body shimmer-text"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
