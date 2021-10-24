import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../../shared/UserContext";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const location = useLocation();

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
              <Link
                className={`${location.pathname === "/" && "active"}`}
                to="/"
              >
                Esplora
              </Link>
            </li>
            <li>
              <Link
                className={`${location.pathname === "/account" && "active"}`}
                to="/account"
              >
                {loggedUser.name}
              </Link>
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
