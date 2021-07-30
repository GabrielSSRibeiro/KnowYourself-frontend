import React from "react";

import "./styles.css";

function CheckInput({ text, className, ...rest }) {
  return (
    <div key={rest.key} className={`CheckInput-container ${className}`}>
      <input type="checkbox"></input>
      <label>{text}</label>
    </div>
  );
}

export default CheckInput;
