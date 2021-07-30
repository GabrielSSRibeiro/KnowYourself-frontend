import React from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";

import "./styles.css";

function BirthDate({ history }) {
  function HandleClick() {
    history.push("/gender");
  }

  return (
    <div className="BirthDate-container">
      <NaviBar />
      <h2>Birth Date</h2>
      <form>
        <label>Day</label>
        <input type="text"></input>
        <label>Month</label>
        <input type="text"></input>
        <label>Year</label>
        <input type="text"></input>

        <Button
          size="medium"
          color="primary"
          text="Next"
          onClick={HandleClick}
        />
      </form>
    </div>
  );
}

export default BirthDate;
