import "./App.css";
import Stats from "./components/Stats/Stats";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Ranking from "./components/Ranking/Ranking";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <div>
          <Login />
        </div>
        <Ranking className="ranking" />
      </div>
    </div>
  );
}

export default App;
