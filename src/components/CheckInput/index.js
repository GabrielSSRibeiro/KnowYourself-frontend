import React from "react";

import "./styles.css";

function CheckInput({ onClick, className, isSelected, ...rest }) {
  console.log(isSelected);
  return (
    <div
      key={rest.key}
      onClick={onClick}
      className={`CheckInput-container 
      ${className} 
      ${isSelected && "check-checked"}`}
    >
      {isSelected && <i className="fas fa-check"></i>}
    </div>
  );
}

export default CheckInput;
