import React, { useState, useEffect } from "react";
import api from "../../services/api";

import NaviBar from "../../components/NaviBar";

import "./styles.css";

function Gender({ history }) {
  const [sign, setsign] = useState("");
  const [generation, setGeneration] = useState("");
  const [names, setNames] = useState("");

  const day = localStorage.getItem("day");
  const month = localStorage.getItem("month");
  const year = localStorage.getItem("year");
  const gender = localStorage.getItem("gender");
  const name = localStorage.getItem("name" || "There");

  useEffect(() => {
    api
      .get("api/Result", { params: { day, month, year, name } })
      .then((response) => {
        setsign(response.data.sign);
        setGeneration(response.data.generation);

        let lookupName = JSON.parse(response.data.lookupName)[0].usages.map(
          (option) => option.usage_full
        );
        lookupName = lookupName.toString().replaceAll(",", ", ");

        let relatedName = JSON.parse(response.data.relatedName).names;
        relatedName = relatedName.toString().replaceAll(",", ", ");

        setNames({ usage: lookupName, related: relatedName });
      })
      .catch(() => {
        history.push("/");
      });
  }, [day, month, year, name, history]);

  return (
    <div className="Result-container">
      {sign && (
        <>
          <NaviBar />
          <h2>Hey {name}, ready to know yourself?</h2>
          <div className="result-name">
            <h4>Here are some interesting details about your name!</h4>
            <p>
              Your name is present in {names.usage}. Names that are similiar to{" "}
              {name} in these languages are {names.related}.
            </p>
          </div>
          <div className="result-generation">
            <h4>
              You were born in {year} and you are part of the {generation.name}!
            </h4>
            <p>{generation.description}.</p>
          </div>
          <div className="result-sign">
            <h4>Your zodiac sign is {sign.name}!</h4>
            <p>{sign.description}</p>
            {gender !== "Rather not to say" && (
              <p>{gender === "Female" ? sign.fDetails : sign.mDetails}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Gender;
