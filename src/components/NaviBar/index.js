import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function NaviBar() {
  return (
    <div className="NaviBar-container">
      <h2>Know Yourself</h2>
      <div>
        <Link to="/" className="NaviBar-link">
          Home
        </Link>
        <Link to="/about" className="NaviBar-link">
          About
        </Link>
      </div>
    </div>
  );
}

export default NaviBar;
