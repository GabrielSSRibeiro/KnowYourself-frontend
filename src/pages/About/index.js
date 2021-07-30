import React from "react";
import NaviBar from "../../components/NaviBar";

import "./styles.css";

function About() {
  return (
    <div className="About-container">
      <NaviBar />
      <h1>About Us</h1>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin molestie malesuada. Sed porttitor lectus nibh. Cras
        ultricies ligula sed magna dictum porta.
      </p>
      <p>
        Donec sollicitudin molestie malesuada. Nulla porttitor accumsan
        tincidunt. Donec rutrum congue leo eget malesuada. Nulla porttitor
        accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    </div>
  );
}

export default About;
