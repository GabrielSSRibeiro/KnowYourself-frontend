import React from "react";

import NaviBar from "../../components/NaviBar";
import Button from "../../components/Button";

import "./styles.css";

function Home({ history }) {
  function HandleClick() {
    history.push("/birth-date");
  }

  return (
    <div className="Home-container">
      <NaviBar />
      <h1>Welcome</h1>
      <p>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit
        amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
        eget tincidunt nibh pulvinar a.
      </p>

      <Button
        size="large"
        color="primary"
        text="Let's Start!"
        onClick={HandleClick}
      />
    </div>
  );
}

export default Home;
