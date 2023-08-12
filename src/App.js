import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // num1
  const [number1, setNumber1] = useState("");
  // num 2
  const [number2, setNumber2] = useState("");
  // error msg
  const [errorMessage, setErrorMessage] = useState("");
  // result 
  const [result, setResult] = useState("");
  // succces
  const [successMessage, setSuccessMessage] = useState("");

  const add = () => {
    if (validateInputs()) {
      const sum = parseFloat(number1) + parseFloat(number2);
      setResult(sum);
      setSuccessMessage("Calculation successful");
      setErrorMessage("");
    }
  };

  const subtract = () => {
    if (validateInputs()) {
      const difference = parseFloat(number1) - parseFloat(number2);
      setResult(difference);
      setSuccessMessage("Calculation successful");
      setErrorMessage("");
    }
  };

  const multiply = () => {
    if (validateInputs()) {
      const product = parseFloat(number1) * parseFloat(number2);
      setResult(product);
      setSuccessMessage("Calculation successful");
      setErrorMessage("");
    }
  };

  const divide = () => {
    if (validateInputs() && parseFloat(number2) !== 0) {
      const quotient = parseFloat(number1) / parseFloat(number2);
      setResult(quotient);
      setSuccessMessage("Calculation successful");
      setErrorMessage("");
    } else {
      setErrorMessage("Cannot divide by zero");
      setSuccessMessage("");
    }
  };

  // checking for valid input
  const validateInputs = () => {
    if (number1.trim() === "" || number2.trim() === "") {
      setErrorMessage("Please enter both numbers");
      setSuccessMessage("");
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(number1) || !/^-?\d*\.?\d+$/.test(number2)) {
      setErrorMessage("Invalid number format");
      setSuccessMessage("");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Enter number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>

      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default App;
