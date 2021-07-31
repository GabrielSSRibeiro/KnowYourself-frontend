import React from "react";

import "./styles.css";

function RadioInput({ onClick, className, isSelected, ...rest }) {
  return (
    <div
      key={rest.key}
      onClick={onClick}
      className={`RadioInput-container ${className}`}
    >
      {isSelected && <div className="innerCircle" />}
    </div>
  );
}

export default RadioInput;
