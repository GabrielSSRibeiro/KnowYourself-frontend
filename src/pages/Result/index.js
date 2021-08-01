import React, { useState, useEffect } from "react";
import api from "../../services/api";

import NaviBar from "../../components/NaviBar";

import "./styles.css";

function Gender({ history }) {
  const [sign, setsign] = useState("SIGN");
  const [generation, setGeneration] = useState("GENERATION");
  const [names, setNames] = useState("NAMES");

  const day = localStorage.getItem("day");
  const month = localStorage.getItem("month");
  const year = localStorage.getItem("year");
  const gender = localStorage.getItem("gender");
  const name = localStorage.getItem("name" || "There");

  useEffect(() => {
    // just one call to ResultController
    // api
    //   .get("api/", { params: { day, month, year, gender, name } })
    //   .then((response) => {
    //     setsign("");
    //     setGeneration("");
    //     setNames("");
    //   });
    // if (!sign && !generation && !names) {
    //   history.push("/");
    // }
  });

  return (
    <div className="Result-container">
      <NaviBar />
      <h2>Hey {name}</h2>
      {names && (
        <div className="result-name">
          <h4>Here are some interesting details about your name!</h4>
          <p>
            Your name is presente in {names}, similiar names are {names}.
          </p>
        </div>
      )}
      {generation && (
        <div className="result-generation">
          <h4>
            You were born in {year} and you are part of generation {generation}!
          </h4>
          <p>{generation}.</p>
        </div>
      )}
      {sign && (
        <div className="result-sign">
          <h4>Your zodiac sign is {sign}!</h4>
          <p>{sign}</p>
          {sign && <p>{sign}</p>}
        </div>
      )}
    </div>
  );
}

export default Gender;
