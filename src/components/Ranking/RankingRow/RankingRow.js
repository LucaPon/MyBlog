import React, { useContext } from "react";
import { UserContext } from "../../../shared/UserContext";
import "./RankingRow.css";
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

export default RankingRow;
