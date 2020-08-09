import React from "react";

const Stats = () => {
  return (
    <div className="stat-div-main">
      <h4>Your Stats</h4>
      <div className="stat-div">
        <span className="stat-header">
          <b>Reviews written:</b>
        </span>
        <span className="text-bold">100,000</span>
      </div>
      <div className="stat-div">
        <span className="stat-header">
          <b>Total number of likes:</b>
        </span>
        <span className="text-bold">100,000</span>
      </div>
      <div className="stat-div">
        <span className="stat-header">
          <b>Total number of dislikes:</b>
        </span>
        <span className="text-bold">100,000</span>
      </div>
    </div>
  );
};
export default Stats;
