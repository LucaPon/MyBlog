import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <h1>
            My<span>BLOG</span>
          </h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Esplora</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
