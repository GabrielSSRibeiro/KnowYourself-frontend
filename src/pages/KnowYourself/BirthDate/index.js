import React, { useState, useEffect, useMemo } from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import "./styles.css";

function BirthDate({ history }) {
  const [day, setDay] = useState(localStorage.getItem("day") || "");
  const [month, setMonth] = useState(localStorage.getItem("month") || "");
  const [year, setYear] = useState(localStorage.getItem("year") || "");

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const firstYear = 1893;
  const lastYear = 2012;
  const years = Array.from(Array(lastYear - firstYear + 1).keys()).map(
    (item) => lastYear - item
  );

  const selectFields = [
    { label: "Month", options: months, value: month, setValue: setMonth },
    { label: "Day", options: days, value: day, setValue: setDay },
    { label: "Year", options: years, value: year, setValue: setYear },
  ];

  function HandleClick() {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);

    history.push("/gender");
  }

  useEffect(() => {
    function HandleDates() {
      if (day > 28 && month === months[1]) {
        if (
          !(
            day === 29 &&
            ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
          )
        ) {
          setDay("");
        }
      } else if (day === 31 && [4, 6, 9, 11].find((m) => m === month)) {
        setDay("");
      }
    }

    HandleDates();
  }, [day, month, year, months]);

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
              setValue={field.setValue}
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
          isDisabled={!(day && month && year)}
        />
      </form>
    </div>
  );
}

export default BirthDate;
