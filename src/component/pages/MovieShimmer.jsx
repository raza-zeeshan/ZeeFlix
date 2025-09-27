import React from "react";
import "../../../src/App.css";

export default function MovieShimmer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 m-auto">
          <div className="card my-5 bg-dark  shimmer-card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 text-center">
                  <div className="shimmer-img rounded my-4"></div>
                </div>
                <div className="col-8 bg-black rounded">
                  <div className="m-4 shimmer-title"></div>
                  <div className="mx-3">
                    {[...Array(8)].map((_, i) => (
                      <div className="shimmer-line mt-3" key={i}></div>
                    ))}
                    <div className="text-center my-2">
                      <div className="shimmer-button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
