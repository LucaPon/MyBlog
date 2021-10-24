import React, { useContext, useEffect } from "react";
import RankingRow from "./RankingRow/RankingRow";
import "./Ranking.css";
import { BlogContext } from "../../shared/BlogContext";
import { RankingContext } from "../../shared/RankingContext";

const Ranking = () => {
  const [rankingList, setRankingList] = useContext(RankingContext);
  const [users, posts] = useContext(BlogContext);

  const computeRanking = () => {
    var list = users.map((user) => {
      return {
        email: user.email,
        posts: posts.filter((post) => post.userId === user.id).length,
      };
    });

    list.sort((a, b) => b.posts - a.posts);

    return list;
  };

  useEffect(() => {
    var newRankingList = computeRanking();

    setRankingList(newRankingList);
  }, [posts]);

  return (
    <div>
      <h2>Classifica</h2>
      {rankingList?.map((rankingElement, index) => (
        <RankingRow
          key={rankingElement.email}
          index={index}
          element={rankingElement}
        />
      ))}
    </div>
  );
};

export default Ranking;
