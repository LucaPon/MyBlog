import React from "react";
import StatsElement from "./StatsElement/StatsElement";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <h2>Stats</h2>
      <div className="stats-elements">
        <StatsElement />
        <StatsElement />
        <StatsElement />
        <StatsElement />
      </div>
    </div>
  );
};

export default Stats;
