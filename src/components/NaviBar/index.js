import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function NaviBar() {
  return (
    <div className="NaviBar-container">
      <Link to="/" className="NaviBar-title">
        Know Yourself
      </Link>
      <aside>
        <Link to="/" className="NaviBar-link">
          Home
        </Link>
        <Link to="/about" className="NaviBar-link">
          About
        </Link>
      </aside>
    </div>
  );
}

export default NaviBar;
