import { Navigate, useLocation } from "react-router-dom";
import { useToast, useAuth } from "../../context";

export const RequiresAuth = ({ children }) => {
  const { addInfoToast } = useToast();
  const location = useLocation();
  const {
    authState: { isAuthenticated },
  } = useAuth();

  return isAuthenticated
    ? children
    : (addInfoToast("Please login to continue!"),
      (<Navigate to="/login" state={{ from: location }} replace />));
};
