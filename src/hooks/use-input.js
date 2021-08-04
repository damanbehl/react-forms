import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const isValueValid = validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  return {
    inputValue: enteredValue,
    valueChangeHandler,
    inputBlurHandler,
    hasError,
    isValueValid,
    reset,
  };
};
export default useInput;
