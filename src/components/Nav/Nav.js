import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../../shared/UserContext";

const Nav = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const handleLogout = (e) => {
    setLoggedUser(null);
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <h1>
            My<span>BLOG</span>
          </h1>
        </div>
        {loggedUser && (
          <ul className="nav-links">
            <li>
              <Link to="/">Esplora</Link>
            </li>
            <li>
              <Link to="/account">{loggedUser.name}</Link>
            </li>
            <li>
              <a onClick={handleLogout} href="#">
                Logout
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Nav;
