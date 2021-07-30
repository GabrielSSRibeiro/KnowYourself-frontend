import React from "react";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import "./styles.css";

function BirthDate({ history }) {
  const dateFields = ["Day", "Month", "Year"];

  function HandleClick() {
    history.push("/gender");
  }

  return (
    <div className="BirthDate-container">
      <NaviBar />
      <h2>Birth Date</h2>
      <form>
        <main>
          {dateFields.map((field) => (
            <Select key={field} className="select" text={field} />
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
