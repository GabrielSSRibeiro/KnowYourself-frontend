import React from "react";

import "./styles.css";

function TextInput({
  label,
  placeholder,
  errorMessage,
  results,
  className,
  key,
  ...rest
}) {
  return (
    <div key={key} className={`TextInput-container ${className}`}>
      <label>{label}</label>
      <main>
        <input
          type="text"
          placeholder={placeholder}
          className={results === errorMessage && "text-noResults"}
          {...rest}
        ></input>
        {results && (
          <i
            className={`fas ${
              results && results !== errorMessage
                ? "fa-check"
                : "fa-exclamation-triangle"
            }`}
          ></i>
        )}
      </main>
      <p>{results === errorMessage && errorMessage}</p>
    </div>
  );
}

export default TextInput;
