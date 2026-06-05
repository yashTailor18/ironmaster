import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("loginTime");

  const fifteenMinutes = 15 * 60 * 1000;

  if (
    !token ||
    !loginTime ||
    Date.now() - Number(loginTime) > fifteenMinutes
  ) {

    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");

    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;