import React from "react";
// import "./Shimmer.css"; // Make sure this CSS file contains the shimmer styles

export default function Shimmer() {
  const shimmerItems = Array(8).fill(0); // Simulate 8 loading cards

  return (
    <div className="row">
      {shimmerItems.map((_, index) => (
        <div className="col-3 text-center my-4" key={index}>
          <div className="shimmer-card">
            <div className="shimmer-img  m-auto img-fluid " />
            <div className="shimmer-text" />
          </div>
        </div>
      ))}
    </div>
  );
}
