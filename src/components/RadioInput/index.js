import React from "react";

import "./styles.css";

function RadioInput({ onClick, className, isSelected, ...rest }) {
  return (
    <div
      key={rest.key}
      onClick={onClick}
      className={`RadioInput-container ${className}`}
    >
      <div className={`innerCircle ${isSelected && "selected"}`} />
    </div>
  );
}

export default RadioInput;
