import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

import NaviBar from "../../../components/NaviBar";
import ProgressBar from "../../../components/ProgressBar";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import CheckInput from "../../../components/CheckInput";

import "./styles.css";

function Name({ history }) {
  const [selected, setSelected] = useState(false);
  const [name, setName] = useState("");
  const [results, setResults] = useState("");

  const errorMessage = "No results, please try another name.";

  function HandleCheck() {
    setSelected(!selected);
  }

  function HandleBack() {
    history.push("/gender");
  }

  function HandleNext() {
    localStorage.setItem("name", name);

    history.push("/result");
  }

  useEffect(() => {
    if (name) {
      const timeoutId = setTimeout(
        () =>
          api
            .get("api/Name/lookup", { params: { name } })
            .then((response) => {
              setResults(name);
            })
            .catch(() => {
              setResults(errorMessage);
            }),
        250
      );

      return () => clearTimeout(timeoutId);
    } else {
      setResults("");
    }
  }, [name]);

  useEffect(() => {
    const gender = localStorage.getItem("gender");

    if (!gender) {
      HandleBack();
    }
  });

  return (
    <div className="Name-container">
      <NaviBar />
      <ProgressBar currentStep={3} className="name-progress" />
      {/* breadcrumbs instead of header */}
      <form>
        <main>
          <TextInput
            label="Given Name"
            errorMessage={errorMessage}
            results={results}
            className="name-item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <section>
            <CheckInput onClick={HandleCheck} isSelected={selected} />
            <p>
              I Agree with Know Yourself{" "}
              <Link to="/name">Terms of Service</Link>
            </p>
          </section>
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
            isDisabled={!results || results === errorMessage || !selected}
          />
        </footer>
      </form>
      {/* link style for terms, but no behavior */}
    </div>
  );
}

export default Name;
