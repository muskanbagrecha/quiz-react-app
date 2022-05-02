export const validateSignupDetails = (
  signupDetails,
  setInputError,
  setSignupDetails
) => {
  const { password, confirmPassword } = signupDetails;
  if (password.length < 6) {
    setInputError({
      error: true,
      message: "Password must be at least 6 characters long",
      passwordError: true,
    });
    setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
    return false;
  }

  if (password.search(/\d/) === -1) {
    setInputError({
      error: true,
      message: "Password must contain at least one number",
      passwordError: true,
    });
    setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
    return false;
  }

  if (password.search(/[a-z]/) === -1) {
    setInputError({
      error: true,
      message: "Password must contain at least one lowercase letter",
      passwordError: true,
    });
    setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
    return false;
  }

  if (password.search(/[A-Z]/) === -1) {
    setInputError({
      error: true,
      message: "Password must contain at least one uppercase letter",
      passwordError: true,
    });
    setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
    return false;
  }

  if (password !== confirmPassword) {
    setInputError({
      error: true,
      message: "Passwords do not match",
      confirmPasswordError: true,
      passwordError: true,
    });
    setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
    return false;
  }
  return true;
};
