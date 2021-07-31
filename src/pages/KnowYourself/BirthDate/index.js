import React, { useState } from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import "./styles.css";

function BirthDate({ history }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from(Array(31 + 1).keys()).slice(1);
  const months = Array.from(Array(12 + 1).keys()).slice(1);
  const years = Array.from(Array(new Date().getFullYear() + 1).keys()).slice(
    1893
  );

  const selectFields = [
    { label: "Day", options: days, value: day, setValue: HandleDay },
    { label: "Month", options: months, value: month, setValue: HandleMonth },
    { label: "Year", options: years, value: year, setValue: HandleYear },
  ];

  function HandleDay(day) {
    if (day > 28 && month === 2) {
      if (day === 29) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          setDay(day);
        }
      }
    } else if (day === 31 && month) {
      if (![4, 6, 9, 11].find((m) => m === month)) {
        setDay(day);
      }
    } else {
      setDay(day);
    }
  }

  function HandleMonth(month) {
    if (day > 28 && month === 2) {
      if (day === 29) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          setMonth(month);
        }
      }
    } else if (day === 31 && month) {
      if (![4, 6, 9, 11].find((m) => m === month)) {
        setMonth(month);
      }
    } else {
      setMonth(month);
    }
  }

  function HandleYear(year) {
    if (day > 28 && month === 2) {
      if (day === 29) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          setYear(year);
        }
      }
    } else if (day === 31 && month) {
      if (![4, 6, 9, 11].find((m) => m === month)) {
        setYear(year);
      }
    } else {
      setYear(year);
    }
  }

  function HandleClick() {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);

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
