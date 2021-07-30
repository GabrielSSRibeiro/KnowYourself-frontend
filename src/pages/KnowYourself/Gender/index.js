import React from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";

import "./styles.css";

function Gender({ history }) {
  function HandleBack() {
    history.push("/birth-date");
  }

  function HandleNext() {
    history.push("/name");
  }

  return (
    <div className="Gender-container">
      <NaviBar />
      <h2>Gender</h2>
      <form>
        <div>
          <input type="radio"></input>
          <label>N</label>
        </div>
        <div>
          <input type="radio"></input>
          <label>F</label>
        </div>
        <div>
          <input type="radio"></input>
          <label>M</label>
        </div>

        <div>
          <Button
            size="medium"
            color="tertiary"
            text="Back"
            onClick={HandleBack}
          />
          <Button
            size="medium"
            color="primary"
            text="Next"
            onClick={HandleNext}
          />
        </div>
      </form>
    </div>
  );
}

export default Gender;
