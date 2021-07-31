import React from "react";

import "./styles.css";

function Select({ label, value, options, className, ...rest }) {
  return (
    <div className={`Select-container ${className}`}>
      <label>{label}</label>
      <select value={value} type="text" {...rest}>
        <option disabled hidden />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default Select;
