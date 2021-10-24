import React from "react";
import "./StatsElement.css";
const StatsElement = ({ name, value }) => {
  return (
    <div className="stats-element">
      <p>{name}</p>
      <h3>{value}</h3>
    </div>
  );
};

export default StatsElement;
