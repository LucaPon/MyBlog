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
import { useState, useEffect } from "react/cjs/react.development";
import { fetchData } from "./shared/Service";
import { UserContext } from "./shared/UserContext";
import Loading from "./components/Loading/Loading";
import { BlogContext } from "./shared/BlogContext";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);

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

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
          <Nav />

          {isPending && <Loading />}

          {!isPending && (
            <BlogContext.Provider value={[users, posts]}>
              <div className="content">
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

                <Ranking className="ranking" />
              </div>
            </BlogContext.Provider>
          )}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
