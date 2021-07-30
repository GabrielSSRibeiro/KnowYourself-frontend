import React from "react";
//  import api from "../../services/api";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";

import "./styles.css";

function Name({ history }) {
  function HandleBack() {
    history.push("/gender");
  }

  function HandleNext() {
    history.push("/result");
  }

  //   useEffect(() => {
  //   api.get("api/Sign/index").then((response) => {
  //   });
  // }, []);

  return (
    <div className="Name-container">
      <NaviBar />
      <h2>Name</h2>
      <form>
        <div>
          <label>Given Name</label>
          <input type="text"></input>
          <div>
            <input type="checkbox"></input>
            <label>Terms</label>
          </div>
        </div>

        <div>
          <Button
            size="medium"
            color="tertiary"
            text="Back"
            onClick={HandleBack}
          />
          <Button
            size="medium"
            color="primary"
            text="Next"
            onClick={HandleNext}
          />
        </div>
      </form>
      {/* link style for terms, but no behavior */}
    </div>
  );
}

export default Name;
