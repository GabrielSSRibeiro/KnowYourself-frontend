import React from "react";

import "./styles.css";

function Button({
  size,
  color,
  text,
  onClick,
  isDisabled,
  className,
  ...rest
}) {
  return (
    <div
      key={rest.key}
      className={`Button-container 
      Button-${size} Button-${color} 
      ${isDisabled && "Button-disabled"} ${className}`}
      onClick={!isDisabled && onClick}
    >
      <span>{text}</span>
    </div>
  );
}

export default Button;
