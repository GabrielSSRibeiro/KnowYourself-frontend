import React, { useState } from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import "./styles.css";

function BirthDate({ history }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const selectFields = [
    { label: "Month", options: [1, 2, 3], value: month, setValue: setMonth },
    { label: "Day", options: [1, 2, 3], value: day, setValue: setDay },
    { label: "Year", options: [1, 2, 3], value: year, setValue: setYear },
  ];
  // Array.from(Array(10).keys())
  // console.log(selectOptions[0][0]);
  // leap: ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

  function HandleClick() {
    history.push("/gender");
  }

  return (
    <div className="BirthDate-container">
      <NaviBar />
      <h2>Birth Date</h2>
      <form>
        <main>
          {selectFields.map((field) => (
            <Select
              key={field.label}
              label={field.label}
              value={field.value}
              onChange={(e) => {
                field.setValue(e.target.value);
              }}
              options={field.options}
              className="birthDate-select"
            />
          ))}
        </main>

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
