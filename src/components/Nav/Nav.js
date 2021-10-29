import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../../shared/UserContext";
import { useLocation } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";

const Nav = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = (e) => {
    toggleMenuOpen(null);
    setLoggedUser(null);
  };

  const toggleMenuOpen = (e) => {
    setMenuOpen((menuOpen) => !menuOpen);
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
          <ul className={`nav-links ${menuOpen && "nav-active"}`}>
            <li>
              <Link
                className={`${location.pathname === "/" && "active"}`}
                onClick={toggleMenuOpen}
                to="/"
              >
                Esplora
              </Link>
            </li>
            <li>
              <Link
                className={`${location.pathname === "/account" && "active"}`}
                onClick={toggleMenuOpen}
                to="/account"
              >
                {loggedUser.name}
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        )}

        {loggedUser && (
          <img
            onClick={toggleMenuOpen}
            src={menuOpen ? close : hamburger}
            className="hamburger"
          />
        )}
      </nav>
    </div>
  );
};

export default Nav;
