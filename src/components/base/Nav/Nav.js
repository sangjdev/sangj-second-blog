import React from "react";
import { Link } from "gatsby";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/tags">TAGS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
