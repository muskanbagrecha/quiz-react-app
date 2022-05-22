import { useAuth } from "../../hooks/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { OpenEye, CloseEye } from "../../assets/icons/Icons";
import { validateSignupDetails } from "../../utils/authUtils";
import spinner from "../../assets/spinner.svg";

export const SignupPage = () => {
  const { signupHandler, authLoading, authError } = useAuth();

  const intialDataState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialErrorState = {
    error: false,
    message: "",
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  };

  const [signupDetails, setSignupDetails] = useState(intialDataState);
  const [inputError, setInputError] = useState(initialErrorState);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const signupInputChangeHandler = (event) => {
    setSignupDetails({
      ...signupDetails,
      [event.target.name]: event.target.value,
    });
  };

  const showPasswordHandler = (passwordType) => {
    setShowPassword({
      ...showPassword,
      [passwordType]: !showPassword[passwordType],
    });
  };

  const signupFormSubmitHandler = (e) => {
    setInputError(initialErrorState);
    e.preventDefault();
    const isValid = validateSignupDetails(
      signupDetails,
      setInputError,
      setSignupDetails
    );
    if (isValid) {
      signupHandler(signupDetails);
      setSignupDetails(intialDataState);
    }
  };

  return (
    <div className="sub-container">
      <main className="signup-container">
        <div className="loader">
          {authLoading && <img src={spinner} alt="loading" />}
        </div>
        <form className="input-form" onSubmit={signupFormSubmitHandler}>
          <h3>Signup</h3>
          <label className="label" htmlFor="first-name">
            First Name<span className="red">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            required
            value={signupDetails.firstName}
            onChange={signupInputChangeHandler}
          />
          <label className="label" htmlFor="last-name">
            Last Name<span className="red">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            required
            value={signupDetails.lastName}
            onChange={signupInputChangeHandler}
          />

          <label className="label" htmlFor="email">
            Email Id<span className="red">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            required
            value={signupDetails.email}
            onChange={signupInputChangeHandler}
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <div>
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              className={
                "password-input" +
                (inputError.passwordError ? " input-error" : "")
              }
              placeholder="*********"
              required
              value={signupDetails.password}
              onChange={signupInputChangeHandler}
            />
            <span
              onClick={() => {
                showPasswordHandler("password");
              }}
            >
              {!showPassword.password ? <OpenEye /> : <CloseEye />}
            </span>
          </div>

          <label className="label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <div>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              className={
                "password-input" +
                (inputError.passwordError ? " input-error" : "")
              }
              placeholder="*********"
              required
              value={signupDetails.confirmPassword}
              onChange={signupInputChangeHandler}
            />
            <span
              onClick={() => {
                showPasswordHandler("confirmPassword");
              }}
            >
              {!showPassword.confirmPassword ? <OpenEye /> : <CloseEye />}
            </span>
          </div>

          <div className="login__CTA">
            <button className="btn btn-primary">Signup</button>
            <Link className="btn btn-link-text align-center" to="/login">
              Existing user? Login.
            </Link>
          </div>
          {inputError.error && (
            <span className="red error-message">{inputError.message}</span>
          )}
          {authError && (
            <p className="red error-message">{authError.data.errors[0]}</p>
          )}
        </form>
      </main>
    </div>
  );
};
