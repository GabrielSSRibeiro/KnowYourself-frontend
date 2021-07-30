import React from "react";

import "./styles.css";

function TextInput({ text, className, ...rest }) {
  return (
    <div key={rest.key} className={`TextInput-container ${className}`}>
      <label>{text}</label>
      <input type="text"></input>
    </div>
  );
}

export default TextInput;
