import React, { useContext, useEffect } from "react";
import RankingRow from "./RankingRow/RankingRow";

import { BlogContext } from "../../shared/BlogContext";
import { RankingContext } from "../../shared/RankingContext";
import FlipMove from "react-flip-move";

const Ranking = () => {
  const [rankingList, setRankingList] = useContext(RankingContext);
  const [users, posts] = useContext(BlogContext);

  const updateRanking = () => {
    var list = users.map((user) => {
      return {
        email: user.email,
        posts: posts.filter((post) => post.userId === user.id).length,
      };
    });

    list.sort((a, b) => b.posts - a.posts);

    setRankingList(list);
  };

  useEffect(() => {
    updateRanking();
  }, [posts]);

  return (
    <div className="ranking">
      <h2>Classifica</h2>
      <FlipMove>
        {rankingList?.map((rankingElement, index) => (
          <div key={rankingElement.email}>
            <RankingRow
              key={rankingElement.email}
              index={index}
              element={rankingElement}
            />
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default Ranking;
