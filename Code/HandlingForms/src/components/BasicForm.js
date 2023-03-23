import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: firstNameValue,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurredHandler,
    reset: firstNameReset,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurredHandler,
    reset: lastNameReset,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurredHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurredHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">First Name cannot be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurredHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangedHandler}
          onBlur={emailBlurredHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
