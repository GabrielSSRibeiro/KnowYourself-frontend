import React, { useState, useEffect } from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import RadioInput from "../../../components/RadioInput";

import "./styles.css";

function Gender({ history }) {
  const [selectedGender, setSelectedGender] = useState(
    localStorage.getItem("gender") || ""
  );

  const genderOptions = ["Female", "Male", "Rather not to say"];

  function HandleBack() {
    history.push("/birth-date");
  }

  function HandleNext() {
    history.push("/name");
  }

  function SelectGender(gender) {
    localStorage.setItem("gender", gender);
    setSelectedGender(gender);
  }

  useEffect(() => {
    const day = localStorage.getItem("day");
    const month = localStorage.getItem("month");
    const year = localStorage.getItem("year");

    if (!day || !month || !year) {
      HandleBack();
    }
  });

  return (
    <div className="Gender-container">
      <NaviBar />
      <h2>Gender</h2>
      <form>
        <main>
          {genderOptions.map((gender, index) => (
            <div key={gender} className="gender-radio">
              <RadioInput
                onClick={() => SelectGender(gender)}
                isSelected={genderOptions[index] === selectedGender}
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
            isDisabled={selectedGender === ""}
          />
        </footer>
      </form>
    </div>
  );
}

export default Gender;
