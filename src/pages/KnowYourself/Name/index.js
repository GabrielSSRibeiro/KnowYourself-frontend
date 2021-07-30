import React from "react";
//  import api from "../../services/api";

import NaviBar from "../../../components/NaviBar";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import CheckInput from "../../../components/CheckInput";

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

  //just one call to ResultController

  // }, []);

  return (
    <div className="Name-container">
      <NaviBar />
      <h2>Name</h2>
      {/* breadcrumbs instead of header */}
      <form>
        <main>
          <TextInput text="Given Name" className="item" />
          <CheckInput text="Terms" className="item" />
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
      {/* link style for terms, but no behavior */}
    </div>
  );
}

export default Name;
