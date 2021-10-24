import React, { useContext } from "react";
import StatsElement from "./StatsElement/StatsElement";
import "./Stats.css";
import { RankingContext } from "../../shared/RankingContext";
import { UserContext } from "../../shared/UserContext";

const Stats = () => {
  const [rankingList, setRankingList] = useContext(RankingContext);
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const rankingElement = rankingList.filter(
    (element) => element.email === loggedUser.email
  )[0];
  const index = rankingList.indexOf(rankingElement);
  const before =
    index === 0 ? 0 : rankingList[index - 1].posts - rankingElement.posts;
  const after =
    index === rankingList.length - 1
      ? 0
      : rankingElement.posts - rankingList[index + 1].posts;
  return (
    <div className="stats">
      <h2>Stats</h2>
      <div className="stats-elements">
        <StatsElement name="Post" value={rankingElement.posts} />
        <StatsElement name="Posizione" value={index + 1} />
        <StatsElement name="Precedente" value={`-${before}`} />
        <StatsElement name="Successivo" value={`+${after}`} />
      </div>
    </div>
  );
};

export default Stats;
