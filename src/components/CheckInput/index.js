import React from "react";

import "./styles.css";

function CheckInput({ onClick, className, isSelected, key }) {
  return (
    <div
      key={key}
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
