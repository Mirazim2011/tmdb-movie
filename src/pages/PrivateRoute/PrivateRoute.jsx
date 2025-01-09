import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, isAuthorizated }) {
  return isAuthorizated ? children : <Navigate to={"/login"} />;
}
