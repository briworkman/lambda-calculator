import React from "react";
import Operators from "./Operators";

const OperatorButton = props => {
  return <button className="operator-button">{props.operator.char}</button>;
};

export default OperatorButton;
