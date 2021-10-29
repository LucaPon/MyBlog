import "./App.css";
import Stats from "./components/Stats/Stats";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Ranking from "./components/Ranking/Ranking";
import Posts from "./components/Posts/Posts";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "./shared/Service";
import { UserContext } from "./shared/UserContext";
import Loading from "./components/Loading/Loading";
import { BlogContext } from "./shared/BlogContext";
import { RankingContext } from "./shared/RankingContext";
import Celebration from "./components/Celebration/Celebration";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [rankingList, setRankingList] = useState(null);

  const [position, setPosition] = useState(-1);

  const loadData = () => {
    fetchData().then(([users, posts]) => {
      setUsers(users);
      setPosts(posts);
      setIsPending(false);
    });
  };

  const addPost = (post) => {
    setPosts((posts) => [post, ...posts]);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setPosition(-1);
  }, [loggedUser]);

  const getRankingPosition = () => {
    const rankingElement = rankingList.filter(
      (element) => element.email === loggedUser.email
    )[0];
    var position = rankingList.indexOf(rankingElement) + 1;

    return position;
  };

  useEffect(() => {
    if (rankingList !== null && loggedUser !== null) {
      var newPosition = getRankingPosition();
      setPosition(newPosition);
    }
  }, [rankingList]);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
          <Nav />
          {isPending && <Loading />}

          {!isPending && (
            <RankingContext.Provider value={[rankingList, setRankingList]}>
              <BlogContext.Provider value={[users, posts]}>
                <Celebration position={position} />

                <div className="content">
                  <div className="left">
                    <Switch>
                      <Route exact path="/login">
                        {loggedUser ? <Redirect to="/" /> : <Login />}
                      </Route>
                      <Route exact path="/">
                        {!loggedUser ? <Redirect to="/login" /> : <Posts />}
                      </Route>
                      <Route exact path="/account">
                        {!loggedUser ? (
                          <Redirect to="/login" />
                        ) : (
                          <div>
                            <Stats />
                            <Posts
                              showAdd={true}
                              filterUser={loggedUser.id}
                              addPost={addPost}
                            />
                          </div>
                        )}
                      </Route>
                    </Switch>
                  </div>

                  <Ranking />
                </div>
              </BlogContext.Provider>
            </RankingContext.Provider>
          )}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
