import React, { useState } from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import RadioInput from "../../../components/RadioInput";

import "./styles.css";

function Gender({ history }) {
  const [selectedGender, setSelectedGender] = useState("");

  const genderOptions = ["Rather not to say", "Female", "Male"];

  function HandleBack() {
    history.push("/birth-date");
  }

  function HandleNext() {
    history.push("/name");
  }

  function SelectGender(gender) {
    setSelectedGender(gender);
  }

  return (
    <div className="Gender-container">
      <NaviBar />
      <h2>Gender</h2>
      <form>
        <main>
          {genderOptions.map((gender, index) => (
            <div key={gender} className="radio">
              <RadioInput
                onClick={() => SelectGender(gender)}
                isSelected={
                  genderOptions[index] === selectedGender ? true : false
                }
              />
              <label>{gender}</label>
            </div>
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
