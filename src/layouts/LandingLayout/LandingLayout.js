import React from "react";
import "./LandingLayout.scss";

export default function LandingLayout(props) {
  const { children } = props;

  return (
    <div>
      <h1>Hola</h1>
      {children}
    </div>
  );
}
