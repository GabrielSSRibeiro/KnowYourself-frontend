import React from "react";

import "./styles.css";

function Select({ text, className, ...rest }) {
  return (
    <div key={rest.key} className={`Select-container ${className}`}>
      <select>{text}</select>
    </div>
  );
}

export default Select;
