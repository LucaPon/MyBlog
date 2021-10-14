import "./App.css";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Ranking from "./components/Ranking/Ranking";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Login />
        <Ranking className="ranking" />
      </div>
    </div>
  );
}

export default App;
