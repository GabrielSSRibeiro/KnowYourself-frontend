import React from "react";

import "./styles.css";

function Select({ text, className, key }) {
  return (
    <div key={key} className={`Select-container ${className}`}>
      <select>{text}</select>
    </div>
  );
}

export default Select;
