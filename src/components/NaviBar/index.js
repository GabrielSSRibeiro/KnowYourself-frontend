import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function NaviBar() {
  function HandleClick() {
    localStorage.removeItem("day");
    localStorage.removeItem("month");
    localStorage.removeItem("year");
    localStorage.removeItem("gender");
    localStorage.removeItem("name");
  }

  return (
    <div className="NaviBar-container">
      <Link to="/" onClick={HandleClick} className="NaviBar-title">
        Know Yourself
      </Link>
      <aside>
        <Link to="/" onClick={HandleClick} className="NaviBar-link">
          Home
        </Link>
        <Link to="/about" onClick={HandleClick} className="NaviBar-link">
          About
        </Link>
      </aside>
    </div>
  );
}

export default NaviBar;
