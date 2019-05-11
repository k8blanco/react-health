import React from "react";
import "./containerBox.scss";

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return (
  <div className= "containerBox">
  <div className="d-flex p-2 align-items-center ">
  {children}
  </div>
  </div>
  )
}

