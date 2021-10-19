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

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const loadData = () => {
    fetchData()
      .then(([users, posts]) => {
        setUsers(users);
        setPosts(posts);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
      });
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
                      <Posts />
                    </div>
                  )}
                </Route>
              </Switch>

              <Ranking className="ranking" />
            </div>
          )}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
