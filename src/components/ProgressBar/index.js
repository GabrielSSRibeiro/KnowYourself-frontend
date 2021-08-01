import React from "react";

import "./styles.css";

function ProgressBar({ currentStep, className }) {
  const steps = ["Birth Date", "Gender", "Name"];

  return (
    <div className={`ProgressBar-container ${className}`}>
      {steps.map((step, index) => (
        <section
          key={step}
          style={{ zIndex: steps.length - index }}
          className={`progressBar-${
            index < currentStep - 1
              ? "completed"
              : index === currentStep - 1
              ? "current"
              : "incomplete"
          }`}
        >
          <span>{step}</span>
        </section>
      ))}
    </div>
  );
}

export default ProgressBar;
