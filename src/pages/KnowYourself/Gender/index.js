import React from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import RadioInput from "../../../components/RadioInput";

import "./styles.css";

function Gender({ history }) {
  const genderOptions = ["N", "F", "M"];

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
        <main>
          {genderOptions.map((gender) => (
            <RadioInput key={gender} className="radio" text={gender} />
          ))}
        </main>

        <footer>
          <Button
            size="medium"
            color="tertiary"
            text="Back"
            className="footer-button"
            onClick={HandleBack}
          />
          <Button
            size="medium"
            color="primary"
            text="Next"
            onClick={HandleNext}
          />
        </footer>
      </form>
    </div>
  );
}

export default Gender;
