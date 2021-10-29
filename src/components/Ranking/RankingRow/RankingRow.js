import React, { useContext } from "react";
import { UserContext } from "../../../shared/UserContext";
import "./RankingRow.css";
import PropTypes from "prop-types";

const RankingRow = ({ index, element }) => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  return (
    <div className={`row ${index < 3 && "row-first"}`}>
      <div className="left">{index + 1}</div>
      <div className="separator" />
      <div
        className={`center ${
          loggedUser && loggedUser.email === element.email && "bold"
        }`}
      >
        {element.email}
      </div>
      <div className="separator" />
      <div className="right">{element.posts}</div>
    </div>
  );
};

RankingRow.propTypes = {
  index: PropTypes.number,
  element: PropTypes.object,
};

export default RankingRow;
