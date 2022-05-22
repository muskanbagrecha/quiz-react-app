import { useState } from "react";
import { useAuth } from "../../hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import spinner from "../../assets/spinner.svg";
import { OpenEye, CloseEye } from "../../assets/icons/Icons";

export const LoginPage = () => {
  const { loginHandler, authLoading, authError } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const data = location?.state?.data;
  const initialLoginState = {
    email: "",
    password: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialLoginState);
  const [showPassword, setShowPassword] = useState(false);

  const loginInputHandler = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const testLogin = (e) => {
    e.preventDefault();
    setLoginDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails, from, data);
    setLoginDetails(initialLoginState);
  };

  return (
    <div className="sub-container">
      <main className="login-container">
        {authLoading && <img src={spinner} alt="loading" />}
        <form className="input-form" onSubmit={formSubmitHandler}>
          <h3>Login</h3>
          <label htmlFor="email">
            Email
            <span className="red">*</span>
          </label>
          <input
            type="text"
            name="email"
            className={authError ? "input-error" : ""}
            value={loginDetails.email}
            placeholder="abc@gmail.com"
            required
            onChange={loginInputHandler}
          />
          <label className="label" htmlFor="password">
            Password
            <span className="red">*</span>
          </label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={"password-input" + (authError ? " input-error" : "")}
              value={loginDetails.password}
              placeholder="*********"
              required
              onChange={loginInputHandler}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {!showPassword ? <OpenEye /> : <CloseEye />}
            </span>
          </div>
          <div className="login__CTA">
            <button className="btn btn-primary">Login</button>
            <Link className="btn-link-text align-center" to="/signup">
              Create new account
            </Link>
            <button className="btn btn-outline" onClick={testLogin}>
              Test Credentials
            </button>
          </div>
          {authError && (
            <p className="red error-message">{authError.data.errors[0]}</p>
          )}
        </form>
      </main>
    </div>
  );
};
