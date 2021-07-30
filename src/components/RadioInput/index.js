import React from "react";

import "./styles.css";

function RadioInput({ text, className, ...rest }) {
  return (
    <div key={rest.key} className={`RadioInput-container ${className}`}>
      <input type="radio"></input>
      <label>{text}</label>
    </div>
  );
}

export default RadioInput;
