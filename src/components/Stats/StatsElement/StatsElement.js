import React from "react";
import "./StatsElement.css";
import PropTypes from "prop-types";

const StatsElement = ({ name, value }) => {
  return (
    <div className="stats-element">
      <p>{name}</p>
      <h3>{value}</h3>
    </div>
  );
};

StatsElement.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default StatsElement;
