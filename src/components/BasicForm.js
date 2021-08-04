import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    inputValue: nameInputValue,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    hasError: nameInputHasError,
    reset: nameInputReset,
    isValueValid: isNameValueValid,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: lNameInputValue,
    valueChangeHandler: lNameInputChangeHandler,
    inputBlurHandler: lNameInputBlurHandler,
    hasError: lNameInputHasError,
    reset: lNameInputReset,
    isValueValid: isLNameValueValid,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: emailInputValue,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    hasError: emailInputHasError,
    reset: emailInputReset,
    isValueValid: isEmailValueValid,
  } = useInput((value) => value.trim().includes("@"));

  let isFormValid = false;
  if (isNameValueValid && isLNameValueValid && isEmailValueValid) {
    isFormValid = true;
  }
  const formSubmissionHandler = () => {
    if (!isNameValueValid || !isLNameValueValid || !isEmailValueValid) {
      return;
    }
    nameInputReset();
    lNameInputReset();
    emailInputReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameInputValue}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">The name cannot be empty</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lNameInputValue}
            onChange={lNameInputChangeHandler}
            onBlur={lNameInputBlurHandler}
          />
          {lNameInputHasError && (
            <p className="error-text">The last name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={emailInputValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">The last name cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
