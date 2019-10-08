import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
export default function Operators() {
  const [currentOperator, setCurrentOperator] = useState(operators);
  return (
    <div className="operators">
      {currentOperator.map((operator, index) => (
        <OperatorButton key={index} operator={operator} />
      ))}
    </div>
  );
}

// const Operators = () => {
// STEP 2 - add the imported data to state
// return (
//   <div>
{
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
}
{
  /* </div>
  );
}; */
}
